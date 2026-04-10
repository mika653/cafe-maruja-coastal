import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-teal-deep text-ivory">
        <div className="max-w-[1500px] mx-auto px-6 sm:px-10 py-20 sm:py-28">
          {/* Top: brand statement */}
          <div className="text-center mb-16 pb-16 border-b border-ivory/15">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="brass-rule" />
              <p className="eyebrow-luxe">Cafe Maruja</p>
              <span className="brass-rule" />
            </div>
            <p className="font-[family-name:var(--font-heading)] text-4xl sm:text-6xl lg:text-7xl italic text-ivory leading-tight font-light max-w-3xl mx-auto">
              Stay until the
              <br />
              fairy lights come on.
            </p>
            <a
              href="https://wa.me/639XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 text-[11px] tracking-[0.25em] uppercase font-semibold text-teal-deep bg-ivory px-10 py-4 hover:bg-brass hover:text-ivory transition-all duration-500"
            >
              Reserve a Table
            </a>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-[11px]">
            <div>
              <h4 className="text-brass tracking-[0.25em] uppercase mb-5 text-[10px] font-semibold">
                Explore
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "The Story", href: "/#about" },
                  { label: "Menu", href: "/menu" },
                  { label: "Gallery", href: "/#gallery" },
                  { label: "Visit", href: "/#find-us" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-ivory/60 hover:text-brass-light transition-colors link-luxe"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-brass tracking-[0.25em] uppercase mb-5 text-[10px] font-semibold">
                Hours
              </h4>
              <ul className="space-y-2 text-ivory/60 font-[family-name:var(--font-heading)] italic text-sm">
                <li>Mon – Thu &middot; 8 AM – 10 PM</li>
                <li>Fri – Sat &middot; 8 AM – 12 AM</li>
                <li>Sunday &middot; 8 AM – 10 PM</li>
              </ul>
            </div>

            <div>
              <h4 className="text-brass tracking-[0.25em] uppercase mb-5 text-[10px] font-semibold">
                Visit
              </h4>
              <p className="text-ivory/60 leading-relaxed">
                Casa Pilar Beach Resort
                <br />
                Station 3, Boracay
                <br />
                Malay, Aklan
              </p>
            </div>

            <div>
              <h4 className="text-brass tracking-[0.25em] uppercase mb-5 text-[10px] font-semibold">
                Elsewhere
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.instagram.com/cafemaruja/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ivory/60 hover:text-brass-light transition-colors link-luxe"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/cafemaruja/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ivory/60 hover:text-brass-light transition-colors link-luxe"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/639XXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ivory/60 hover:text-brass-light transition-colors link-luxe"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer line */}
          <div className="mt-16 pt-8 border-t border-ivory/15 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-[10px] tracking-[0.25em] uppercase text-ivory/40">
              © {new Date().getFullYear()} Cafe Maruja, Boracay
            </p>
            <p className="text-[10px] tracking-[0.25em] uppercase text-ivory/30">
              A Sanctuary by the Sea
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/639XXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}
