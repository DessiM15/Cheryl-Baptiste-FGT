"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "/#services", label: "What we do" },
  { href: "/#who", label: "Who it's for" },
  { href: "/#writing", label: "From Cheryl's desk" },
  { href: "/#about", label: "About Cheryl" },
  { href: "/diagnostic", label: "The Diagnostic" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        className={`burger${open ? " open" : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span /><span /><span />
      </button>
      <div className={`menu-overlay${open ? " open" : ""}`} aria-hidden={!open}>
        {LINKS.map((l) => (
          <a key={l.href} className="item" href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <div className="small-row">
          <a className="btn on-dark" href="/#contact" onClick={() => setOpen(false)}>
            Start a conversation
          </a>
        </div>
      </div>
    </>
  );
}
