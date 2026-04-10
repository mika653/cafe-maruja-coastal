"use client";

import { motion } from "framer-motion";

const items = [
  "Slow Brunch",
  "Considered Cocktails",
  "Beachfront Lounge",
  "Sunrise to Midnight",
  "Live Music",
  "Coconut-Shell Drinks",
  "Boracay Station 3",
];

export default function SocialProof() {
  const loop = [...items, ...items];

  return (
    <section className="relative bg-teal-deep py-7 sm:py-9 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]"
      >
        <motion.div
          className="flex gap-14 sm:gap-20 pr-14 sm:pr-20 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          {loop.map((item, i) => (
            <div
              key={`${item}-${i}`}
              className="flex items-center gap-14 sm:gap-20"
            >
              <span className="font-[family-name:var(--font-heading)] italic text-lg sm:text-xl font-light tracking-wide text-ivory/90">
                {item}
              </span>
              <span className="text-brass-light text-sm" aria-hidden>
                ❖
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
