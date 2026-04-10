"use client";

import { motion } from "framer-motion";

const hours = [
  { day: "Monday — Thursday", time: "8 AM — 10 PM" },
  { day: "Friday — Saturday", time: "8 AM — 12 AM" },
  { day: "Sunday", time: "8 AM — 10 PM" },
];

export default function FindUs() {
  return (
    <section
      id="find-us"
      className="bg-ivory py-24 sm:py-36 px-6 sm:px-10"
    >
      <div className="max-w-[1500px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="brass-rule" />
            <p className="eyebrow-luxe">Visit Us</p>
            <span className="brass-rule" />
          </div>
          <h2 className="display-cinema text-4xl sm:text-6xl lg:text-7xl text-teal-deep">
            We are easy
            <br />
            <span className="italic text-brass">to find.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="space-y-12 lg:pr-8"
          >
            {/* Address */}
            <div>
              <p className="eyebrow-luxe mb-4">Location</p>
              <p className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl text-teal-deep leading-snug font-light italic mb-6">
                Casa Pilar Beach Resort
                <br />
                Station 3, Boracay Island
                <br />
                Malay, Aklan, Philippines
              </p>
              <a
                href="https://maps.google.com/?q=Cafe+Maruja+Casa+Pilar+Beach+Resort+Boracay"
                target="_blank"
                rel="noopener noreferrer"
                className="link-luxe inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase font-semibold text-brass"
              >
                Open in Google Maps &rarr;
              </a>
            </div>

            <div className="brass-rule" style={{ width: "100%", height: "1px" }} />

            {/* Hours */}
            <div>
              <p className="eyebrow-luxe mb-5">Opening Hours</p>
              <div className="space-y-1">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between items-baseline gap-4 py-3 border-b border-sand"
                  >
                    <span className="text-slate-soft text-sm font-light tracking-wide">
                      {h.day}
                    </span>
                    <span className="font-[family-name:var(--font-heading)] italic text-lg text-teal-deep">
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reservations */}
            <div>
              <p className="eyebrow-luxe mb-3">Reservations</p>
              <p className="text-slate-soft text-sm leading-relaxed font-light mb-6 max-w-sm">
                Walk-ins always welcome. For larger groups or sundown
                reservations, send us a message and we will hold your table.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/639260844793"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] tracking-[0.25em] uppercase font-semibold text-ivory bg-teal px-7 py-4 hover:bg-brass transition-all duration-500 text-center"
                >
                  WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/boracay.cafemaruja/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] tracking-[0.25em] uppercase font-semibold text-teal-deep border border-teal px-7 py-4 hover:bg-teal hover:text-ivory transition-all duration-500 text-center"
                >
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] lg:aspect-square overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.123!2d121.9234!3d11.9654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCafe%20Maruja%20Boracay!5e0!3m2!1sen!2sph!4v1234567890"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "saturate(0.6) contrast(1.1) hue-rotate(-10deg)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cafe Maruja location"
              />
              {/* Brass corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-brass pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-brass pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
