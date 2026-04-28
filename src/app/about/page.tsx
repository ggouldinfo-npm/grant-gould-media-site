"use client";

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

export default function AboutPage() {
  return (
    <div className={`${manrope.className} bg-charcoal-900 text-white`}>
      <motion.section
        variants={pageStagger}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-6xl px-5 py-16 pb-20 sm:px-6 sm:py-24 sm:pb-28"
      >
        <motion.p
          variants={riseIn}
          className="text-xs font-semibold uppercase tracking-[0.28em] text-burgundy-700"
        >
          About
        </motion.p>

        <motion.h1
          variants={riseIn}
          className={`${spaceGrotesk.className} mt-4 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-normal text-white sm:text-7xl sm:leading-[1.12]`}
        >
          Storytelling rooted in purpose, place, and impact
        </motion.h1>

        <div className="mt-10 grid gap-8 sm:mt-12 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            variants={riseIn}
            className="space-y-5 text-base leading-7 tracking-normal text-white/78 sm:space-y-6 sm:text-lg sm:leading-8"
          >
            <p>
              Hi, I am Grant Gould, a storyteller and creator from Granville,
              New York. My work is based on visual storytelling that supports
              communities, businesses, and real stories.
            </p>

            <p>
              Grant Gould Media serves as the main hub for my client and
              business-facing work, while also housing Granville Stories and
              Grant You a Story.
            </p>

            <p>
              Inspired by my passion for storytelling and conversations with my
              grandmother, Granville Stories is an initiative focused on
              documenting and preserving the voices, stories, and history of the
              community that shaped me.
            </p>

            <p>
              Grant You a Story is the more personal side of the work—behind
              the scenes, real adventures, and the moments in between.
            </p>

            <p>
              Everything I create is rooted in purpose, quality, and
              perspective.
            </p>
          </motion.div>

          <motion.div
            variants={riseIn}
            whileHover={cardLift}
            className="border border-charcoal-800 bg-charcoal-900/40 p-6 shadow-none sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-burgundy-700">
              Focus
            </p>

            <h2
              className={`${spaceGrotesk.className} mt-4 text-[1.7rem] font-semibold leading-tight tracking-normal text-white sm:text-[1.8rem]`}
            >
              Three platforms
            </h2>

            <div className="mt-6 space-y-5 text-white/78">
              <div>
                <h3
                  className={`${spaceGrotesk.className} font-semibold tracking-normal text-white`}
                >
                  Grant Gould Media
                </h3>
                <p className="mt-1 leading-7">
                  Client-facing storytelling, creative direction, and business
                  content.
                </p>
              </div>

              <div>
                <h3
                  className={`${spaceGrotesk.className} font-semibold tracking-normal text-white`}
                >
                  Granville Stories
                </h3>
                <p className="mt-1 leading-7">
                  Preserving the voices, stories, and history of Granville.
                </p>
              </div>

              <div>
                <h3
                  className={`${spaceGrotesk.className} font-semibold tracking-normal text-white`}
                >
                  Grant You a Story
                </h3>
                <p className="mt-1 leading-7">
                  Behind the scenes, personal storytelling, and the moments in
                  between.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

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
              Purpose
            </h3>

            <p className="mt-4 leading-7 tracking-normal text-white/72">
              Creating work that has meaning beyond the final post, video, or
              project.
            </p>
          </motion.div>

          <motion.div
            whileHover={cardLift}
            className="border border-charcoal-800 bg-charcoal-900/40 p-6 shadow-none sm:p-8"
          >
            <h3
              className={`${spaceGrotesk.className} text-2xl font-semibold tracking-normal text-white`}
            >
              Quality
            </h3>

            <p className="mt-4 leading-7 tracking-normal text-white/72">
              Building visuals, stories, and digital experiences with intention
              and care.
            </p>
          </motion.div>

          <motion.div
            whileHover={cardLift}
            className="border border-charcoal-800 bg-charcoal-900/40 p-6 shadow-none sm:p-8"
          >
            <h3
              className={`${spaceGrotesk.className} text-2xl font-semibold tracking-normal text-white`}
            >
              Perspective
            </h3>

            <p className="mt-4 leading-7 tracking-normal text-white/72">
              Looking closely at people, places, and stories that deserve to be
              seen clearly.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}