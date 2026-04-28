"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Chakra_Petch } from "next/font/google";

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Granville Stories", href: "/granville-stories" },
  { name: "Grant You a Story", href: "/grantyouastory" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className="sticky top-0 z-50 border-b border-cream-100 bg-cream-25/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 text-charcoal-900 transition hover:text-burgundy-700"
        >
          <Image
            src="/branding/logo-mark.png"
            alt="Grant Gould Media logo"
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
            priority
          />

          <span
            className={`${chakraPetch.className} text-[1.05rem] font-semibold tracking-[0.015em] sm:text-[1.12rem]`}
          >
            Grant Gould Media
          </span>
        </Link>

        <div className="relative">
          <button
            type="button"
            aria-label="Open navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-100 bg-cream-25"
          >
            <div className="relative h-5 w-5">
              <span
                className="absolute left-1/2 top-1/2 h-[2px] w-5 bg-charcoal-900 transition-all duration-200"
                style={{
                  transform: open
                    ? "translate(-50%, -50%) rotate(45deg)"
                    : "translate(-50%, calc(-50% - 6px)) rotate(0deg)",
                }}
              />
              <span
                className="absolute left-1/2 top-1/2 h-[2px] w-5 bg-charcoal-900 transition-all duration-200"
                style={{
                  transform: "translate(-50%, -50%)",
                  opacity: open ? 0 : 1,
                }}
              />
              <span
                className="absolute left-1/2 top-1/2 h-[2px] w-5 bg-charcoal-900 transition-all duration-200"
                style={{
                  transform: open
                    ? "translate(-50%, -50%) rotate(-45deg)"
                    : "translate(-50%, calc(-50% + 6px)) rotate(0deg)",
                }}
              />
            </div>
          </button>

          {open && (
            <div className="absolute right-0 top-14 w-[270px] overflow-hidden rounded-[24px] border border-cream-100 bg-cream-25 p-3 soft-shadow-lg">
              <div className="flex flex-col">
                {navItems.map((item) => {
                  const active = pathname === item.href;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block rounded-[18px] px-4 py-3 text-sm transition ${
                        active
                          ? "bg-charcoal-900 text-cream-25"
                          : "text-charcoal-700 hover:bg-cream-50 hover:text-burgundy-700"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}