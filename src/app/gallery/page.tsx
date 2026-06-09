import type { Metadata } from "next";
import { getGalleryImages } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse photos of Soul Bliss — a 4-bedroom coastal holiday home steps from Shoal Bay beach, Port Stephens NSW.",
};

export default function GalleryPage() {
  const images = getGalleryImages();

  return (
    <>
      {/* Header */}
      <section className="bg-warm-white pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-deep-sage">
            Step Inside
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold text-bark sm:text-5xl">
            The House &amp; the Coast
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            From early morning swims to sundowners on the deck &mdash; here are
            some of our favourite moments at Soul Bliss.
          </p>
        </div>
      </section>

      {/* Gallery Grid — CSS columns masonry */}
      <section className="bg-warm-white pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {images.length === 0 ? (
            <p className="text-center text-muted py-16">Photos coming soon.</p>
          ) : (
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
              {images.map((image) => (
                <a
                  key={image.filename}
                  href={image.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative mb-4 block overflow-hidden rounded-xl break-inside-avoid"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bark/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {image.alt}
                  </p>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
