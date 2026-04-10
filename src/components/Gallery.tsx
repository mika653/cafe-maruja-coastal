"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/images/ambiance-1.jpg", caption: "The lounge", aspect: "aspect-[3/4]", span: "md:col-span-5 md:row-span-2" },
  { src: "/images/food-1.jpg", caption: "Plates by hand", aspect: "aspect-[4/3]", span: "md:col-span-7" },
  { src: "/images/drinks-1.jpg", caption: "Sundown cocktails", aspect: "aspect-[4/3]", span: "md:col-span-4" },
  { src: "/images/food-2.jpg", caption: "Brunch, slow", aspect: "aspect-[4/3]", span: "md:col-span-3" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-pearl py-24 sm:py-36 px-6 sm:px-10">
      <div className="max-w-[1500px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="brass-rule" />
            <p className="eyebrow-luxe">In Residence</p>
            <span className="brass-rule" />
          </div>
          <h2 className="display-cinema text-4xl sm:text-6xl lg:text-7xl text-teal-deep">
            A few moments,
            <br />
            <span className="italic text-brass">unfiltered.</span>
          </h2>
        </motion.div>

        {/* Editorial mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 auto-rows-fr">
          {images.map((img, i) => (
            <motion.figure
              key={img.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={img.span}
            >
              <div
                className={`relative ${img.aspect} overflow-hidden group h-full`}
              >
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <figcaption className="absolute bottom-5 left-5 text-[10px] tracking-[0.25em] uppercase text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-700 font-semibold">
                  {img.caption}
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16 font-[family-name:var(--font-heading)] italic text-lg text-slate-soft"
        >
          See more on Instagram &mdash;{" "}
          <a
            href="https://www.instagram.com/cafemaruja/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brass link-luxe"
          >
            @cafemaruja
          </a>
        </motion.p>
      </div>
    </section>
  );
}
