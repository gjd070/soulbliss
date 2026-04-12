import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bark text-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Logo & tagline */}
          <div>
            <Link href="/" className="inline-block">
              <span className="font-heading text-2xl font-bold text-warm-tan">
                Soul Bliss
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-cream/70">
              A coastal holiday home steps from Shoal Bay beach, Port Stephens NSW.
              Where the ocean meets the mountains.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-warm-tan">
              Explore
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "Our Story" },
                { href: "/gallery", label: "Gallery" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-warm-tan"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Accommodation */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-warm-tan">
              The Beach House
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-cream/70">
              <li>Sleeps 8</li>
              <li>4 bedrooms, 2 bathrooms</li>
              <li>Double-storey with ocean views</li>
              <li>5 min walk to Shoal Bay beach</li>
              <li>Dolphins, whales &amp; National Park</li>
            </ul>
            <div className="mt-6">
              <a
                href="https://www.airbnb.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-deep-sage px-6 py-2.5 text-sm font-bold text-cream transition-all hover:bg-sage hover:text-bark"
              >
                Book a Stay
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-cream/10 pt-8 text-center">
          <p className="text-xs text-cream/50">
            &copy; {new Date().getFullYear()} Soul Bliss. All rights reserved.
            &nbsp;|&nbsp; 21 Victor Parade, Shoal Bay NSW 2315
          </p>
        </div>
      </div>
    </footer>
  );
}
