"use client";

import { useEffect, useState } from "react";

export default function StickyDiag() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.9;
      const nearContact = document.getElementById("contact")?.getBoundingClientRect();
      const contactVisible = nearContact ? nearContact.top < window.innerHeight : false;
      const diagBand = document.querySelector(".diag-band")?.getBoundingClientRect();
      const diagVisible = diagBand ? diagBand.top < window.innerHeight && diagBand.bottom > 0 : false;
      setShow(past && !contactVisible && !diagVisible);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a className={`sticky-diag${show ? " show" : ""}`} href="/diagnostic" aria-hidden={!show} tabIndex={show ? 0 : -1}>
      <span className="pulse" aria-hidden="true" />
      The 2-minute diagnostic →
    </a>
  );
}
