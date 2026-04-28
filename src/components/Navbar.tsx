"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Tektur } from "next/font/google";
import { menuItem, menuPanel } from "@/lib/motion";

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
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
    <nav
      className="sticky top-0 z-50 w-full border-b border-charcoal-900/10 text-charcoal-900"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        style={{ backgroundColor: "#ffffff" }}
      >
        <Link
          href="/"
          className="-ml-[16px] inline-flex items-center gap-3 text-charcoal-900 transition hover:text-burgundy-700"
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
            className={`${tektur.className} text-[1.02rem] font-semibold tracking-[0.045em]`}
          >
            Grant Gould Media
          </span>
        </Link>

        <div className="relative flex items-center">
          <button
            type="button"
            aria-label="Open navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="group -mr-[10px] flex h-10 w-10 items-center justify-center border-0 bg-transparent p-0 text-charcoal-900 shadow-none outline-none transition hover:text-burgundy-700 focus:outline-none"
          >
            <div className="relative h-5 w-5">
              <span
                className="absolute left-1/2 top-1/2 h-[2px] w-5 bg-current transition-all duration-200"
                style={{
                  transform: open
                    ? "translate(-50%, -50%) rotate(45deg)"
                    : "translate(-50%, calc(-50% - 6px)) rotate(0deg)",
                }}
              />

              <span
                className="absolute left-1/2 top-1/2 h-[2px] w-5 bg-current transition-all duration-200"
                style={{
                  transform: "translate(-50%, -50%)",
                  opacity: open ? 0 : 1,
                }}
              />

              <span
                className="absolute left-1/2 top-1/2 h-[2px] w-5 bg-current transition-all duration-200"
                style={{
                  transform: open
                    ? "translate(-50%, -50%) rotate(-45deg)"
                    : "translate(-50%, calc(-50% + 6px)) rotate(0deg)",
                }}
              />
            </div>
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                variants={menuPanel}
                initial="hidden"
                animate="show"
                exit="exit"
                className="absolute right-0 top-12 w-[270px] overflow-hidden rounded-none border border-charcoal-900/10 p-3 shadow-none"
                style={{ backgroundColor: "#ffffff" }}
              >
                <div className="flex flex-col">
                  {navItems.map((item) => {
                    const active = pathname === item.href;

                    return (
                      <motion.div key={item.name} variants={menuItem}>
                        <Link
                          href={item.href}
                          className={`block px-4 py-3 text-sm transition ${
                            active
                              ? "bg-charcoal-900 text-white"
                              : "text-charcoal-700 hover:bg-gray-50 hover:text-burgundy-700"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}