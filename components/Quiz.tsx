"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import LeadForm from "./LeadForm";

type Option = { text: string; score: 0 | 1 | 2 };
type Question = { q: string; options: Option[]; notes: [string, string, string] };

const QUESTIONS: Question[] = [
  {
    q: "When something goes wrong in your organization, how do you usually find out?",
    options: [
      { text: "People tell me directly — early, and to my face.", score: 0 },
      { text: "It reaches me eventually, usually softened along the way.", score: 1 },
      { text: "I find out late, sideways, or from the numbers.", score: 2 },
    ],
    notes: [
      "Noted — truth still travels to you.",
      "Noted — truth arrives, but filtered.",
      "Noted — the truth is routing around you.",
    ],
  },
  {
    q: "Your best people — the ones who care the most. How are they doing?",
    options: [
      { text: "Energized. They talk about the work like they own it.", score: 0 },
      { text: "Showing up, but the spark is quieter than it used to be.", score: 1 },
      { text: "Some have gone quiet. A few have already left.", score: 2 },
    ],
    notes: [
      "Your carriers still care out loud.",
      "The spark going quiet is a signal, not a mood.",
      "Quiet is usually how caring ends.",
    ],
  },
  {
    q: "When your leadership team disagrees, what actually happens?",
    options: [
      { text: "It gets argued openly, decided, and everyone commits.", score: 0 },
      { text: "It gets discussed — then relitigated in hallways afterward.", score: 1 },
      { text: "It doesn't surface. The real conversation happens elsewhere.", score: 2 },
    ],
    notes: [
      "Conflict happens in the room. That's health.",
      "Decided, then relitigated — the classic pattern.",
      "The real meeting is happening after the meeting.",
    ],
  },
  {
    q: "The hard conversations — performance, conflict, behavior. Are they happening?",
    options: [
      { text: "Yes, by the managers who should be having them.", score: 0 },
      { text: "Sometimes — usually later than they should.", score: 1 },
      { text: "They get avoided, delegated, or handled by workaround.", score: 2 },
    ],
    notes: [
      "Your managers are doing their own hard work.",
      "Later than it should be — and the cost compounds.",
      "Avoidance has quietly become the system.",
    ],
  },
  {
    q: "If growth doubled next quarter, would your people foundation hold?",
    options: [
      { text: "Yes — roles, managers, and culture would flex and hold.", score: 0 },
      { text: "Parts would hold. Parts would crack. I know which.", score: 1 },
      { text: "Honestly, I don't know — and that worries me.", score: 2 },
    ],
    notes: [
      "You know your foundation. Rare.",
      "Knowing where the cracks are is half the work.",
      "Not knowing is itself the answer.",
    ],
  },
];

const READS = [
  {
    max: 3,
    zone: "Holding",
    title: "The foundation is holding. Protect it on purpose.",
    read:
      "Truth travels to you, your best people still care out loud, and hard conversations happen. That's rarer than you think — and it usually erodes quietly, not dramatically. The organizations that keep it treat culture as something they maintain, not something they have. This is the moment proactive work is cheapest.",
  },
  {
    max: 6,
    zone: "Softening",
    title: "The early pattern is here. You're catching it in time.",
    read:
      "Something has started to soften — the truth arrives filtered, the spark is dimmer, decisions get relitigated in hallways. None of it looks like a crisis yet, which is exactly why it gets ignored. What you're describing is how every culture problem starts: slowly, politely, and in ways the usual fixes don't touch.",
  },
  {
    max: 10,
    zone: "Speaking",
    title: "You already know. It's time someone said it out loud.",
    read:
      "Truth reaches you late, your best people are going quiet, and the real conversations are happening somewhere you're not. You don't need another engagement survey — you need someone to listen at every level, name what's actually happening, and tell you plainly. That is precisely the work we do.",
  },
];

