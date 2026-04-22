"use client";

import { motion } from "framer-motion";
import type { GranvilleStory } from "@/data/granvilleStories";
import { cardLift } from "@/lib/motion";

type Props = {
  story: GranvilleStory;
};

export default function StoryCard({ story }: Props) {
  return (
    <motion.div whileHover={cardLift} className="surface-card soft-shadow p-8">
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs uppercase tracking-[0.2em] text-burgundy-700">
          {story.category}
        </p>

        {story.status ? (
          <span className="rounded-full bg-cream-50 px-3 py-1 text-xs text-charcoal-700">
            {story.status}
          </span>
        ) : null}
      </div>

      <h3 className="font-display mt-4 text-[1.65rem] font-medium tracking-[-0.02em] text-charcoal-900">
        {story.title}
      </h3>

      <p className="mt-4 leading-7 text-charcoal-700">{story.description}</p>
    </motion.div>
  );
}