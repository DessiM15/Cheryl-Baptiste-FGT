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
    text: "At every level: leadership, managers, and the people doing the work. Not a survey. Real conversations, in confidence.",
  },
  {
    n: "02",
    title: "We read the pattern",
    text: "What’s happening, where it started, and what it’s costing you, separated from what the org chart says should be happening.",
  },
  {
    n: "03",
    title: "We say it plainly",
    text: "The truth, clearly and without apology. What’s working, what’s broken, and what’s behind it, in language everyone understands.",
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
    a: "A survey averages people into charts and tells you engagement is ‘down 4%.’ We sit with your people at every level and find out why, then say it plainly. Surveys measure the temperature; we find the source of the fever.",
  },
  {
    q: "Do you replace our HR team?",
    a: "No. We work alongside the team you have. When you don’t have senior people leadership, fractional support fills that seat without adding headcount. If your HR team is part of what we find, we’ll say that too: to them, respectfully, and to you, plainly.",
  },
  {
    q: "What does an engagement actually look like?",
    a: "It starts with an honest conversation about what you’re seeing, with no pitch deck. From there, the work is scoped to what your organization actually needs: a diagnostic, leadership coaching, team and manager work, or fractional people leadership. No prepackaged methodology.",
  },
  {
    q: "How do you handle confidentiality?",
    a: "People tell us the truth because it’s safe to. What individuals share is never attributed. We synthesize the pattern, protect the sources, and report what the organization needs to hear, not who said it.",
  },
  {
    q: "What size organizations do you work with?",
    a: "Cheryl has shaped people strategy everywhere from small nonprofits to Fortune 50 corporations. Strong leadership and sound people decisions transcend industry, and size too.",
  },
  {
    q: "What if you find something we don’t want to hear?",
    a: "Then the engagement is working. We will tell you the truth, clearly and without apology. What happens next is yours to decide. Leaders don’t hire us to be comfortable; they hire us to be right.",
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
    text: "A deep look at what’s happening, where it started, and what needs to change.",
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
    text: "One-on-one partnership with leaders who are ready to look honestly at how they lead and what the moment requires now.",
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
    text: "The hard conversations, facilitation, and realignment work that helps teams and managers get unstuck.",
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
    text: "Senior-level people strategy and HR partnership without adding a full-time executive.",
    mark: (
      <svg width="34" height="22" viewBox="0 0 80 44" aria-hidden="true">
        <line x1="6" y1="40" x2="74" y2="40" strokeWidth="4" stroke="currentColor" />
        <path d="M40 40 C 40 24, 46 14, 58 6" fill="none" strokeWidth="3" strokeLinecap="round" stroke="currentColor" />
        <circle cx="58" cy="6" r="4.5" fill="currentColor" />
      </svg>
    ),
  },
];

const CLIENTS = [
  { name: "Best Cheer Stone", meta: "Manufacturing · Global" },
  { name: "God Can Supply Co.", meta: "Apparel manufacturing · Memphis" },
  { name: "Bixby Castle Holdings", meta: "Real estate · Tennessee" },
  { name: "Jimenez Bros. 901", meta: "Construction · Memphis" },
  { name: "Relevent Content Media", meta: "Brand marketing · Los Angeles" },
  { name: "Action Factory", meta: "Digital production · Los Angeles" },
  { name: "Misty Copeland Foundation", meta: "Access to the arts · Nonprofit" },
  { name: "Consumer Care, Inc.", meta: "Residential care services" },
];

