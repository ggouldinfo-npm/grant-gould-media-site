"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { pageStagger, riseIn, cardLift } from "@/lib/motion";

export default function GranvilleStoriesPage() {
  return (
    <motion.section
      variants={pageStagger}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <motion.p variants={riseIn} className="page-kicker">
        Granville Stories
      </motion.p>

      <div className="mt-4 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <motion.div variants={riseIn}>
          <h1 className="page-heading max-w-4xl">
            Preserving the voices, stories, and history of Granville, New York
          </h1>

          <div className="mt-8 space-y-6 text-lg leading-8 text-cream-25/78">
            <p>
              Granville Stories is a community-driven initiative focused on
              documenting and preserving the voices, stories, and history of
              Granville through interviews and visual storytelling.
            </p>

            <p>
              The project was shaped by conversations with my grandmother and by
              a growing realization that many meaningful local stories are never
              formally captured and can be lost over time.
            </p>

            <p>
              The goal is to build a lasting visual archive that reflects the
              people, identity, and character of the community—something that
              can be shared now and preserved for future generations.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-cream-25 px-6 py-3 text-sm font-medium text-charcoal-900 transition duration-200 hover:-translate-y-0.5 hover:bg-burgundy-700 hover:text-cream-25"
            >
              Share a Story
            </Link>

            <a
              href="https://gofund.me/8662c07fa"
              className="rounded-full border border-cream-25/30 px-6 py-3 text-sm font-medium text-cream-25 transition duration-200 hover:-translate-y-0.5 hover:border-burgundy-700 hover:text-burgundy-700"
            >
              Support the Project
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={riseIn}
          whileHover={cardLift}
          className="surface-card soft-shadow relative h-[420px] overflow-hidden bg-charcoal-800"
        >
          <Image
            src="/images/granville-stories.jpg"
            alt="Granville Stories"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      <motion.div variants={riseIn} className="mt-20">
        <p className="page-kicker">Archive</p>
        <h2 className="font-display mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.02em] text-cream-25">
          Featured stories
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-cream-25/78">
          Interviews and story features will be embedded here as the archive
          grows over time.
        </p>

        <div className="mt-10">
          <div className="surface-card soft-shadow min-h-[420px] border border-dashed border-charcoal-800 p-8">
            <div className="flex h-full min-h-[356px] items-center justify-center">
              <p className="text-sm uppercase tracking-[0.22em] text-cream-25/50">
                Video archive coming soon
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={riseIn}
        whileHover={{ scale: 1.01 }}
        className="surface-light soft-shadow-lg mt-20 px-8 py-14 sm:px-12"
      >
        <p className="text-xs uppercase tracking-[0.28em] text-burgundy-700">
          Participate
        </p>
        <h2 className="font-display mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
          Know someone whose story should be preserved?
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-charcoal-700">
          Granville Stories depends on community participation. If you know
          someone whose experiences, memories, or perspective should be shared,
          I’d love to connect.
        </p>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block rounded-full bg-charcoal-900 px-6 py-3 text-sm font-medium text-cream-25 transition hover:bg-burgundy-700"
          >
            Get in Touch
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
}