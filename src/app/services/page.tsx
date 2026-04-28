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

export default function ServicesPage() {
  return (
    <div className={`${manrope.className} bg-charcoal-900 text-white`}>
      <section className="relative min-h-[78vh] overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/services-drone.mp4"
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
              Services
            </motion.p>

            <motion.h1
              variants={riseIn}
              className={`${spaceGrotesk.className} mt-4 max-w-5xl text-5xl font-semibold leading-[1.12] tracking-normal text-white sm:text-7xl`}
            >
              Story-driven media for communities, businesses, and real stories
            </motion.h1>

            <motion.p
              variants={riseIn}
              className="mt-8 max-w-2xl text-lg font-normal leading-8 tracking-normal text-white/85 sm:text-xl"
            >
              Drone visuals, short-form content, and documentary-style media
              built on purpose, quality, and perspective.
            </motion.p>

            <motion.div variants={riseIn} className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white px-6 py-3 text-sm font-medium tracking-normal text-charcoal-900 transition duration-200 hover:-translate-y-0.5 hover:bg-burgundy-700 hover:text-white"
              >
                Contact
              </Link>

              <Link
                href="/granville-stories"
                className="border border-white/35 px-6 py-3 text-sm font-medium tracking-normal text-white transition duration-200 hover:-translate-y-0.5 hover:border-burgundy-700 hover:text-burgundy-700"
              >
                View Granville Stories
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 pb-28">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-burgundy-700">
          What I Offer
        </p>

        <motion.div
          whileHover={cardLift}
          className="mt-8 border border-charcoal-800 bg-charcoal-900/40 p-8 shadow-none sm:p-10"
        >
          <h2
            className={`${spaceGrotesk.className} text-3xl font-semibold leading-tight tracking-normal text-white`}
          >
            Services Available
          </h2>

          <p className="mt-5 max-w-3xl leading-7 tracking-normal text-white/72">
            Media services for businesses, communities, properties, events, and
            story-centered projects that need stronger visuals and a clearer
            digital presence.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div>
              <h3
                className={`${spaceGrotesk.className} text-2xl font-semibold tracking-normal text-white`}
              >
                Drone Visuals
              </h3>
              <p className="mt-4 leading-7 tracking-normal text-white/72">
                Aerial footage for businesses, properties, communities, and
                story-driven projects.
              </p>
            </div>

            <div>
              <h3
                className={`${spaceGrotesk.className} text-2xl font-semibold tracking-normal text-white`}
              >
                Short-Form Content
              </h3>
              <p className="mt-4 leading-7 tracking-normal text-white/72">
                Vertical videos, social clips, and content built for online
                presence and engagement.
              </p>
            </div>

            <div>
              <h3
                className={`${spaceGrotesk.className} text-2xl font-semibold tracking-normal text-white`}
              >
                Promotional Videos
              </h3>
              <p className="mt-4 leading-7 tracking-normal text-white/72">
                Clean, story-centered videos for businesses, organizations,
                events, and local projects.
              </p>
            </div>

            <div>
              <h3
                className={`${spaceGrotesk.className} text-2xl font-semibold tracking-normal text-white`}
              >
                Website & Digital Refreshes
              </h3>
              <p className="mt-4 leading-7 tracking-normal text-white/72">
                Updated visuals, layout direction, inquiry flow, and digital
                presentation for brands, properties, and organizations.
              </p>
            </div>

            <div>
              <h3
                className={`${spaceGrotesk.className} text-2xl font-semibold tracking-normal text-white`}
              >
                Interviews & Story Features
              </h3>
              <p className="mt-4 leading-7 tracking-normal text-white/72">
                Documentary-style conversations and visual storytelling for
                people, places, communities, and local stories.
              </p>
            </div>

            <div>
              <h3
                className={`${spaceGrotesk.className} text-2xl font-semibold tracking-normal text-white`}
              >
                Photography & Visual Assets
              </h3>
              <p className="mt-4 leading-7 tracking-normal text-white/72">
                Photos and supporting visuals for websites, social media,
                promotions, and project materials.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={riseIn} className="mt-24">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-burgundy-700">
            Where I Work
          </p>

          <h2
            className={`${spaceGrotesk.className} mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-white`}
          >
            Based near Granville, focused on nearby New York and Vermont
            communities
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 tracking-normal text-white/72">
            I focus on projects close to home and throughout the surrounding
            region, especially places where local businesses, communities, and
            stories deserve stronger visuals.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <motion.div
              variants={riseIn}
              whileHover={cardLift}
              className="border border-charcoal-800 bg-charcoal-900/40 p-8 shadow-none"
            >
              <h3
                className={`${spaceGrotesk.className} text-2xl font-semibold tracking-normal text-white`}
              >
                Nearby New York
              </h3>

              <p className="mt-4 leading-7 tracking-normal text-white/72">
                Granville, Glens Falls, Saratoga, and surrounding communities.
              </p>
            </motion.div>

            <motion.div
              variants={riseIn}
              whileHover={cardLift}
              className="border border-charcoal-800 bg-charcoal-900/40 p-8 shadow-none"
            >
              <h3
                className={`${spaceGrotesk.className} text-2xl font-semibold tracking-normal text-white`}
              >
                Nearby Vermont
              </h3>

              <p className="mt-4 leading-7 tracking-normal text-white/72">
                Dorset, Pawlet, Middletown Springs, Manchester, and surrounding
                areas.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}