const ESSAYS = [
  {
    title: "HR Has Become a Bad Word. And We Did That to Ourselves.",
    date: "June 22, 2026",
    excerpt:
      "Some of the reputation is deserved, and honesty matters more than defensiveness. On the professionals who held the line, and what the work was actually supposed to be.",
  },
  {
    title: "We Don’t Hate Our Jobs. We Hate What Our Jobs Have Become.",
    date: "June 15, 2026",
    excerpt:
      "The best people aren’t burning out. They’re grieving what the work was supposed to be. On the pattern nobody is naming out loud.",
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
            When something is off, we tell you <em>what&rsquo;s actually happening.</em>
          </h1>
          <p className="lede">
            FGT Solutions helps founders, CEOs, and senior leaders understand what&rsquo;s really
            going on inside their organizations, before the cracks spread, or after they already
            have.
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
              <h2>Leaders usually call us for one of two reasons.</h2>
              <p>
                Either something is already off, or something big is about to change and they want
                to get ahead of it.
              </p>
            </div>
          </Reveal>
          <div className="two-col">
            <Reveal>
              <div className="moment">
                <p className="eyebrow">The reactive call</p>
                <h3>“Something is off, and I can&rsquo;t name it.”</h3>
                <p>
                  A struggling team. A leadership gap. Tension that keeps getting managed but never
                  resolved. Engagement is low, trust is thin, and the usual fixes haven&rsquo;t
                  worked. You need someone who will find what&rsquo;s actually happening, not what
                  the org chart says should be happening.
                </p>
              </div>
            </Reveal>
            <Reveal delay={110}>
              <div className="moment">
                <p className="eyebrow">The proactive call</p>
                <h3>“We&rsquo;re about to grow fast. I want to get this right.”</h3>
                <p>
                  New funding. Rapid growth. A strategic shift that will change how everyone works.
                  You want the people foundation strong enough to support the vision before the
                  cracks appear, not after.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- who it’s for ---------- */}
      <section id="who">
        <div className="wrap">
          <Reveal>
            <div className="sec-head">
              <p className="eyebrow">Who this is for</p>
              <h2>This is for you if&hellip;</h2>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <ul className="for-list">
              <li>You know something is off, but you can&rsquo;t name it.</li>
              <li>
                Engagement is low, tension is high, and the usual fixes haven&rsquo;t worked.
              </li>
              <li>
                You want someone who will tell you the truth clearly, even when it&rsquo;s
                uncomfortable.
              </li>
              <li>
                You&rsquo;re growing fast and want the people foundation right before the cracks
                show.
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---------- services (photo cards) ---------- */}
      <section id="services">
        <div className="wrap">
          <Reveal>
            <div className="sec-head">
              <p className="eyebrow">How we help</p>
              <h2>Four kinds of work, shaped to the organization in front of us.</h2>
              <p>
                No canned framework. No generic people strategy deck. Just the work your
                organization needs.
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
              <p className="eyebrow">What it&rsquo;s like to work with us</p>
              <h2>Here&rsquo;s what happens in the first 30 days.</h2>
              <p>No black box. No jargon.</p>
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

      {/* ---------- clients ---------- */}
      <section id="clients">
        <div className="wrap">
          <Reveal>
            <div className="sec-head">
              <p className="eyebrow">In good company</p>
              <h2>Trusted by organizations that wanted the truth.</h2>
              <p>
                A cross-industry selection of organizations that brought FGT in because something
                important needed to be seen clearly.
              </p>
            </div>
          </Reveal>
          <div className="client-grid">
            {CLIENTS.map((c, i) => (
              <Reveal key={c.name} delay={i * 60}>
                <div className="client-cell">
                  <span className="c-name">{c.name}</span>
                  <span className="c-meta">{c.meta}</span>
                </div>
              </Reveal>
            ))}
          </div>
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

      {/* ---------- from Cheryl’s desk ---------- */}
      <section className="tinted" id="writing">
        <div className="wrap desk-grid">
          <Reveal>
            <div>
              <div className="sec-head" style={{ marginBottom: 26 }}>
                <p className="eyebrow">From Cheryl&rsquo;s desk</p>
                <h2>The thinking behind the work.</h2>
                <p>
                  Cheryl writes candidly about work, leadership, and what organizations get wrong
                  about both. If you want the clearest sense of how FGT thinks, start here.
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
                A grassroots, nontraditional HR and people strategy leader with more than 25 years
                of experience across nonprofits, public and private companies, and global
                organizations.
              </p>
              <p>
                She has spent her career helping organizations make better people decisions under
                pressure, from leadership transitions and team breakdowns to growth, change, and
                the systems that have to hold up underneath it all. She founded FGT Solutions in
                2022 and has run it full time since 2025.
              </p>
              <p>
                She also writes candidly about work, leadership, and the journey from employee to
                entrepreneur.{" "}
                <a
                  className="text-link"
                  href="https://www.cherylbaptiste.me"
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
                Tell us what you&rsquo;re seeing.
              </h2>
              <p style={{ color: "var(--ink-soft)", marginTop: 16, maxWidth: "44ch" }}>
                No pitch deck on the first call. Just an honest conversation about what&rsquo;s
                happening and whether FGT is the right team to help. If we&rsquo;re not, we&rsquo;ll
                say that plainly too.
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
