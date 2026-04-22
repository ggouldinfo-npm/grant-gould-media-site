"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { cardLift, pageStagger, riseIn } from "@/lib/motion";

export default function HomePage() {
  return (
    <div className="bg-charcoal-900 text-cream-25">
      <motion.section
        variants={pageStagger}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-6xl px-6 py-28 sm:py-32"
      >
        <div className="max-w-4xl">
          <motion.p
            variants={riseIn}
            className="mb-5 text-xs uppercase tracking-[0.3em] text-burgundy-700"
          >
            Grant Gould Media
          </motion.p>

          <motion.h1
            variants={riseIn}
            className="font-display max-w-5xl text-5xl font-semibold leading-[1.04] tracking-[-0.03em] text-cream-25 sm:text-7xl"
          >
            Visual storytelling for communities, businesses, and real stories
          </motion.h1>

          <motion.p
            variants={riseIn}
            className="mt-8 max-w-2xl text-lg leading-8 text-cream-25/78 sm:text-xl"
          >
            Grant Gould Media is the home of client work, Granville Stories, and
            Grant You a Story—three connected platforms rooted in purpose,
            quality, and perspective.
          </motion.p>

          <motion.div variants={riseIn} className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="rounded-full bg-cream-25 px-6 py-3 text-sm font-medium text-charcoal-900 transition duration-200 hover:-translate-y-0.5 hover:bg-burgundy-700 hover:text-cream-25"
            >
              View Services
            </Link>

            <Link
              href="/granville-stories"
              className="rounded-full border border-cream-25/30 px-6 py-3 text-sm font-medium text-cream-25 transition duration-200 hover:-translate-y-0.5 hover:border-burgundy-700 hover:text-burgundy-700"
            >
              Explore Granville Stories
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        variants={pageStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto max-w-6xl px-6 pb-24"
      >
        <div className="grid items-stretch gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <motion.div key={project.title} variants={riseIn} className="h-full">
              <Link href={project.href || "/services"} className="group block h-full">
                <motion.div
                  whileHover={cardLift}
                  className="flex h-full flex-col overflow-hidden rounded-[28px] border border-charcoal-800 bg-charcoal-950"
                >
                  <div className="relative h-72 w-full shrink-0 bg-charcoal-800">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-black/10" />
                  </div>

                  <div className="flex flex-1 flex-col p-8">
                    <p className="text-xs uppercase tracking-[0.2em] text-burgundy-700">
                      {project.category}
                    </p>

                    <h2 className="font-display mt-3 text-[1.65rem] font-medium tracking-[-0.02em] text-cream-25">
                      {project.title}
                    </h2>

                    <p className="mt-4 flex-1 leading-7 text-cream-25/72">
                      {project.description}
                    </p>

                    <p className="mt-6 text-sm font-medium text-cream-25 underline underline-offset-4 transition group-hover:text-burgundy-700">
                      View project
                    </p>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        className="mx-auto max-w-6xl px-6 pb-28"
      >
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="surface-light overflow-hidden px-8 py-14 sm:px-12"
        >
          <p className="text-xs uppercase tracking-[0.28em] text-burgundy-700">
            Purpose
          </p>
          <h2 className="font-display mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
            Built with purpose, quality, and perspective
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-charcoal-700">
            This work is rooted in long-term impact—preserving what matters,
            helping stories be seen, and creating visuals that last.
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
}