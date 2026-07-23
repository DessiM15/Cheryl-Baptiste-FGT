"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LogoLockup } from "./Logo";
import MobileMenu from "./MobileMenu";

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || pathname !== "/";

  return (
    <header className={`site-header${solid ? " scrolled" : ""}`}>
      <div className="wrap">
        <LogoLockup />
        <nav className="main-nav" aria-label="Main">
          <a href="/#services">What we do</a>
          <a href="/#who">Who it&apos;s for</a>
          <a href="/#about">About Cheryl</a>
          <a href="/diagnostic">The Diagnostic</a>
          <a className="btn quiet" href="/#contact" style={{ padding: "10px 18px" }}>
            Start a conversation
          </a>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}
