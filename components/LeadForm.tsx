"use client";

import { useState } from "react";

const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "YOUR_WEB3FORMS_ACCESS_KEY";

const TRIGGERS = [
  "We lost (or are losing) great people",
  "Conflict at the leadership level",
  "New funding · growing fast",
  "Engagement is sliding",
  "Something feels off I can't name",
  "Nothing's wrong, getting ahead of it",
];
const DURATIONS = ["Weeks", "Months", "Over a year"];
const SIZES = ["Under 25 people", "25-100", "100-500", "500+"];
const SEATS = ["Founder · CEO", "People · HR leader", "Other executive", "Board"];
const TRIED = ["Engagement survey", "Coaching", "Reorg", "New hires", "Nothing yet"];
const READINESS = [
  "I'm the decision-maker and ready to move",
  "I'm building the case internally",
  "Just exploring for now",
];

function PillGroup({
  label,
  options,
  value,
  onChange,
  multi = false,
}: {
  label: string;
  options: string[];
  value: string[];
  onChange: (v: string[]) => void;
  multi?: boolean;
}) {
  const toggle = (o: string) => {
    if (multi) onChange(value.includes(o) ? value.filter((v) => v !== o) : [...value, o]);
    else onChange(value[0] === o ? [] : [o]);
  };
  return (
    <div className="pill-group">
      <p className="pill-label">{label}</p>
      <div className="pill-row" role="group" aria-label={label}>
        {options.map((o) => (
          <button
            key={o}
            type="button"
            className={value.includes(o) ? "on" : ""}
            aria-pressed={value.includes(o)}
            onClick={() => toggle(o)}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function LeadForm({ context }: { context?: string }) {
  const [step, setStep] = useState<1 | 2>(1);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [basics, setBasics] = useState({ name: "", email: "", organization: "" });
  const [trigger, setTrigger] = useState<string[]>([]);
  const [duration, setDuration] = useState<string[]>([]);
  const [size, setSize] = useState<string[]>([]);
  const [seat, setSeat] = useState<string[]>([]);
  const [tried, setTried] = useState<string[]>([]);
  const [readiness, setReadiness] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "New qualified inquiry · fgtsco.com",
          from_name: "FGT Solutions website",
          ...basics,
          reached_out_because: trigger.join("; ") || "not answered",
          going_on_for: duration.join("; ") || "not answered",
          company_size: size.join("; ") || "not answered",
          their_seat: seat.join("; ") || "not answered",
          already_tried: tried.join("; ") || "not answered",
          readiness: readiness.join("; ") || "not answered",
          the_unsaid_thing: message,
          ...(context ? { diagnostic_context: context } : {}),
        }),
      });
      const json = await res.json();
      setStatus(json.success ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="lead-form">
        <p className="sent-title">Received.</p>
        <p className="form-status" role="status">
          Cheryl reads every one of these herself. If it looks like a fit, you&apos;ll hear back
          quickly. If we&apos;re not the right people, we&apos;ll tell you that too.
        </p>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <p className="step-count" aria-hidden="true">Step {step} of 2</p>

      {step === 1 && (
        <div className="form-step">
          <div className="field">
            <label htmlFor="lf-name">Your name</label>
            <input
              id="lf-name"
              type="text"
              autoComplete="name"
              required
              value={basics.name}
              onChange={(e) => setBasics({ ...basics, name: e.target.value })}
            />
          </div>
          <div className="field">
            <label htmlFor="lf-email">Email</label>
            <input
              id="lf-email"
              type="email"
              autoComplete="email"
              required
              value={basics.email}
              onChange={(e) => setBasics({ ...basics, email: e.target.value })}
            />
          </div>
          <div className="field">
            <label htmlFor="lf-org">Organization &amp; role</label>
            <input
              id="lf-org"
              type="text"
              placeholder="e.g. COO, 120-person logistics company"
              value={basics.organization}
              onChange={(e) => setBasics({ ...basics, organization: e.target.value })}
            />
          </div>
          <div>
            <button
              className="btn"
              type="button"
              disabled={!basics.name || !/.+@.+\..+/.test(basics.email)}
              onClick={() => setStep(2)}
            >
              Continue →
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="form-step">
          <PillGroup label="What made you reach out now?" options={TRIGGERS} value={trigger} onChange={setTrigger} />
          <PillGroup label="How long has this been going on?" options={DURATIONS} value={duration} onChange={setDuration} />
          <PillGroup label="How big is the organization?" options={SIZES} value={size} onChange={setSize} />
          <PillGroup label="Your seat" options={SEATS} value={seat} onChange={setSeat} />
          <PillGroup label="What have you already tried?" options={TRIED} value={tried} onChange={setTried} multi />
          <PillGroup
            label="If we find the real problem, are you in a position to act on it?"
            options={READINESS}
            value={readiness}
            onChange={setReadiness}
          />
          <div className="field">
            <label htmlFor="lf-msg">What&apos;s the thing you haven&apos;t said out loud yet?</label>
            <textarea
              id="lf-msg"
              rows={4}
              required
              placeholder="Say it plainly. That's how we work here."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="step-actions">
            <button className="quiz-back" type="button" onClick={() => setStep(1)}>
              ← Back
            </button>
            <button className="btn" type="submit" disabled={status === "sending" || trigger.length === 0 || !message}>
              {status === "sending" ? "Sending…" : "Start the conversation"}
            </button>
          </div>
        </div>
      )}

      <p className="form-status" role="status">
        {status === "error" && "That didn't go through. Please email info@fgtsco.com directly."}
      </p>
    </form>
  );
}
