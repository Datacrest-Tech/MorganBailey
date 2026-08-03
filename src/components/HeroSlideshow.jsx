import { useEffect, useState } from "react";

export default function HeroSlideshow({
  images,
  intervalMs = 6000,
  children,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    images.forEach((src) => {
      const image = new Image();
      image.src = src;
    });
  }, [images]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    function syncMotionPreference() {
      setReduceMotion(media.matches);
    }

    syncMotionPreference();
    media.addEventListener("change", syncMotionPreference);

    return () => media.removeEventListener("change", syncMotionPreference);
  }, []);

  useEffect(() => {
    if (reduceMotion || images.length <= 1) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % images.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [images.length, intervalMs, reduceMotion]);

  const visibleImages = reduceMotion ? images.slice(0, 1) : images;
  const currentIndex = reduceMotion ? 0 : activeIndex;

  return (
    <section
      className="hero-slideshow relative isolate overflow-hidden text-white"
      style={{ "--hero-slide-duration": `${intervalMs}ms` }}
    >
      <div className="absolute inset-0 -z-20">
        {visibleImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            className={`hero-slideshow__image ${
              index === currentIndex ? "hero-slideshow__image--active" : ""
            }`}
          />
        ))}
      </div>

      <div className="hero-slideshow__scrim absolute inset-0 -z-10" />

      <div className="container-xl relative flex min-h-[38rem] items-center pt-32 pb-24 md:min-h-[44rem] lg:min-h-[88vh]">
        {children}
      </div>

      <div className="container-xl pointer-events-none absolute inset-x-0 bottom-8 z-10 flex items-end justify-between gap-6 md:bottom-12">
        {!reduceMotion && images.length > 1 ? (
          <div
            className="pointer-events-auto flex items-center gap-2"
            aria-label="Hero slideshow controls"
          >
            {images.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`hero-slideshow__dot ${
                  index === activeIndex ? "hero-slideshow__dot--active" : ""
                }`}
                aria-label={`Show slide ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>
        ) : (
          <span aria-hidden="true" />
        )}

        <div className="flex items-center gap-4 text-[0.65rem] font-semibold tracking-[0.42em] text-white/45">
          <span>SCROLL</span>
          <span className="h-10 w-px bg-white/35" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
