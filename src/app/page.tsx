import Image from "next/image";
import Link from "next/link";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import WeatherForecast from "@/components/WeatherForecast";

const features = [
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
        />
      </svg>
    ),
    title: "Steps to the Beach",
    description: "A 5-minute stroll to the white sands of Shoal Bay",
  },
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022z"
        />
      </svg>
    ),
    title: "Dolphins at Dawn",
    description: "Port Stephens is home to over 90 resident bottlenose dolphins",
  },
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
    ),
    title: "Ocean & Mountains",
    description: "Tomaree National Park rises behind the bay — hike, swim, repeat",
  },
];

const localAreaLinks = [
  {
    name: "Shoal Bay Beach",
    description: "Calm, patrolled swimming beach with crystal-clear water right at your doorstep",
    distance: "5 min walk",
  },
  {
    name: "Tomaree Head Summit",
    description: "Iconic 1-hour hike with panoramic views over Port Stephens and the Pacific",
    distance: "10 min",
  },
  {
    name: "Nelson Bay Marina",
    description: "Waterfront dining, dolphin and whale watching cruises, fresh seafood markets",
    distance: "10 min",
  },
  {
    name: "Stockton Sand Dunes",
    description: "Australia's largest coastal sand dunes — quad biking, sandboarding & sunset tours",
    distance: "25 min",
  },
  {
    name: "Zenith & Box Beach",
    description: "Secluded surf beaches tucked inside Tomaree National Park",
    distance: "15 min",
  },
  {
    name: "Anna Bay & One Mile Beach",
    description: "Surf beach, cafés, and the gateway to the Worimi Conservation Lands",
    distance: "20 min",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dwqcks4ar/image/upload/c_fill,w_1920,h_1080,q_auto,f_auto/t4bfe7skdv01xrumbcol.jpg"
            alt="Soul Bliss coastal holiday home at Shoal Bay, Port Stephens NSW"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/50" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-warm-tan">
            Shoal Bay, NSW &middot; Port Stephens
          </p>
          <h1 className="mt-6 font-heading text-4xl font-bold leading-tight text-cream sm:text-5xl md:text-6xl lg:text-7xl" style={{textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>
            Where the ocean meets the mountains
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/80 sm:text-xl">
            A 4-bedroom coastal retreat just steps from Shoal Bay beach.
            Dolphins at dawn, sunsets over the headland, and nothing but the sound of the sea.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://www.airbnb.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-deep-sage px-8 py-3.5 text-base font-bold text-cream transition-all hover:bg-bark hover:shadow-lg"
            >
              Book a Stay
            </a>
            <Link
              href="/gallery"
              className="rounded-full border-2 border-cream/40 px-8 py-3.5 text-base font-medium text-cream transition-all hover:border-cream hover:bg-cream/10"
            >
              View Gallery
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
          <svg
            className="h-6 w-6 text-cream/60"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </section>

      {/* Weather Forecast Strip */}
      <WeatherForecast />

      {/* Features Strip */}
      <section className="bg-warm-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sage/20 text-deep-sage">
                  {feature.icon}
                </div>
                <h3 className="mt-4 font-heading text-xl font-bold text-bark">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation Card */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-deep-sage">
              Your Home Away From Home
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-bark sm:text-4xl">
              The Beach House
            </h2>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl bg-warm-white shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative min-h-[300px] lg:min-h-[450px]">
                <Image
                  src="https://res.cloudinary.com/dwqcks4ar/image/upload/c_fill,w_1920,h_1080,q_auto,f_auto/udk6cctiwmgfuvjxlfid.jpg"
                  alt="Soul Bliss beach house interior — light-filled living space with coastal views"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <h3 className="font-heading text-2xl font-bold text-bark sm:text-3xl">
                  A whole beach house, entirely yours
                </h3>
                <p className="mt-4 leading-relaxed text-muted">
                  Soul Bliss is a beautifully appointed double-storey home just a
                  5-minute walk from the calm waters of Shoal Bay beach. With four
                  bedrooms, generous living spaces, and Tomaree National Park on
                  your doorstep, it&apos;s the perfect escape for families and groups.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {[
                    { value: "8", label: "Sleeps" },
                    { value: "4", label: "Bedrooms" },
                    { value: "2", label: "Bathrooms" },
                    { value: "5 min", label: "To Beach" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl bg-cream p-4 text-center"
                    >
                      <p className="font-heading text-xl font-bold text-deep-sage">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs text-muted">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                    href="https://www.airbnb.com.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full bg-deep-sage px-8 py-3 text-sm font-bold text-cream transition-all hover:bg-bark hover:shadow-md"
                  >
                    Check Availability
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Local Area */}
      <section className="bg-warm-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-deep-sage">
              Explore the Region
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-bark sm:text-4xl">
              What&apos;s Nearby
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              Port Stephens has something for everyone — from lazy beach days
              and dolphin cruises to epic hikes and world-class sand dunes.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {localAreaLinks.map((area) => (
              <div
                key={area.name}
                className="rounded-xl border border-sage/10 bg-cream p-6 transition-all hover:border-sage/30 hover:shadow-md"
              >
                <span className="inline-block rounded-full bg-sage/20 px-3 py-1 text-xs font-medium text-deep-sage">
                  {area.distance}
                </span>
                <h3 className="mt-3 font-heading text-lg font-bold text-bark">
                  {area.name}
                </h3>
                <p className="mt-2 text-sm text-muted">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-bark py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-cream sm:text-4xl">
            Ready for the Coast?
          </h2>
          <p className="mt-4 text-lg text-cream/80">
            Whether you have questions or you&apos;re ready to book, we&apos;d
            love to hear from you.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:stay@coosandroos.com.au"
              className="rounded-full bg-cream px-8 py-3.5 text-base font-bold text-bark transition-all hover:bg-warm-white hover:shadow-lg"
            >
              Get in Touch
            </a>
            <Link
              href="/contact"
              className="rounded-full border-2 border-cream/40 px-8 py-3.5 text-base font-medium text-cream transition-all hover:border-cream hover:bg-cream/10"
            >
              Contact Details
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
