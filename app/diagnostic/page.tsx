import type { Metadata } from "next";
import Quiz from "@/components/Quiz";

export const metadata: Metadata = {
  title: "The Diagnostic — What's really happening in your organization?",
  description:
    "Five questions, two minutes. A small taste of how FGT Solutions reads organizations — and where we'd look first in yours.",
};

export default function DiagnosticPage() {
  return (
    <main>
      <section>
        <div className="wrap">
          <div className="sec-head" style={{ maxWidth: 720, margin: "0 auto 44px", textAlign: "center" }}>
            <p className="eyebrow">The Diagnostic</p>
            <h2>What&apos;s really happening in your organization?</h2>
            <p>
              Five questions. Answer honestly — there are no wrong answers, only true ones.
              You&apos;ll get a plain-language read at the end. No email required to see it.
            </p>
          </div>
          <Quiz />
        </div>
      </section>
    </main>
  );
}
