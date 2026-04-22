"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="mt-24 border-t border-cream-100 bg-cream-25 text-charcoal-900"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm md:flex-row md:items-center md:justify-between">
        <p className="text-charcoal-700">© {new Date().getFullYear()} Grant Gould Media</p>

        <div className="flex flex-wrap gap-4">
          <Link href="/" className="transition hover:text-burgundy-700">
            Home
          </Link>
          <Link href="/about" className="transition hover:text-burgundy-700">
            About
          </Link>
          <Link href="/services" className="transition hover:text-burgundy-700">
            Services
          </Link>
          <Link href="/granville-stories" className="transition hover:text-burgundy-700">
            Granville Stories
          </Link>
          <Link href="/grantyouastory" className="transition hover:text-burgundy-700">
            Grant You a Story
          </Link>
          <Link href="/contact" className="transition hover:text-burgundy-700">
            Contact
          </Link>
        </div>
      </div>
    </motion.footer>
  );
}