"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { pageStagger, riseIn, cardLift } from "@/lib/motion";

export default function ServicesPage() {
  return (
    <motion.section
      variants={pageStagger}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <motion.p variants={riseIn} className="page-kicker">
        Services
      </motion.p>

      <motion.h1 variants={riseIn} className="page-heading">
        Storytelling and content built with purpose
      </motion.h1>

      <motion.p variants={riseIn} className="page-copy">
        Visual work designed to help communities, businesses, and organizations
        communicate clearly and stand out with intention.
      </motion.p>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        <motion.div
          variants={riseIn}
          whileHover={cardLift}
          className="surface-card soft-shadow relative overflow-hidden p-8"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-burgundy-700" />

          <h2 className="font-display text-[1.8rem] font-medium tracking-[-0.02em] text-cream-25">
            Business Services
          </h2>

          <ul className="mt-5 space-y-3 leading-7 text-cream-25/78">
            {[
              "Promotional video content",
              "Social media visuals",
              "Drone and aerial content",
              "Brand storytelling",
            ].map((service, index) => (
              <motion.li
                key={service}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.08 + index * 0.05 }}
                className="flex items-start gap-3"
              >
                <span className="mt-2 h-2 w-2 rounded-full bg-cream-25" />
                <span>{service}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={riseIn}
          whileHover={cardLift}
          className="surface-card soft-shadow relative overflow-hidden p-8"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-burgundy-700" />

          <h2 className="font-display text-[1.8rem] font-medium tracking-[-0.02em] text-cream-25">
            Community Services
          </h2>

          <ul className="mt-5 space-y-3 leading-7 text-cream-25/78">
            {[
              "Interviews and oral histories",
              "Community storytelling",
              "Documentary-style content",
              "Historical and place-based visual work",
            ].map((service, index) => (
              <motion.li
                key={service}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.08 + index * 0.05 }}
                className="flex items-start gap-3"
              >
                <span className="mt-2 h-2 w-2 rounded-full bg-cream-25" />
                <span>{service}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div
        variants={riseIn}
        whileHover={{ scale: 1.01 }}
        className="surface-light soft-shadow-lg mt-14 px-8 py-14 sm:px-12"
      >
        <p className="text-xs uppercase tracking-[0.28em] text-burgundy-700">
          Get a Quote
        </p>
        <h2 className="font-display mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
          Need content for your business or organization?
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-charcoal-700">
          Every project is different. Pricing is based on goals, deliverables,
          scope, and timeline. Reach out to discuss your project and get a quote.
        </p>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block rounded-full bg-charcoal-900 px-6 py-3 text-sm font-medium text-cream-25 transition duration-200 hover:-translate-y-0.5 hover:bg-burgundy-700"
          >
            Get a Quote
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
}