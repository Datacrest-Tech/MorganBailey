import { useEffect, useMemo, useState } from "react";

export default function HeroCorporate({ children, image }) {
  return (
    <section className="relative bg-white text-ink pt-24 pb-16 md:pt-28 md:pb-20">
      <div className="container-xl mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[45%_55%] items-start min-h-[calc(100vh-6rem)]">
          <div className="space-y-8">
            <div className="space-y-6 animate-rise">{children}</div>
          </div>

          <div className="flex items-start justify-center md:-mt-10 lg:-mt-16">
            <div className="motion-safe:animate-float w-full max-w-[980px] overflow-hidden rounded-[2rem] bg-white ring-1 ring-slate-100 shadow-[0_32px_80px_-40px_rgba(16,21,28,0.16)]">
              {image && (
                <img
                  src={image}
                  alt="Morgan Bailey Freight Services"
                  className="motion-safe:animate-breathe origin-center h-64 sm:h-[380px] w-full object-contain md:h-[480px] lg:h-[560px]"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
