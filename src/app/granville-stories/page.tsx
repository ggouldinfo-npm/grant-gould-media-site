"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Manrope, Space_Grotesk } from "next/font/google";
import { cardLift, pageStagger, riseIn } from "@/lib/motion";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function GranvilleStoriesPage() {
  return (
    <div className={`${manrope.className} bg-charcoal-900 text-white`}>
      <section className="relative min-h-[78vh] overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/granville-drone.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-charcoal-900/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/20 via-charcoal-900/40 to-charcoal-900" />

        <motion.div
          variants={pageStagger}
          initial="hidden"
          animate="show"
          className="relative z-10 mx-auto flex min-h-[78vh] max-w-6xl items-center px-6 py-24"
        >
          <div className="max-w-4xl">
            <motion.p
              variants={riseIn}
              className="text-xs font-semibold uppercase tracking-[0.28em] text-burgundy-700"
            >
              Granville Stories
            </motion.p>

            <motion.h1
              variants={riseIn}
              className={`${spaceGrotesk.className} mt-4 max-w-5xl text-5xl font-semibold leading-[1.12] tracking-normal text-white sm:text-7xl`}
            >
              Preserving the voices, stories, and history of Granville, New York
            </motion.h1>

            <motion.p
              variants={riseIn}
              className="mt-8 max-w-2xl text-lg leading-8 tracking-normal text-white/85 sm:text-xl"
            >
              An initiative focused on documenting and preserving the people,
              places, memories, and stories that shape Granville.
            </motion.p>

            <motion.div variants={riseIn} className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white px-6 py-3 text-sm font-medium tracking-normal text-charcoal-900 transition duration-200 hover:-translate-y-0.5 hover:bg-burgundy-700 hover:text-white"
              >
                Share a Story
              </Link>

              <a
                href="https://gofund.me/5affd27d8"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/35 px-6 py-3 text-sm font-medium tracking-normal text-white transition duration-200 hover:-translate-y-0.5 hover:border-burgundy-700 hover:text-burgundy-700"
              >
                Support the Project
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <motion.section
        variants={pageStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto max-w-6xl px-6 py-24 pb-28"
      >
        <motion.div
          variants={riseIn}
          className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-burgundy-700">
              The Project
            </p>

            <h2
              className={`${spaceGrotesk.className} mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-white`}
            >
              A lasting archive for the community that shaped me
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 tracking-normal text-white/78">
            <p>
              Granville Stories is an initiative focused on
              documenting and preserving the voices, stories, and history of
              Granville through interviews and visual storytelling.
            </p>

            <p>
              The inspiration for starting Granville Stories comes from conversations with my grandmother and a growing realization that many meaningful local stories are never
              formally captured and can be lost over time.
            </p>

            <p>
              The goal is to build a visual archive that reflects the people,
              identity, and character of the community—something that can be
              shared now and preserved for future generations.
            </p>
          </div>
        </motion.div>

        <motion.div variants={riseIn} className="mt-24">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-burgundy-700">
            Archive
          </p>

          <h2
            className={`${spaceGrotesk.className} mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-white`}
          >
            Featured stories
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 tracking-normal text-white/78">
            Interviews and story features will be embedded here as the archive
            grows over time.
          </p>

          <div className="mt-10">
            <motion.div
              whileHover={cardLift}
              className="min-h-[420px] border border-dashed border-charcoal-800 bg-charcoal-900/40 p-8 shadow-none"
            >
              <div className="flex h-full min-h-[356px] items-center justify-center">
                <p className="text-center text-sm font-semibold uppercase tracking-[0.22em] text-white/50">
                  Interviews and story features will appear here
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={riseIn}
          className="mt-24 grid gap-6 md:grid-cols-3"
        >
          <motion.div
            whileHover={cardLift}
            className="border border-charcoal-800 bg-charcoal-900/40 p-8 shadow-none"
          >
            <h3
              className={`${spaceGrotesk.className} text-2xl font-semibold tracking-normal text-white`}
            >
              Local Voices
            </h3>

            <p className="mt-4 leading-7 tracking-normal text-white/72">
              Interviews and conversations with people whose experiences help
              tell the story of Granville.
            </p>
          </motion.div>

          <motion.div
            whileHover={cardLift}
            className="border border-charcoal-800 bg-charcoal-900/40 p-8 shadow-none"
          >
            <h3
              className={`${spaceGrotesk.className} text-2xl font-semibold tracking-normal text-white`}
            >
              Community Memory
            </h3>

            <p className="mt-4 leading-7 tracking-normal text-white/72">
              Stories, places, and memories that deserve to be documented before
              they are lost over time.
            </p>
          </motion.div>

          <motion.div
            whileHover={cardLift}
            className="border border-charcoal-800 bg-charcoal-900/40 p-8 shadow-none"
          >
            <h3
              className={`${spaceGrotesk.className} text-2xl font-semibold tracking-normal text-white`}
            >
              Visual Archive
            </h3>

            <p className="mt-4 leading-7 tracking-normal text-white/72">
              A growing collection of interviews, footage, and visual materials
              built for the community and future generations.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}