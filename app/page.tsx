import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import Reveal from "@/components/Reveal";
import DiagnosticLead from "@/components/DiagnosticLead";
import StickyDiag from "@/components/StickyDiag";

const SUBSTACK = "https://substack.com/@cherylbaptiste";

const PROCESS = [
  {
    n: "01",
    title: "We listen",
    text: "At every level: leadership, managers, the people doing the work. Not a survey. Real conversations, in confidence.",
  },
  {
    n: "02",
    title: "We read the pattern",
    text: "What's actually happening, where it started, and what it's costing you, separated from what the org chart says should be happening.",
  },
  {
    n: "03",
    title: "We say it plainly",
    text: "The truth, clearly and without apology. What's working, what's broken, and what's behind it, in language everyone understands.",
  },
  {
    n: "04",
    title: "You decide",
    text: "A clear picture and a practical path. Whether we implement it together or you take it from here, that call is always yours.",
  },
];

const STATS = [
  { big: "25+", small: "years in human resources" },
  { big: "15+", small: "years leading HR teams" },
  { big: "Nonprofit → Fortune 50", small: "range of organizations shaped" },
  { big: "2022", small: "founded · full-time since 2025" },
];

const FAQS = [
  {
    q: "How is this different from an engagement survey?",
    a: "A survey averages people into charts and tells you engagement is 'down 4%.' We sit with your people at every level and find out why, then say it plainly. Surveys measure the temperature; we find the source of the fever.",
  },
  {
    q: "Do you replace our HR team?",
    a: "No. We work alongside the team you have. When you don't have senior people leadership, fractional support fills that seat without adding headcount. If your HR team is part of what we find, we'll say that too: to them, respectfully, and to you, plainly.",
  },
  {
    q: "What does an engagement actually look like?",
    a: "It starts with an honest conversation about what you're seeing, with no pitch deck. From there, the work is scoped to what your organization actually needs: a diagnostic, leadership coaching, team and manager work, or fractional people leadership. No prepackaged methodology.",
  },
  {
    q: "How do you handle confidentiality?",
    a: "People tell us the truth because it's safe to. What individuals share is never attributed. We synthesize the pattern, protect the sources, and report what the organization needs to hear, not who said it.",
  },
  {
    q: "What size organizations do you work with?",
    a: "Cheryl has shaped people strategy everywhere from small nonprofits to Fortune 50 corporations. Strong leadership and sound people decisions transcend industry, and size too.",
  },
  {
    q: "What if you find something we don't want to hear?",
    a: "Then the engagement is working. We will tell you the truth, clearly and without apology. What happens next is yours to decide. Leaders don't hire us to be comfortable; they hire us to be right.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const SERVICES = [
  {
    img: "/img/svc-diagnosis.jpg",
    title: "Organizational diagnosis & advisory",
    text: "A deep look at where things are breaking down, or about to, and honest guidance on what needs to change. We listen at every level before we say a word.",
    mark: (
      <svg width="34" height="26" viewBox="0 0 56 34" aria-hidden="true">
        <line x1="0" y1="5" x2="56" y2="5" strokeWidth="3" stroke="currentColor" />
        <line x1="0" y1="16" x2="38" y2="16" strokeWidth="3" stroke="currentColor" />
        <line x1="0" y1="27" x2="20" y2="27" strokeWidth="3" stroke="currentColor" />
      </svg>
    ),
  },
  {
    img: "/img/svc-coaching.jpg",
    title: "Leadership coaching & advisory",
    text: "One-on-one partnership with leaders who are ready to lead differently and want a trusted voice at their side, one that will tell them the truth, even when it's uncomfortable.",
    mark: (
      <svg width="14" height="30" viewBox="0 0 20 84" aria-hidden="true">
        <line x1="10" y1="2" x2="10" y2="62" strokeWidth="4" stroke="currentColor" />
        <circle cx="10" cy="73" r="8" fill="currentColor" />
      </svg>
    ),
  },
  {
    img: "/img/svc-team.jpg",
    title: "Team & manager work",
    text: "The hard conversations, facilitation, and practical tools that help teams and managers get unstuck, including the conversations everyone has been avoiding.",
    mark: (
      <svg width="38" height="20" viewBox="0 0 80 36" aria-hidden="true">
        <line x1="4" y1="8" x2="76" y2="8" strokeWidth="4" stroke="currentColor" />
        <line x1="18" y1="8" x2="18" y2="34" strokeWidth="3" stroke="currentColor" />
        <line x1="62" y1="8" x2="62" y2="34" strokeWidth="3" stroke="currentColor" />
      </svg>
    ),
  },
  {
    img: "/img/svc-fractional.jpg",
    title: "Fractional people leadership",
    text: "Senior-level people-strategy support without adding a full-time executive, for organizations that need experience, not headcount.",
    mark: (
      <svg width="34" height="22" viewBox="0 0 80 44" aria-hidden="true">
        <line x1="6" y1="40" x2="74" y2="40" strokeWidth="4" stroke="currentColor" />
        <path d="M40 40 C 40 24, 46 14, 58 6" fill="none" strokeWidth="3" strokeLinecap="round" stroke="currentColor" />
        <circle cx="58" cy="6" r="4.5" fill="currentColor" />
      </svg>
    ),
  },
];

const ESSAYS = [
  {
    title: "HR Has Become a Bad Word. And We Did That to Ourselves.",
    date: "June 22, 2026",
    excerpt:
      "Some of the reputation is deserved, and honesty matters more than defensiveness. On the professionals who held the line, and what the work was actually supposed to be.",
  },
  {
    title: "We Don't Hate Our Jobs. We Hate What Our Jobs Have Become.",
    date: "June 15, 2026",
    excerpt:
      "The best people aren't burning out. They're grieving what the work was supposed to be. On the pattern nobody is naming out loud.",
  },
];

export default function Home() {
  return (
    <main>
      {/* ---------- hero ---------- */}
      <section className="hero hero-film">
        <div className="media" aria-hidden="true">
          <video autoPlay muted loop playsInline poster="/img/montage-poster.jpg" preload="metadata">
            <source src="/img/montage.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="wrap hero-stack">
          <p className="eyebrow">People Strategy · Leadership Advisory · California</p>
          <h1>
            We tell you the truth about <em>your organization.</em>
          </h1>
          <p className="lede">
            We partner with founders, CEOs, and senior leaders at the moments that matter. We
            listen at every level, make sense of the patterns, and say what we find. Plainly.
          </p>
          <div className="cta-row">
            <a className="btn on-dark" href="#contact">Start a conversation</a>
            <a className="btn ghost-dark" href="/diagnostic">Take the 2-minute diagnostic</a>
          </div>
        </div>
        <span className="scroll-cue" aria-hidden="true">Scroll</span>
      </section>

      {/* ---------- when leaders call ---------- */}
      <section className="tinted" id="moments">
        <div className="wrap">
          <Reveal>
            <div className="sec-head">
              <p className="eyebrow">When leaders call us</p>
              <h2>Sometimes something is breaking. Sometimes something is about to change.</h2>
            </div>
          </Reveal>
          <div className="two-col">
            <Reveal>
              <div className="moment">
                <p className="eyebrow">The reactive call</p>
                <h3>“Something is off, and I can&apos;t name it.”</h3>
                <p>
                  A struggling team. A leadership gap. A culture that&apos;s quietly breaking down.
                  Engagement is low, tension is high, and the usual fixes haven&apos;t worked. You
                  need someone who will find what&apos;s actually happening, not what a slide deck
                  says should be happening.
                </p>
              </div>
            </Reveal>
            <Reveal delay={110}>
              <div className="moment">
                <p className="eyebrow">The proactive call</p>
                <h3>“We&apos;re about to grow fast. I want to get this right.”</h3>
                <p>
                  New funding. Rapid growth. A strategic shift that will change how everyone works.
                  You&apos;re building fast and you want the people foundation strong enough for the
                  vision to actually scale, before the cracks appear, not after.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- services (photo cards) ---------- */}
      <section id="services">
        <div className="wrap">
          <Reveal>
            <div className="sec-head">
              <p className="eyebrow">What we do</p>
              <h2>Four kinds of work. One commitment: what your organization actually needs.</h2>
              <p>
                No prepackaged methodology. No one-size-fits-all framework. We come in with ears
                open, no agenda, and a commitment to what&apos;s true.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="svc-strip">
          {SERVICES.map((s, i) => (
            <div key={s.title} className="svc-panel">
              <div className="bg" aria-hidden="true">
                <Image src={s.img} alt="" fill sizes="(max-width: 760px) 100vw, 25vw" style={{ objectFit: "cover" }} />
              </div>
              <Reveal delay={i * 90}>
                <div className="content">
                  <div className="mark">{s.mark}</div>
                  <h3>{s.title}</h3>
                  <span className="rule" aria-hidden="true" />
                  <p>{s.text}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- promise band ---------- */}
      <section className="promise">
        <div className="wrap">
          <Reveal>
            <div>
              <blockquote>
                We will tell you the truth. Clearly and without apology. <em>What happens next is
                yours to decide.</em>
              </blockquote>
              <p className="attribution">The FGT commitment</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="promise-img">
              <Image src="/img/talk.jpg" alt="Two colleagues in honest conversation at a table" width={1600} height={1200} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- how it works ---------- */}
      <section id="process">
        <div className="wrap">
          <Reveal>
            <div className="sec-head">
              <p className="eyebrow">How it works</p>
              <h2>The first 30 days.</h2>
              <p>No black box, no jargon. This is what actually happens when you bring us in.</p>
            </div>
          </Reveal>
          <div className="process-grid">
            {PROCESS.map((p, i) => (
              <Reveal key={p.n} delay={i * 90}>
                <div className="process-step">
                  <span className="num">{p.n}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- proof ---------- */}
      <section className="tinted proof-band">
        <div className="wrap">
          <div className="proof-grid">
            {STATS.map((s, i) => (
              <Reveal key={s.small} delay={i * 80}>
                <div className="stat">
                  <span className="big">{s.big}</span>
                  <span className="small">{s.small}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- who it's for ---------- */}
      <section id="who">
        <div className="wrap">
          <Reveal>
            <div className="sec-head">
              <p className="eyebrow">Who this is for</p>
              <h2>You&apos;ll know if this is you.</h2>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <ul className="for-list">
              <li>Leaders who know something is off but cannot name it.</li>
              <li>
                Organizations where engagement is low, tension is high, and the usual fixes
                haven&apos;t worked.
              </li>
              <li>
                Leaders who want someone who will tell them the truth clearly, even when it&apos;s
                uncomfortable.
              </li>
              <li>
                Founders who have secured funding, are building fast, and want the people foundation
                right so the vision can actually scale.
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---------- live diagnostic ---------- */}
      <section className="diag-band">
        <div className="wrap">
          <Reveal>
            <DiagnosticLead />
          </Reveal>
        </div>
      </section>

      {/* ---------- from Cheryl's desk ---------- */}
      <section className="tinted" id="writing">
        <div className="wrap desk-grid">
          <Reveal>
            <div>
              <div className="sec-head" style={{ marginBottom: 26 }}>
                <p className="eyebrow">From Cheryl&apos;s desk</p>
                <h2>The thinking behind the work.</h2>
                <p>
                  Cheryl writes candidly about work, leadership, and what organizations get wrong
                  about both. The essays are the clearest window into how FGT sees.
                </p>
              </div>
              <p className="desk-pull">
                “Strong leadership and sound people decisions <em>transcend industry.</em>”
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              {ESSAYS.map((e) => (
                <a key={e.title} className="essay-mini" href={SUBSTACK} target="_blank" rel="noopener noreferrer">
                  <span className="date">{e.date}</span>
                  <h3>{e.title}</h3>
                  <p>{e.excerpt}</p>
                </a>
              ))}
              <p style={{ marginTop: 24 }}>
                <a className="text-link" href={SUBSTACK} target="_blank" rel="noopener noreferrer">
                  Read all essays on Substack
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- about ---------- */}
      <section id="about">
        <div className="wrap">
          <Reveal>
            <div className="bio bio-solo">
              <p className="eyebrow">Behind the firm</p>
              <h2>Led by Cheryl Baptiste</h2>
              <p>
                FGT Solutions was founded by Cheryl Baptiste, its principal. With more than 25
                years in human resources and over 15 in HR leadership, she has shaped people
                strategy across organizations from small nonprofits to Fortune 50 corporations,
                spanning talent, engagement, learning and development, and DEI, both nationally
                and internationally.
              </p>
              <p>
                A self-described grassroots, nontraditional HR leader, she built her expertise from
                the ground up across technology, sales, distribution, property management, and
                beauty. That breadth reflects the firm&apos;s belief that strong leadership and
                sound people decisions transcend industry. She founded FGT Solutions in 2022 and
                has run it full time since 2025.
              </p>
              <p>
                She also writes candidly about work, leadership, and the journey from employee to
                entrepreneur.{" "}
                <a
                  className="text-link"
                  href="https://cherylbaptiste.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Meet Cheryl, personally
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- faq ---------- */}
      <section id="faq">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <div className="wrap">
          <Reveal>
            <div className="sec-head">
              <p className="eyebrow">Fair questions</p>
              <h2>Asked before, answered plainly.</h2>
            </div>
          </Reveal>
          <div className="faq-list">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <details className="faq-item">
                  <summary>
                    {f.q}
                    <span className="faq-mark" aria-hidden="true" />
                  </summary>
                  <p>{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- contact ---------- */}
      <section className="tinted" id="contact">
        <div className="wrap contact-grid">
          <Reveal>
            <div>
              <p className="eyebrow">Start the conversation</p>
              <h2
                style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontWeight: 400,
                  fontSize: "clamp(28px, 4vw, 40px)",
                  marginTop: 12,
                }}
              >
                Tell us what you&apos;re seeing.
              </h2>
              <p style={{ color: "var(--ink-soft)", marginTop: 16, maxWidth: "44ch" }}>
                No pitch deck on the first call. Just an honest conversation about what&apos;s
                happening and whether we&apos;re the right people to help. If we&apos;re not,
                we&apos;ll say that too.
              </p>
              <p style={{ marginTop: 20 }}>
                <a className="text-link" href="mailto:info@fgtsco.com">
                  info@fgtsco.com
                </a>
              </p>
            </div>
          </Reveal>
          <Reveal delay={110}>
            <LeadForm />
          </Reveal>
        </div>
      </section>

      <StickyDiag />
    </main>
  );
}
