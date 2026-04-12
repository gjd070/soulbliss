import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Soul Bliss — coastal holiday home at 21 Victor Parade, Shoal Bay NSW 2315. Email stay@coosandroos.com.au.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-warm-white pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-deep-sage">
            We&apos;d Love to Hear From You
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold text-bark sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Have a question about the property, availability, or what to expect?
            Drop us a line — we&apos;re happy to help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-warm-white pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Email */}
            <div className="rounded-2xl bg-cream p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-deep-sage/10">
                <svg
                  className="h-7 w-7 text-deep-sage"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <h2 className="mt-5 font-heading text-xl font-bold text-bark">
                Email Us
              </h2>
              <p className="mt-2 text-sm text-muted">
                For bookings, questions, or just to say hello.
              </p>
              <a
                href="mailto:stay@coosandroos.com.au"
                className="mt-4 inline-block text-lg font-medium text-deep-sage transition-colors hover:text-bark"
              >
                stay@coosandroos.com.au
              </a>
            </div>

            {/* Address */}
            <div className="rounded-2xl bg-cream p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sage/20">
                <svg
                  className="h-7 w-7 text-deep-sage"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <h2 className="mt-5 font-heading text-xl font-bold text-bark">
                Find Us
              </h2>
              <p className="mt-2 text-sm text-muted">
                On the foreshore at Shoal Bay, Port Stephens.
              </p>
              <address className="mt-4 text-lg font-medium not-italic text-text leading-relaxed">
                21 Victor Parade
                <br />
                Shoal Bay NSW 2315
              </address>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 rounded-2xl bg-deep-sage p-8 text-center md:p-12">
            <h2 className="font-heading text-2xl font-bold text-cream sm:text-3xl">
              Ready to Book?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-cream/80">
              Soul Bliss is available for booking through Airbnb. Check
              availability, read reviews, and secure your dates.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="https://www.airbnb.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-cream px-8 py-3.5 text-base font-bold text-bark transition-all hover:bg-warm-white hover:shadow-lg"
              >
                Book on Airbnb
              </Link>
              <a
                href="mailto:stay@coosandroos.com.au"
                className="rounded-full border-2 border-cream/40 px-8 py-3.5 text-base font-medium text-cream transition-all hover:border-cream hover:bg-cream/10"
              >
                Email Us Instead
              </a>
            </div>
          </div>

          {/* Directions note */}
          <div className="mt-12 text-center">
            <h3 className="font-heading text-xl font-bold text-bark">
              Getting Here
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted">
              Soul Bliss is approximately 2.5 hours from Sydney via the Pacific
              Motorway and Raymond Terrace. Shoal Bay sits at the tip of Port
              Stephens — follow the signs through Nelson Bay and you&apos;ll find
              Victor Parade right on the water. Newcastle Airport is just 45
              minutes away for fly-in guests.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
