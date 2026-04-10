"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden flex items-end bg-teal-deep">
      {/* Background image */}
      <Image
        src="/images/ambiance-1.jpg"
        alt="Cafe Maruja beachfront lounge at sunset"
        fill
        priority
        className="object-cover ken-burns"
        sizes="100vw"
      />
      <div className="absolute inset-0 hero-overlay-luxe" />

      {/* Top brand mark */}
      <div className="absolute top-0 left-0 right-0 z-10 pt-28 sm:pt-36 pb-8 px-6 sm:px-10">
        <div className="max-w-[1500px] mx-auto flex items-center justify-between text-[10px] tracking-[0.32em] uppercase text-ivory/70">
          <span>Est. Boracay</span>
          <span className="hidden sm:inline">A Beachfront Sanctuary</span>
          <span>Station 3</span>
        </div>
      </div>

      {/* Bottom content */}
      <div className="relative z-10 w-full px-6 sm:px-10 pb-16 sm:pb-24">
        <div className="max-w-[1500px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="brass-rule" />
            <p className="eyebrow-luxe text-brass-light">
              Cafe &middot; Lounge &middot; Sanctuary
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="display-cinema text-[3rem] sm:text-7xl lg:text-[8rem] text-ivory max-w-4xl"
          >
            The sunset
            <br />
            <span className="italic text-brass-light">finds you here.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-end"
          >
            <p className="text-ivory/85 text-base sm:text-lg leading-relaxed font-light max-w-xl">
              Tucked into Casa Pilar Resort on the quieter end of White Beach,
              Cafe Maruja serves slow brunch by sunrise and considered
              cocktails by golden hour. Pull up a cushion. Stay until the
              fairy lights come on.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:items-center lg:justify-end">
              <a
                href="https://wa.me/639260844793"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-[0.25em] uppercase font-semibold text-teal-deep bg-ivory px-8 py-4 hover:bg-brass hover:text-ivory transition-all duration-500 text-center"
              >
                Reserve a Table
              </a>
              <a
                href="#about"
                className="text-[11px] tracking-[0.25em] uppercase font-semibold text-ivory border border-ivory/40 px-8 py-4 hover:bg-ivory/10 transition-all duration-500 text-center"
              >
                Read the Story
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 right-6 sm:right-10 z-10 hidden md:flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-ivory/50 [writing-mode:vertical-rl]"
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[1px] h-12 bg-brass-light/50"
        />
      </motion.div>
    </section>
  );
}
