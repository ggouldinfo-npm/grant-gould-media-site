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

export default function GrantYouAStoryPage() {
  return (
    <div className={`${manrope.className} bg-charcoal-900 text-white`}>
      <section className="relative min-h-[72vh] overflow-hidden sm:min-h-[78vh]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/grantyouastory-video.mp4"
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
              Grant You a Story
            </motion.p>

            <motion.h1
              variants={riseIn}
              className={`${spaceGrotesk.className} mt-4 max-w-5xl text-4xl font-semibold leading-[1.08] tracking-normal text-white sm:text-7xl sm:leading-[1.12]`}
            >
              Behind the scenes, real adventures, and stories worth watching
            </motion.h1>

            <motion.p
              variants={riseIn}
              className="mt-6 max-w-2xl text-base leading-7 tracking-normal text-white/85 sm:mt-8 sm:text-xl sm:leading-8"
            >
              A more personal lens into the process, the places, and the moments
              that happen while building things that matter.
            </motion.p>

            <motion.div
              variants={riseIn}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
            >
              <Link
                href="/contact"
                className="w-full bg-white px-6 py-3 text-center text-sm font-medium tracking-normal text-charcoal-900 transition duration-200 hover:-translate-y-0.5 hover:bg-burgundy-700 hover:text-white sm:w-auto"
              >
                Contact
              </Link>

              <Link
                href="/services"
                className="w-full border border-white/35 px-6 py-3 text-center text-sm font-medium tracking-normal text-white transition duration-200 hover:-translate-y-0.5 hover:border-burgundy-700 hover:text-burgundy-700 sm:w-auto"
              >
                View Services
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <motion.section
        variants={pageStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto max-w-6xl px-5 pt-12 pb-20 sm:px-6 sm:pt-14 sm:pb-28"
      >
        <motion.div
          variants={riseIn}
          className="max-w-4xl space-y-5 text-base leading-7 tracking-normal text-white/78 sm:space-y-6 sm:text-lg sm:leading-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-burgundy-700">
            The Work
          </p>

          <h2
            className={`${spaceGrotesk.className} max-w-3xl text-3xl font-semibold leading-tight tracking-normal text-white sm:text-4xl`}
          >
            The personal side of what I do
          </h2>

          <p>Grant You a Story is the personal side of the work.</p>

          <p>
            It is a space for process, travel, creative exploration, and the real
            moments that happen while building things that matter.
          </p>

          <p>
            This platform lives alongside Grant Gould Media and Granville
            Stories, offering a more personal lens into the work, the places, and
            the adventures behind it.
          </p>
        </motion.div>

        <motion.div
          variants={riseIn}
          className="mt-12 grid gap-6 sm:mt-14 md:grid-cols-3"
        >
          <motion.div
            whileHover={cardLift}
            className="border border-charcoal-800 bg-charcoal-900/40 p-6 shadow-none sm:p-8"
          >
            <h3
              className={`${spaceGrotesk.className} text-2xl font-semibold tracking-normal text-white`}
            >
              Behind the Scenes
            </h3>

            <p className="mt-4 leading-7 tracking-normal text-white/72">
              The process, preparation, and in-between moments that usually stay
              off camera.
            </p>
          </motion.div>

          <motion.div
            whileHover={cardLift}
            className="border border-charcoal-800 bg-charcoal-900/40 p-6 shadow-none sm:p-8"
          >
            <h3
              className={`${spaceGrotesk.className} text-2xl font-semibold tracking-normal text-white`}
            >
              Real Adventures
            </h3>

            <p className="mt-4 leading-7 tracking-normal text-white/72">
              Travel, movement, exploration, and the moments in between.
            </p>
          </motion.div>

          <motion.div
            whileHover={cardLift}
            className="border border-charcoal-800 bg-charcoal-900/40 p-6 shadow-none sm:p-8"
          >
            <h3
              className={`${spaceGrotesk.className} text-2xl font-semibold tracking-normal text-white`}
            >
              Stories Worth Watching
            </h3>

            <p className="mt-4 leading-7 tracking-normal text-white/72">
              A platform for scenes, conversations, and moments that carry
              feeling, meaning, and perspective.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}