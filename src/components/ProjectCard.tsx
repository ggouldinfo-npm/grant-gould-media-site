"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { cardLift } from "@/lib/motion";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <motion.div
      whileHover={cardLift}
      className="surface-card soft-shadow h-full overflow-hidden"
    >
      <div className="flex h-full flex-col">
        <div className="relative h-56 w-full shrink-0 bg-cream-100">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          ) : null}
        </div>

        <div className="flex flex-1 flex-col p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-burgundy-700">
            {project.category}
          </p>

          <h2 className="font-display mt-3 text-[1.65rem] font-medium tracking-[-0.02em] text-charcoal-900">
            {project.title}
          </h2>

          <p className="mt-4 flex-1 leading-7 text-charcoal-700">
            {project.description}
          </p>

          {project.href ? (
            <Link
              href={project.href}
              className="mt-6 inline-block text-sm font-medium text-charcoal-900 underline underline-offset-4 transition hover:text-burgundy-700"
            >
              View project
            </Link>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}