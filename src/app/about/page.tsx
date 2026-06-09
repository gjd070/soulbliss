import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Soul Bliss — a 4-bedroom coastal holiday home at 21 Victor Parade, Shoal Bay NSW. Steps from the beach, surrounded by Tomaree National Park.",
};

const values = [
  {
    title: "Steps to the Sand",
    description:
      "A 5-minute walk takes you to the calm, patrolled waters of Shoal Bay beach — perfect for swimming, paddleboarding, and watching the dolphins play.",
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
  },
  {
    title: "Coastal Wildlife",
    description:
      "Port Stephens is home to over 90 resident bottlenose dolphins, seasonal humpback whale migrations, and abundant birdlife in Tomaree National Park.",
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
          d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
        />
      </svg>
    ),
  },
  {
    title: "Comfort & Space",
    description:
      "Four bedrooms across two storeys, fully equipped kitchen, comfortable living areas, and outdoor entertaining — everything you need for the perfect coastal getaway.",
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
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
  {
    title: "Entirely Yours",
    description:
      "No shared spaces, no other guests. The entire home is exclusively yours — your private retreat for the whole family.",
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
          d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
        />
      </svg>
    ),
  },
];

const stats = [
  { value: "4", label: "Bedrooms" },
  { value: "8", label: "Guests" },
  { value: "5 min", label: "To Beach" },
  { value: "4.9", label: "Guest Rating" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Split */}
      <section className="bg-warm-white pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-[400px] overflow-hidden rounded-2xl lg:h-[550px]">
              <Image
                src="/images/garden.jpg"
                alt="Soul Bliss holiday home exterior with coastal garden and views"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Text */}
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-deep-sage">
                21 Victor Parade, Shoal Bay
              </p>
              <h1 className="mt-3 font-heading text-4xl font-bold text-bark sm:text-5xl">
                Our Story
              </h1>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>
                  Soul Bliss was born from a love of the coast — the particular
                  magic of Port Stephens at sunrise, when the bay is glassy and
                  the dolphins are already at work. This double-storey home on
                  Victor Parade has been thoughtfully set up as a place where
                  families and friends can come and truly unwind.
                </p>
                <p>
                  The name says it all. There&apos;s something about the rhythm of
                  Shoal Bay — the morning swims, the afternoon hikes up Tomaree
                  Head, the sundowners with the headland turning gold — that
                  quietly restores the soul.
                </p>
                <p>
                  We&apos;ve equipped the house with everything you need and nothing
                  you don&apos;t. The beach is a short stroll, the national park is
                  at your back, and Nelson Bay&apos;s restaurants and marina are
                  just ten minutes away.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-bark py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-3xl font-bold text-cream sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-cream/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-deep-sage">
              What Makes Us Special
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-bark sm:text-4xl">
              The Soul Bliss Experience
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl bg-warm-white p-8 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sage/20 text-deep-sage">
                  {value.icon}
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-bark">
                  {value.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
