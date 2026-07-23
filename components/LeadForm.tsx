"use client";

import { useState } from "react";

const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "YOUR_WEB3FORMS_ACCESS_KEY";

export default function LeadForm({ context }: { context?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "New inquiry — fgtsco.com",
          from_name: "FGT Solutions website",
          ...data,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      {context ? <input type="hidden" name="diagnostic_context" value={context} /> : null}
      <div className="field">
        <label htmlFor="lf-name">Your name</label>
        <input id="lf-name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="lf-email">Email</label>
        <input id="lf-email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="lf-org">Organization &amp; role</label>
        <input id="lf-org" name="organization" type="text" placeholder="e.g. COO, 120-person logistics company" />
      </div>
      <div className="field">
        <label htmlFor="lf-msg">What are you seeing?</label>
        <textarea
          id="lf-msg"
          name="message"
          rows={5}
          required
          placeholder="Say it plainly — that's how we work here."
        />
      </div>
      <div>
        <button className="btn" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Start the conversation"}
        </button>
      </div>
      <p className="form-status" role="status">
        {status === "sent" && "Received. Cheryl reads every one of these — you'll hear back soon."}
        {status === "error" && "That didn't go through. Please email info@fgtsco.com directly."}
      </p>
    </form>
  );
}
