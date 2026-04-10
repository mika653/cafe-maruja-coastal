"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const highlights = [
  {
    name: "Avocado Rose Toast",
    description:
      "Sourdough, smashed avocado fanned into a rose, poached egg, cherry tomatoes, radish, micro-greens.",
    price: "₱380",
    image: "/images/food-1.jpg",
    tag: "House Favorite",
  },
  {
    name: "The Maruja Sunset",
    description:
      "Rum, mango purée, passion fruit, lime — served in a hollowed gold pineapple with a paper straw.",
    price: "₱280",
    image: "/images/drinks-1.jpg",
    tag: "Signature",
  },
  {
    name: "Artisan Brunch Plate",
    description:
      "Poached egg, smoked salmon, cucumber ribbons, micro-herbs, sourdough, cultured butter.",
    price: "₱420",
    image: "/images/food-2.jpg",
    tag: "Chef's Selection",
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="bg-ivory py-24 sm:py-36 px-6 sm:px-10">
      <div className="max-w-[1500px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="brass-rule" />
            <p className="eyebrow-luxe">Selections</p>
            <span className="brass-rule" />
          </div>
          <h2 className="display-cinema text-4xl sm:text-6xl lg:text-7xl text-teal-deep">
            What everyone
            <br />
            <span className="italic text-brass">remembers ordering.</span>
          </h2>
          <p className="mt-8 text-slate-soft text-base sm:text-lg leading-relaxed font-light">
            Three things travelers describe to their friends long after the
            island has faded from their tan.
          </p>
        </motion.div>

        {/* Cards - large, refined */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {highlights.map((item, i) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className="card-luxe group"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                {/* Tag overlay */}
                <span className="absolute top-5 left-5 text-[10px] tracking-[0.25em] uppercase text-ivory bg-teal-deep/80 backdrop-blur-md px-3 py-1.5 font-semibold">
                  {item.tag}
                </span>
              </div>

              <div className="px-1">
                <div className="flex items-baseline justify-between gap-3 mb-3">
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl text-teal-deep font-light tracking-tight">
                    {item.name}
                  </h3>
                  <span className="font-[family-name:var(--font-heading)] italic text-xl text-brass">
                    {item.price}
                  </span>
                </div>
                <div className="brass-rule mb-4" style={{ width: "32px" }} />
                <p className="text-slate-soft text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <a
            href="/menu"
            className="inline-block text-[11px] tracking-[0.25em] uppercase font-semibold text-ivory bg-teal px-10 py-4 hover:bg-brass transition-all duration-500"
          >
            View The Full Menu
          </a>
        </motion.div>
      </div>
    </section>
  );
}
