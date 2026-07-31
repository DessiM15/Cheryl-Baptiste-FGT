"use client";

import { useRouter } from "next/navigation";

const OPTIONS = [
  { text: "People tell me directly, early, and to my face.", score: 0 },
  { text: "It reaches me eventually, usually softened along the way.", score: 1 },
  { text: "I find out late, sideways, or from the numbers.", score: 2 },
];

export default function DiagnosticLead() {
  const router = useRouter();
  return (
    <div>
      <p className="eyebrow">The Diagnostic · Question 1 of 5</p>
      <h2>Not sure what&rsquo;s really going on? Start here.</h2>
      <p className="intro">
        Five questions. Two minutes. No email required. A quick read on how issues tend to surface
        in your organization, and what that may be telling you.
      </p>
      <p className="q">
        When something goes wrong in your organization, how do you usually find out?
      </p>
      <div className="quiz-opts">
        {OPTIONS.map((o) => (
          <button
            key={o.score}
            type="button"
            onClick={() => router.push(`/diagnostic?a=${o.score}`)}
          >
            {o.text}
          </button>
        ))}
      </div>
      <p className="note">Answer to continue.</p>
    </div>
  );
}
