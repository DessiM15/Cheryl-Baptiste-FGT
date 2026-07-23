import type { Metadata, Viewport } from "next";
import { Playfair_Display, Mulish } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import PalettePill from "@/components/PalettePill";

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});
const sans = Mulish({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fgtsco.com"),
  title: {
    default: "FGT Solutions — People Strategy & Leadership Advisory",
    template: "%s · FGT Solutions",
  },
  description:
    "FGT Solutions is a people-strategy and leadership advisory firm led by Cheryl Baptiste. Organizational diagnostics, leadership coaching, team interventions, and fractional people leadership — for leaders who want the truth, clearly and without apology.",
  openGraph: {
    title: "FGT Solutions — People Strategy & Leadership Advisory",
    description:
      "We tell you the truth about your organization. Clearly and without apology.",
    url: "https://fgtsco.com",
    siteName: "FGT Solutions",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "FGT Solutions — We tell you the truth about your organization." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FGT Solutions — People Strategy & Leadership Advisory",
    description: "We tell you the truth about your organization. Clearly and without apology.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#3B2C21",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "FGT Solutions",
  url: "https://fgtsco.com",
  email: "info@fgtsco.com",
  areaServed: "US",
  founder: {
    "@type": "Person",
    name: "Cheryl Baptiste",
    jobTitle: "Founder & Principal",
    sameAs: [
      "https://www.linkedin.com/in/cheryl-l-baptiste-56567723",
      "https://substack.com/@cherylbaptiste",
    ],
  },
  description:
    "People-strategy and leadership advisory firm: organizational diagnostics, leadership coaching, team interventions, and fractional people leadership.",
  address: { "@type": "PostalAddress", addressRegion: "CA", addressCountry: "US" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              `try{var p=localStorage.getItem("palette");if(p)document.documentElement.dataset.palette=p;}catch(e){}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${serif.variable} ${sans.variable}`}>
        <SiteHeader />

        {children}

        <footer className="site-footer">
          <div className="wrap">
            <div className="cols">
              <div>
                <div className="word">FGT</div>
                <div className="sub">SOLUTIONS</div>
              </div>
              <nav aria-label="Footer">
                <a href="/#services">What we do</a>
                <a href="/#who">Who it&apos;s for</a>
                <a href="/diagnostic">The Diagnostic</a>
                <a href="/#contact">Contact</a>
              </nav>
              <nav aria-label="Elsewhere">
                <a href="mailto:info@fgtsco.com">info@fgtsco.com</a>
                <a
                  href="https://www.linkedin.com/in/cheryl-l-baptiste-56567723"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a href="https://cherylbaptiste.com" target="_blank" rel="noopener noreferrer">
                  Cheryl, personally →
                </a>
              </nav>
            </div>
            <div className="fineprint">
              <span>© {new Date().getFullYear()} FGT Solutions · California</span>
              <span>We will tell you the truth. What happens next is yours to decide.</span>
            </div>
          </div>
        </footer>

        <PalettePill />
      </body>
    </html>
  );
}
