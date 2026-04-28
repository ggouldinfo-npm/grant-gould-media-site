import Image from "next/image";
import Link from "next/link";
import { Tektur } from "next/font/google";

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Granville Stories", href: "/granville-stories" },
  { name: "Grant You a Story", href: "/grantyouastory" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer
      className="w-full border-t border-charcoal-900/10 text-charcoal-900"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div
        className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-12"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Link
              href="/"
              className="-ml-[10px] inline-flex items-center gap-2.5 text-charcoal-900 transition hover:text-burgundy-700 sm:-ml-[16px] sm:gap-3"
            >
              <Image
                src="/branding/logo-mark.png"
                alt="Grant Gould Media logo"
                width={44}
                height={44}
                className="h-10 w-10 object-contain sm:h-11 sm:w-11"
              />

              <span
                className={`${tektur.className} text-[0.92rem] font-semibold tracking-[0.035em] sm:text-[1.02rem] sm:tracking-[0.045em]`}
              >
                Grant Gould Media
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-charcoal-700">
              Story-driven media for communities, businesses, and real stories.
            </p>

            <p className="mt-4 max-w-sm text-sm leading-6 text-charcoal-700">
              Based near Granville, New York, with work focused around nearby
              New York and Vermont communities.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-burgundy-700">
              Navigate
            </p>

            <div className="mt-5 flex flex-col gap-3 text-sm">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-charcoal-900 transition hover:text-burgundy-700"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-burgundy-700">
              Contact
            </p>

            <div className="mt-5 space-y-3 text-sm text-charcoal-700">
              <p>
                For business inquiries, collaborations, community projects, and
                story-driven media work.
              </p>

              <a
                href="mailto:contact@grantgouldmedia.com"
                className="block break-words text-charcoal-900 transition hover:text-burgundy-700"
              >
                contact@grantgouldmedia.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-charcoal-900/10 pt-6">
          <p className="text-sm text-charcoal-900">
            © {new Date().getFullYear()} Grant Gould Media
          </p>
        </div>
      </div>
    </footer>
  );
}