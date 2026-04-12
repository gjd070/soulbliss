"use client";

import { useMemo, useSyncExternalStore } from "react";

interface Testimonial {
  quote: string;
  author: string;
  location: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "We travelled from London expecting a nice Airbnb. What we got was dolphins from the bedroom window, a perfect beach five minutes away, and the most relaxed we have felt in years. Soul Bliss is exactly what it says.",
    author: "Emma & Oliver",
    location: "London, United Kingdom",
    rating: 5,
  },
  {
    quote:
      "As a photographer I have shot coastlines across the world. The light at Shoal Bay at dawn, with the dolphins cresting the glassy water and Tomaree behind — I have never deleted so few photos in my life. Extraordinary place.",
    author: "Takeshi Mori",
    location: "Tokyo, Japan",
    rating: 5,
  },
  {
    quote:
      "Our family came from Vancouver for two weeks in NSW. The kids swam every morning, we watched dolphins every evening from the deck, and we did the Tomaree Head walk three times. The house is perfect for a family of six.",
    author: "The Andersen Family",
    location: "Vancouver, Canada",
    rating: 5,
  },
  {
    quote:
      "I came to Australia solo looking for somewhere peaceful to write. The sound of the ocean, the morning coffee on the upper deck watching the bay wake up — I wrote more in one week here than in months at home. Already planning my return.",
    author: "Ingrid Svensson",
    location: "Stockholm, Sweden",
    rating: 5,
  },
  {
    quote:
      "We drove up from Sydney for a long weekend and could not bring ourselves to leave on time. The beach is incredibly calm, the dolphins showed up on cue both mornings, and the house is beautifully set up. Five stars is not enough.",
    author: "Sarah & James",
    location: "Sydney, NSW",
    rating: 5,
  },
  {
    quote:
      "Meine Frau und ich haben die Welt bereist — forgive my excitement, I must write in English! The walk up Tomaree Head, the dolphins in the bay, the sunsets from the deck. We are already planning our return to Shoal Bay.",
    author: "Hans & Petra Müller",
    location: "Munich, Germany",
    rating: 5,
  },
  {
    quote:
      "Our kids still talk about the dolphins they saw from the beach on the first morning. The house is spacious and beautifully appointed, the location could not be better, and Port Stephens delivered everything we hoped for.",
    author: "The Rousseau Family",
    location: "Lyon, France",
    rating: 5,
  },
  {
    quote:
      "As a Kiwi I thought I knew what a beach getaway looked like. I was wrong. The water at Shoal Bay is impossibly clear, the dolphins are genuinely wild and close, and the house has a warmth that Airbnb photos cannot capture.",
    author: "Aroha Mitchell",
    location: "Wellington, New Zealand",
    rating: 5,
  },
  {
    quote:
      "We escaped Singapore for a week of sea air and open skies. The bay was calm enough for our kids every single day, the whale watching cruise out of Nelson Bay was incredible, and Soul Bliss felt like a proper home.",
    author: "Wei Ling & David Tan",
    location: "Singapore",
    rating: 5,
  },
  {
    quote:
      "I travel constantly for work and almost nothing surprises me. Soul Bliss surprised me. Waking up to the sound of the ocean, watching dolphins before breakfast, the Tomaree walk at golden hour. I extended my stay by three days.",
    author: "Daniel Park",
    location: "Seoul, South Korea",
    rating: 5,
  },
  {
    quote:
      "We expected a nice house near a beach. What we found was a house that made every morning feel special — dolphins in the bay, the national park at our back, and a deck that was impossible to leave. Absolutely exceptional.",
    author: "The De Vries Family",
    location: "Amsterdam, Netherlands",
    rating: 5,
  },
  {
    quote:
      "My partner and I needed to disconnect from city life. From the moment we arrived and heard the ocean, we knew this was different. Swimming at dawn, hiking Tomaree at sunset — Soul Bliss gave us back something we had forgotten.",
    author: "Sophie & Charlotte",
    location: "Manchester, United Kingdom",
    rating: 5,
  },
  {
    quote:
      "I booked this during my gap year and it became the highlight of my entire Australia trip. The beach is stunning, I saw my first wild dolphins, and the house is so comfortable and light-filled. I did not want to go home.",
    author: "Yuki Tanaka",
    location: "Osaka, Japan",
    rating: 5,
  },
  {
    quote:
      "My husband thought I was crazy for picking a house so far from Sydney. By day two he was on the deck at sunrise with his coffee watching dolphins and refusing to look at his phone. Shoal Bay completely won him over.",
    author: "Maria & Tom Henderson",
    location: "Melbourne, Victoria",
    rating: 5,
  },
  {
    quote:
      "Vi kom fra København og fandt paradis — sorry, I get emotional! The dolphins, the crystal water, the view from Tomaree Head at sunset. We came for a holiday and left with a favourite place in the world.",
    author: "Lars & Mette Jensen",
    location: "Copenhagen, Denmark",
    rating: 5,
  },
];

function shuffleAndPick(arr: Testimonial[], count: number): Testimonial[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4 text-earth"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const emptySubscribe = () => () => {};

export default function TestimonialCarousel() {
  const hydrated = useSyncExternalStore(
    emptySubscribe,
    () => true,   // client snapshot
    () => false   // server snapshot
  );

  const selected = useMemo(
    () => (hydrated ? shuffleAndPick(testimonials, 4) : []),
    [hydrated]
  );

  // Render nothing on server / before hydration to avoid mismatch
  if (selected.length === 0) {
    return (
      <section className="bg-deep-sage py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-bold text-cream sm:text-4xl">
            What Our Guests Say
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 min-h-[420px]" />
        </div>
      </section>
    );
  }

  return (
    <section className="bg-deep-sage py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-bold text-cream sm:text-4xl">
          What Our Guests Say
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {selected.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl border border-cream/10 bg-cream/5 p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <svg
                    className="h-8 w-8 text-earth/60"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
                  </svg>
                  <StarRating rating={testimonial.rating} />
                </div>
                <p className="text-base leading-relaxed text-cream/90 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
              <div className="mt-6 border-t border-cream/10 pt-4">
                <p className="font-heading text-lg font-semibold text-earth">
                  {testimonial.author}
                </p>
                <p className="text-sm text-cream/60">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
