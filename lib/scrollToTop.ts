/**
 * Jump to the hero instantly.
 *
 * Two things fight this:
 *
 * 1. `html { scroll-behavior: smooth }` is set globally, so a plain scrollTo
 *    animates the whole way up (~1.5s from the footer). An explicit behaviour
 *    passed to scrollTo overrides the CSS property.
 * 2. A smooth scroll already in flight (someone clicked a nav anchor a moment
 *    before hitting the logo) is NOT aborted by that jump. It resumes on the
 *    next frames and drifts the page back down. So the top is held briefly and
 *    re-asserted until the stale animation has burnt itself out.
 */
const HOLD_FRAMES = 40; // ~650ms, longer than a native smooth scroll

export function scrollToTop() {
  const html = document.documentElement;
  const previous = html.style.scrollBehavior;

  html.style.scrollBehavior = "auto";
  void html.offsetHeight; // flush the style change before scrolling

  const jump = () => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    } catch {
      window.scrollTo(0, 0);
    }
  };
  jump();

  let frames = 0;
  const release = () => {
    html.style.scrollBehavior = previous;
    window.removeEventListener("wheel", release);
    window.removeEventListener("touchstart", release);
    window.removeEventListener("keydown", release);
  };
  // Let a deliberate scroll by the visitor win immediately
  window.addEventListener("wheel", release, { passive: true, once: true });
  window.addEventListener("touchstart", release, { passive: true, once: true });
  window.addEventListener("keydown", release, { once: true });

  const hold = () => {
    if (html.style.scrollBehavior !== "auto") return; // already released
    if (window.scrollY !== 0) jump();
    if (++frames < HOLD_FRAMES) requestAnimationFrame(hold);
    else release();
  };
  requestAnimationFrame(hold);

  // Drop a lingering "#services" style hash so the URL matches where we are
  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }
}
