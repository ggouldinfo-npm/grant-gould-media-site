"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Manrope, Space_Grotesk } from "next/font/google";
import { projects } from "@/data/projects";
import { cardLift, pageStagger, riseIn } from "@/lib/motion";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function HomePage() {
  return (
    <div className={`${manrope.className} bg-charcoal-900 text-white`}>
      <section className="relative min-h-[72vh] overflow-hidden sm:min-h-[78vh]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/home-video.mp4"
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
              className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-burgundy-700"
            >
              Grant Gould Media
            </motion.p>

            <motion.h1
              variants={riseIn}
              className={`${spaceGrotesk.className} max-w-5xl text-4xl font-semibold leading-[1.08] tracking-normal text-white sm:text-7xl sm:leading-[1.12]`}
            >
              Visual storytelling for communities, businesses, and real stories
            </motion.h1>

            <motion.p
              variants={riseIn}
              className="mt-6 max-w-2xl text-base leading-7 tracking-normal text-white/85 sm:mt-8 sm:text-xl sm:leading-8"
            >
              Grant Gould Media is the home of client work, Granville Stories,
              and Grant You a Story—three connected platforms rooted in
              purpose, quality, and perspective.
            </motion.p>

            <motion.div
              variants={riseIn}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
            >
              <Link
                href="/services"
                className="w-full bg-white px-6 py-3 text-center text-sm font-medium tracking-normal text-charcoal-900 transition duration-200 hover:-translate-y-0.5 hover:bg-burgundy-700 hover:text-white sm:w-auto"
              >
                View Services
              </Link>

              <Link
                href="/granville-stories"
                className="w-full border border-white/35 px-6 py-3 text-center text-sm font-medium tracking-normal text-white transition duration-200 hover:-translate-y-0.5 hover:border-burgundy-700 hover:text-burgundy-700 sm:w-auto"
              >
                Explore Granville Stories
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
        className="mx-auto max-w-6xl px-5 py-16 pb-20 sm:px-6 sm:py-24 sm:pb-28"
      >
        <div className="grid items-stretch gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <motion.div key={project.title} variants={riseIn} className="h-full">
              <Link
                href={project.href || "/services"}
                className="group block h-full"
              >
                <motion.div
                  whileHover={cardLift}
                  className="flex h-full flex-col overflow-hidden border border-charcoal-800 bg-charcoal-950 shadow-none"
                >
                  <div className="relative h-64 w-full shrink-0 bg-charcoal-800 sm:h-72">
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

                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-burgundy-700">
                      {project.category}
                    </p>

                    <h2
                      className={`${spaceGrotesk.className} mt-3 text-[1.55rem] font-semibold leading-tight tracking-normal text-white sm:text-[1.65rem]`}
                    >
                      {project.title}
                    </h2>

                    <p className="mt-4 flex-1 leading-7 tracking-normal text-white/72">
                      {project.description}
                    </p>

                    <p className="mt-6 text-sm font-medium text-white underline underline-offset-4 transition group-hover:text-burgundy-700">
                      View
                    </p>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}