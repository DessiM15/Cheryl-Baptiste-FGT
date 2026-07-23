import Image from "next/image";
import { PlumbMark } from "@/components/Logo";
import LeadForm from "@/components/LeadForm";

export default function Home() {
  return (
    <main>
      {/* ---------- hero ---------- */}
      <section className="hero">
        <div className="wrap">
          <div className="plumb">
            <PlumbMark height={150} />
          </div>
          <div>
            <p className="eyebrow">People Strategy · Leadership Advisory · California</p>
            <h1 style={{ marginTop: 14 }}>
              We tell you the truth about <em>your organization.</em>
            </h1>
            <p className="lede">
              FGT Solutions partners with founders, CEOs, and senior leaders at the moments that
              matter — when growth, pressure, and people issues have outgrown the old way of doing
              things. We listen at every level, make sense of the patterns, and say what we find.
              Plainly.
            </p>
            <div className="cta-row">
              <a className="btn" href="#contact">Start a conversation</a>
              <a className="btn quiet" href="/diagnostic">Take the 2-minute diagnostic</a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- when leaders call ---------- */}
      <section className="tinted" id="moments">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">When leaders call us</p>
            <h2>Sometimes something is breaking. Sometimes something is about to change.</h2>
          </div>
          <div className="two-col">
            <div className="moment">
              <p className="eyebrow">The reactive call</p>
              <h3>“Something is off, and I can&apos;t name it.”</h3>
              <p>
                A struggling team. A leadership gap. A culture that&apos;s quietly breaking down.
                Engagement is low, tension is high, and the usual fixes haven&apos;t worked. You
                need someone who will find what&apos;s actually happening — not what a slide deck
                says should be happening.
              </p>
            </div>
            <div className="moment">
              <p className="eyebrow">The proactive call</p>
              <h3>“We&apos;re about to grow fast. I want to get this right.”</h3>
              <p>
                New funding. Rapid growth. A strategic shift that will change how everyone works.
                You&apos;re building fast and you want the people foundation strong enough for the
                vision to actually scale — before the cracks appear, not after.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- services ---------- */}
      <section id="services">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">What we do</p>
            <h2>Four kinds of work. One commitment: what your organization actually needs.</h2>
            <p>
              No prepackaged methodology. No one-size-fits-all framework. We come in with ears
              open, no agenda, and a commitment to what&apos;s true.
            </p>
          </div>
          <div className="svc-grid">
            <div className="svc">
              <div className="mark" aria-hidden="true">
                <svg width="34" height="26" viewBox="0 0 56 34">
                  <line x1="0" y1="5" x2="56" y2="5" stroke="var(--deep)" strokeWidth="3" />
                  <line x1="0" y1="16" x2="38" y2="16" stroke="var(--accent)" strokeWidth="3" />
                  <line x1="0" y1="27" x2="20" y2="27" stroke="var(--deep)" strokeWidth="3" />
                </svg>
              </div>
              <h3>Organizational diagnosis &amp; advisory</h3>
              <p>
                A deep look at where things are breaking down — or about to — and honest guidance
                on what needs to change. We listen at every level before we say a word.
              </p>
            </div>
            <div className="svc">
              <div className="mark" aria-hidden="true">
                <svg width="16" height="30" viewBox="0 0 20 84">
                  <line x1="10" y1="2" x2="10" y2="62" stroke="var(--accent)" strokeWidth="4" />
                  <circle cx="10" cy="73" r="8" fill="var(--deep)" />
                </svg>
              </div>
              <h3>Leadership coaching &amp; advisory</h3>
              <p>
                One-on-one partnership with leaders who are ready to lead differently and want a
                trusted voice at their side — one that will tell them the truth, even when it&apos;s
                uncomfortable.
              </p>
            </div>
            <div className="svc">
              <div className="mark" aria-hidden="true">
                <svg width="40" height="20" viewBox="0 0 80 36">
                  <line x1="4" y1="8" x2="76" y2="8" stroke="var(--deep)" strokeWidth="4" />
                  <line x1="18" y1="8" x2="18" y2="34" stroke="var(--accent)" strokeWidth="3" />
                  <line x1="62" y1="8" x2="62" y2="34" stroke="var(--accent)" strokeWidth="3" />
                </svg>
              </div>
              <h3>Team &amp; manager work</h3>
              <p>
                The hard conversations, facilitation, and practical tools that help teams and
                managers get unstuck — including the conversations everyone has been avoiding.
              </p>
            </div>
            <div className="svc">
              <div className="mark" aria-hidden="true">
                <svg width="36" height="22" viewBox="0 0 80 44">
                  <line x1="6" y1="40" x2="74" y2="40" stroke="var(--deep)" strokeWidth="4" />
                  <path
                    d="M40 40 C 40 24, 46 14, 58 6"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <circle cx="58" cy="6" r="4.5" fill="var(--deep)" />
                </svg>
              </div>
              <h3>Fractional people leadership</h3>
              <p>
                Senior-level people-strategy support without adding a full-time executive — for
                organizations that need experience, not headcount.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- promise band ---------- */}
      <section className="promise">
        <div className="wrap">
          <blockquote>
            We will tell you the truth. Clearly and without apology. <em>What happens next is
            yours to decide.</em>
          </blockquote>
          <p className="attribution">The FGT commitment</p>
        </div>
      </section>

      {/* ---------- who it's for ---------- */}
      <section id="who">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Who this is for</p>
            <h2>You&apos;ll know if this is you.</h2>
          </div>
          <ul className="for-list">
            <li>Leaders who know something is off but cannot name it.</li>
            <li>
              Organizations where engagement is low, tension is high, and the usual fixes
              haven&apos;t worked.
            </li>
            <li>
              Leaders who want someone who will tell them the truth clearly — even when it&apos;s
              uncomfortable.
            </li>
            <li>
              Founders who have secured funding, are building fast, and want the people foundation
              right so the vision can actually scale.
            </li>
          </ul>
        </div>
      </section>

      {/* ---------- diagnostic teaser ---------- */}
      <section className="tinted">
        <div className="wrap diag-teaser">
          <div>
            <p className="eyebrow">Not sure yet?</p>
            <h2>What&apos;s really happening in your organization?</h2>
            <p>
              Five questions, two minutes, no email required to see your read. It&apos;s a small
              taste of how we look at organizations — and where we&apos;d look first in yours.
            </p>
          </div>
          <a className="btn" href="/diagnostic">Take the diagnostic</a>
        </div>
      </section>

      {/* ---------- about ---------- */}
      <section id="about">
        <div className="wrap about-grid">
          <div className="portrait">
            <Image
              src="/cheryl.png"
              alt="Cheryl Baptiste, founder and principal of FGT Solutions"
              width={680}
              height={1020}
              priority={false}
            />
          </div>
          <div className="bio">
            <p className="eyebrow">The person behind the firm</p>
            <h2>Cheryl Baptiste</h2>
            <p>
              Cheryl is the founder and principal of FGT Solutions. With more than 25 years in
              human resources and over 15 in HR leadership, she has shaped people strategy across
              organizations from small nonprofits to Fortune 50 corporations — spanning talent,
              engagement, learning and development, and DEI, both nationally and internationally.
            </p>
            <p>
              A self-described grassroots, nontraditional HR leader, she built her expertise from
              the ground up across technology, sales, distribution, property management, and
              beauty — a breadth that reflects her belief that strong leadership and sound people
              decisions transcend industry. She founded FGT Solutions in 2022 and has run it full
              time since 2025.
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
        </div>
      </section>

      {/* ---------- contact ---------- */}
      <section className="tinted" id="contact">
        <div className="wrap contact-grid">
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
              No pitch deck on the first call — just an honest conversation about what&apos;s
              happening and whether we&apos;re the right people to help. If we&apos;re not,
              we&apos;ll say that too.
            </p>
            <p style={{ marginTop: 20 }}>
              <a className="text-link" href="mailto:info@fgtsco.com">
                info@fgtsco.com
              </a>
            </p>
          </div>
          <LeadForm />
        </div>
      </section>
    </main>
  );
}
