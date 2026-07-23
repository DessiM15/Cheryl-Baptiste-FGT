export function PlumbMark({ height = 46 }: { height?: number }) {
  return (
    <svg
      width={height * 0.24}
      height={height}
      viewBox="0 0 20 84"
      aria-hidden="true"
      focusable="false"
    >
      <line x1="10" y1="2" x2="10" y2="62" stroke="var(--accent)" strokeWidth="3" />
      <circle cx="10" cy="73" r="7" fill="var(--deep)" />
    </svg>
  );
}

export function LogoLockup() {
  return (
    <a className="logo-lockup" href="/" aria-label="FGT Solutions home">
      <PlumbMark height={40} />
      <span>
        <span className="word">FGT</span>
        <span className="sub">SOLUTIONS</span>
      </span>
    </a>
  );
}
