"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-36 px-6 sm:px-10 bg-teal-deep text-ivory overflow-hidden"
    >
      {/* Soft background gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(184, 153, 104, 0.2) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-[1500px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-6 lg:pr-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="brass-rule" />
              <p className="eyebrow-luxe">Our Story</p>
            </div>
            <h2 className="display-cinema text-4xl sm:text-6xl lg:text-7xl text-ivory mb-10">
              A sanctuary
              <br />
              <span className="italic text-brass-light">by the sea.</span>
            </h2>

            <div className="space-y-5 text-ivory/80 text-base sm:text-lg leading-relaxed font-light max-w-xl">
              <p>
                Cafe Maruja sits at the quieter end of Boracay&apos;s White
                Beach, tucked inside Casa Pilar Resort at Station 3. Our cooks
                bake sourdough at sunrise, plate avocado roses with patience,
                and pour cocktails as the ocean turns indigo.
              </p>
              <p>
                We are a cafe by day and a lounge by night. The fairy lights
                come on around six, the music slows, and the cocktails arrive
                in coconut shells. Stay for one drink. You&apos;ll likely stay
                for three.
              </p>
            </div>

            {/* Mini stats */}
            <div className="mt-12 pt-10 border-t border-ivory/10 grid grid-cols-3 gap-6">
              {[
                { num: "VII", label: "Years on the island" },
                { num: "365", label: "Days of sunset" },
                { num: "01", label: "Reason to stay" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-[family-name:var(--font-heading)] italic text-3xl text-brass-light font-light">
                    {stat.num}
                  </div>
                  <div className="text-[10px] tracking-[0.22em] uppercase text-ivory/50 mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image stack */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/ambiance-1.jpg"
                alt="Cafe Maruja interior, evening view"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Brass corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-brass" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-brass" />
            </div>

            {/* Floating secondary image */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 sm:w-52 sm:h-52 overflow-hidden hidden sm:block shadow-2xl border-4 border-teal-deep">
              <Image
                src="/images/food-1.jpg"
                alt="Avocado rose toast"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
