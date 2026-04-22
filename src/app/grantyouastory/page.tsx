"use client";

import { motion } from "framer-motion";
import { pageStagger, riseIn, cardLift } from "@/lib/motion";

export default function GrantYouAStoryPage() {
  return (
    <motion.section
      variants={pageStagger}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <motion.p variants={riseIn} className="page-kicker">
        Grant You a Story
      </motion.p>

      <motion.h1 variants={riseIn} className="page-heading max-w-4xl">
        Behind the scenes, real adventures, and stories worth watching
      </motion.h1>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          variants={riseIn}
          className="space-y-6 text-lg leading-8 text-cream-25/78"
        >
          <p>Grant You a Story is the personal side of the work.</p>

          <p>
            It is a space for process, travel, creative exploration, and the
            real moments that happen while building things that matter.
          </p>

          <p>
            This platform lives alongside Grant Gould Media and Granville
            Stories, offering a more personal lens into the work, the places,
            and the adventures behind it.
          </p>
        </motion.div>

        <motion.div
          variants={riseIn}
          whileHover={cardLift}
          className="surface-card soft-shadow p-8"
        >
          <p className="page-kicker">Includes</p>

          <div className="mt-6 space-y-4 text-cream-25/78">
            <p>Behind the scenes content</p>
            <p>Creative adventures</p>
            <p>Travel and process</p>
            <p>Stories worth watching as they unfold</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}