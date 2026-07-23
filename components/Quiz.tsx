"use client";

import { useState } from "react";
import LeadForm from "./LeadForm";

type Option = { text: string; score: 0 | 1 | 2 };
type Question = { q: string; options: Option[] };

const QUESTIONS: Question[] = [
  {
    q: "When something goes wrong in your organization, how do you usually find out?",
    options: [
      { text: "People tell me directly — early, and to my face.", score: 0 },
      { text: "It reaches me eventually, usually softened along the way.", score: 1 },
      { text: "I find out late, sideways, or from the numbers.", score: 2 },
    ],
  },
  {
    q: "Your best people — the ones who care the most. How are they doing?",
    options: [
      { text: "Energized. They talk about the work like they own it.", score: 0 },
      { text: "Showing up, but the spark is quieter than it used to be.", score: 1 },
      { text: "Some have gone quiet. A few have already left.", score: 2 },
    ],
  },
  {
    q: "When your leadership team disagrees, what actually happens?",
    options: [
      { text: "It gets argued openly, decided, and everyone commits.", score: 0 },
      { text: "It gets discussed — then relitigated in hallways afterward.", score: 1 },
      { text: "It doesn't surface. The real conversation happens elsewhere.", score: 2 },
    ],
  },
  {
    q: "The hard conversations — performance, conflict, behavior. Are they happening?",
    options: [
      { text: "Yes, by the managers who should be having them.", score: 0 },
      { text: "Sometimes — usually later than they should.", score: 1 },
      { text: "They get avoided, delegated, or handled by workaround.", score: 2 },
    ],
  },
  {
    q: "If growth doubled next quarter, would your people foundation hold?",
    options: [
      { text: "Yes — roles, managers, and culture would flex and hold.", score: 0 },
      { text: "Parts would hold. Parts would crack. I know which.", score: 1 },
      { text: "Honestly, I don't know — and that worries me.", score: 2 },
    ],
  },
];

const READS = [
  {
    max: 3,
    title: "The foundation is holding. Protect it on purpose.",
    read:
      "Truth travels to you, your best people still care out loud, and hard conversations happen. That's rarer than you think — and it usually erodes quietly, not dramatically. The organizations that keep it treat culture as something they maintain, not something they have. This is the moment proactive work is cheapest.",
  },
  {
    max: 6,
    title: "The early pattern is here. You're catching it in time.",
    read:
      "Something has started to soften — the truth arrives filtered, the spark is dimmer, decisions get relitigated in hallways. None of it looks like a crisis yet, which is exactly why it gets ignored. What you're describing is how every culture problem starts: slowly, politely, and in ways the usual fixes don't touch.",
  },
  {
    max: 10,
    title: "You already know. It's time someone said it out loud.",
    read:
      "Truth reaches you late, your best people are going quiet, and the real conversations are happening somewhere you're not. You don't need another engagement survey — you need someone to listen at every level, name what's actually happening, and tell you plainly. That is precisely the work we do.",
  },
];

export default function Quiz({ initialAnswers = [] }: { initialAnswers?: number[] }) {
  const [answers, setAnswers] = useState<number[]>(initialAnswers);
  const done = answers.length === QUESTIONS.length;
  const total = answers.reduce((a, b) => a + b, 0);
  const read = READS.find((r) => total <= r.max) ?? READS[READS.length - 1];

  if (done) {
    const context = `Diagnostic result: "${read.title}" (score ${total}/10)`;
    return (
      <div className="quiz-shell quiz-result">
        <p className="eyebrow">Your read</p>
        <h2>{read.title}</h2>
        <p className="read">{read.read}</p>
        <p>
          A five-question read is a starting point, not a diagnosis — the real version of this
          work means listening at every level of your organization. If any of this landed, tell
          us what you&apos;re seeing:
        </p>
        <LeadForm context={context} />
        <button className="quiz-back" type="button" onClick={() => setAnswers([])}>
          ← Retake the diagnostic
        </button>
      </div>
    );
  }

  const i = answers.length;
  return (
    <div className="quiz-shell">
      <div className="quiz-progress" aria-hidden="true">
        {QUESTIONS.map((_, n) => (
          <span key={n} className={n < i ? "done" : ""} />
        ))}
      </div>
      <p className="eyebrow">
        Question {i + 1} of {QUESTIONS.length}
      </p>
      <h2 className="quiz-q">{QUESTIONS[i].q}</h2>
      <div className="quiz-opts">
        {QUESTIONS[i].options.map((o) => (
          <button
            key={o.text}
            type="button"
            onClick={() => setAnswers([...answers, o.score])}
          >
            {o.text}
          </button>
        ))}
      </div>
      {i > 0 && (
        <button
          className="quiz-back"
          type="button"
          onClick={() => setAnswers(answers.slice(0, -1))}
        >
          ← Back
        </button>
      )}
    </div>
  );
}