function PlumbProgress({ step, total }: { step: number; total: number }) {
  const pct = (step / total) * 100;
  return (
    <div className="plumb-progress" aria-hidden="true">
      <div className="track">
        <div className="drop" style={{ height: `${pct}%` }} />
        <div className="bob" style={{ top: `calc(${pct}% - 5px)` }} />
      </div>
      <span className="count">
        {Math.min(step + 1, total)}<i>/{total}</i>
      </span>
    </div>
  );
}

function TypedTitle({ text }: { text: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(text.length);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setN(i);
      if (i >= text.length) clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, [text]);
  return (
    <h2 className="read-title" aria-label={text}>
      {text.slice(0, n)}
      {n < text.length && <span className="caret" aria-hidden="true" />}
    </h2>
  );
}

export default function Quiz({ initialAnswers = [] }: { initialAnswers?: number[] }) {
  const [answers, setAnswers] = useState<number[]>(initialAnswers);
  const [note, setNote] = useState<string | null>(null);
  const [reading, setReading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const idx = answers.length;
  const done = idx === QUESTIONS.length;
  const total = answers.reduce((a, b) => a + b, 0);
  const read = READS.find((r) => total <= r.max) ?? READS[READS.length - 1];

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  useEffect(() => {
    if (done && !showResult && !reading) {
      setReading(true);
      timers.current.push(
        setTimeout(() => {
          setReading(false);
          setShowResult(true);
        }, 1600)
      );
    }
  }, [done, showResult, reading]);

  const answer = useCallback(
    (score: number) => {
      if (note || done) return;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const q = QUESTIONS[idx];
      if (reduced) {
        setAnswers((a) => [...a, score]);
        return;
      }
      setNote(q.notes[score]);
      timers.current.push(
        setTimeout(() => {
          setNote(null);
          setAnswers((a) => [...a, score]);
        }, 1150)
      );
    },
    [idx, note, done]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (done || note) return;
      const n = Number(e.key);
      if (n >= 1 && n <= 3) answer(QUESTIONS[idx].options[n - 1].score);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [answer, done, note, idx]);

  if (reading || (done && !showResult)) {
    return (
      <div className="quiz-shell">
        <PlumbProgress step={QUESTIONS.length} total={QUESTIONS.length} />
        <div className="quiz-panel reading-panel">
          <p className="reading-line">Reading the pattern<span className="dots" aria-hidden="true" /></p>
        </div>
      </div>
    );
  }

  if (done && showResult) {
    const context = `Diagnostic result: "${read.title}" (score ${total}/10)`;
    return (
      <div className="quiz-result">
        <div className="zone-scale" aria-hidden="true">
          {READS.map((r) => (
            <span key={r.zone} className={`zone${r.zone === read.zone ? " on" : ""}`}>
              {r.zone}
            </span>
          ))}
        </div>
        <p className="eyebrow">Your read</p>
        <TypedTitle text={read.title} />
        <p className="read-body">{read.read}</p>
        <div className="result-cta">
          <p className="eyebrow" style={{ marginBottom: 14 }}>
            Want to talk about what&apos;s behind it?
          </p>
          <LeadForm context={context} />
        </div>
      </div>
    );
  }

  const q = QUESTIONS[idx];
  return (
    <div className="quiz-shell">
      <PlumbProgress step={idx} total={QUESTIONS.length} />
      <div className="quiz-panel" key={idx}>
        {note ? (
          <p className="field-note">
            <span className="tick" aria-hidden="true">✓</span> {note}
          </p>
        ) : (
          <>
            <p className="q">{q.q}</p>
            <div className="quiz-opts">
              {q.options.map((o, i) => (
                <button key={o.text} type="button" onClick={() => answer(o.score)}>
                  <span className="key" aria-hidden="true">{i + 1}</span>
                  {o.text}
                </button>
              ))}
            </div>
            {idx > 0 && (
              <button className="quiz-back" type="button" onClick={() => setAnswers((a) => a.slice(0, -1))}>
                ← Back
              </button>
            )}
            <p className="note">
              {idx === 0
                ? "Five questions, two minutes — no email required to see your read. Keys 1–3 work too."
                : null}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
