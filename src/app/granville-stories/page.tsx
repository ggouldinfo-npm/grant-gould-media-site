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
      <section className="relative min-h-[72vh] overflow-hidden sm:min-h-[78vh]">
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
          className="relative z-10 mx-auto flex min-h-[72vh] max-w-6xl items-center px-5 py-20 sm:min-h-[78vh] sm:px-6 sm:py-24"
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
              className={`${spaceGrotesk.className} mt-4 max-w-5xl text-4xl font-semibold leading-[1.08] tracking-normal text-white sm:text-7xl sm:leading-[1.12]`}
            >
              Preserving the voices, stories, and history of Granville, New York
            </motion.h1>

            <motion.p
              variants={riseIn}
              className="mt-6 max-w-2xl text-base leading-7 tracking-normal text-white/85 sm:mt-8 sm:text-xl sm:leading-8"
            >
              A community-driven visual archive built to document the people,
              places, memories, and stories that shape Granville.
            </motion.p>

            <motion.div
              variants={riseIn}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
            >
              <Link
                href="/contact"
                className="w-full bg-white px-6 py-3 text-center text-sm font-medium tracking-normal text-charcoal-900 transition duration-200 hover:-translate-y-0.5 hover:bg-burgundy-700 hover:text-white sm:w-auto"
              >
                Share a Story
              </Link>

              <a
                href="https://gofund.me/5affd27d8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-white/35 px-6 py-3 text-center text-sm font-medium tracking-normal text-white transition duration-200 hover:-translate-y-0.5 hover:border-burgundy-700 hover:text-burgundy-700 sm:w-auto"
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
        className="mx-auto max-w-6xl px-5 py-16 pb-20 sm:px-6 sm:py-24 sm:pb-28"
      >
        <motion.div
          variants={riseIn}
          className="grid gap-8 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-burgundy-700">
              The Project
            </p>

            <h2
              className={`${spaceGrotesk.className} mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-normal text-white sm:text-4xl`}
            >
              A lasting archive for the community that shaped me
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 tracking-normal text-white/78 sm:space-y-6 sm:text-lg sm:leading-8">
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
              The goal is to build a visual archive that reflects the people,
              identity, and character of the community—something that can be
              shared now and preserved for future generations.
            </p>
          </div>
        </motion.div>

        <motion.div variants={riseIn} className="mt-16 sm:mt-24">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-burgundy-700">
            Archive
          </p>

          <h2
            className={`${spaceGrotesk.className} mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-normal text-white sm:text-4xl`}
          >
            Featured stories
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-7 tracking-normal text-white/78 sm:text-lg sm:leading-8">
            Interviews and story features will be embedded here as the archive
            grows over time.
          </p>

          <div className="mt-10">
            <motion.div
              whileHover={cardLift}
              className="min-h-[300px] border border-dashed border-charcoal-800 bg-charcoal-900/40 p-6 shadow-none sm:min-h-[420px] sm:p-8"
            >
              <div className="flex h-full min-h-[240px] items-center justify-center sm:min-h-[356px]">
                <p className="text-center text-sm font-semibold uppercase tracking-[0.22em] text-white/50">
                  Interviews and story features will appear here
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={riseIn}
          className="mt-16 grid gap-6 sm:mt-24 md:grid-cols-3"
        >
          <motion.div
            whileHover={cardLift}
            className="border border-charcoal-800 bg-charcoal-900/40 p-6 shadow-none sm:p-8"
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
            className="border border-charcoal-800 bg-charcoal-900/40 p-6 shadow-none sm:p-8"
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
            className="border border-charcoal-800 bg-charcoal-900/40 p-6 shadow-none sm:p-8"
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