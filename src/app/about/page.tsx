"use client";

import { motion } from "framer-motion";
import { pageStagger, riseIn, cardLift } from "@/lib/motion";

export default function AboutPage() {
  return (
    <motion.section
      variants={pageStagger}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <motion.p variants={riseIn} className="page-kicker">
        About
      </motion.p>

      <motion.h1 variants={riseIn} className="page-heading max-w-3xl">
        Storytelling rooted in purpose, place, and impact
      </motion.h1>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          variants={riseIn}
          className="space-y-6 text-lg leading-8 text-cream-25/78"
        >
          <p>
            Hi, I am Grant Gould, a storyteller and creator from Granville, New
            York. My work is based on visual storytelling that supports
            communities, businesses, and real stories.
          </p>

          <p>
            Grant Gould Media serves as the main hub for my client and
            business-facing work, while also housing Granville Stories and Grant
            You a Story.
          </p>

          <p>
            Inspired by my passion for storytelling and conversations with my
            grandmother, Granville Stories is an initiative focused on
            documenting and preserving the voices, stories, and history of the
            community that shaped me.
          </p>

          <p>
            Grant You a Story is the more personal side of the work—behind the
            scenes, real adventures, and the moments in between.
          </p>

          <p>
            Everything I create is rooted in purpose, quality, and perspective.
          </p>
        </motion.div>

        <motion.div
          variants={riseIn}
          whileHover={cardLift}
          className="surface-card soft-shadow p-8"
        >
          <p className="page-kicker">Focus</p>

          <h2 className="font-display mt-4 text-[1.8rem] font-medium tracking-[-0.02em] text-cream-25">
            Three platforms
          </h2>

          <div className="mt-6 space-y-5 text-cream-25/78">
            <div>
              <h3 className="font-medium text-cream-25">Grant Gould Media</h3>
              <p className="mt-1 leading-7">
                Client-facing storytelling, creative direction, and business
                content.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-cream-25">Granville Stories</h3>
              <p className="mt-1 leading-7">
                Preserving the voices, stories, and history of Granville.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-cream-25">Grant You a Story</h3>
              <p className="mt-1 leading-7">
                Behind the scenes, personal storytelling, and the moments in
                between.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}