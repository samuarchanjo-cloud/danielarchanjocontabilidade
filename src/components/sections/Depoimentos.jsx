import React from 'react';
import Quote from 'lucide-react/dist/esm/icons/quote.js';
import Star from 'lucide-react/dist/esm/icons/star.js';
import { siteData } from '../../data/siteData.js';

function Depoimentos() {
  const { testimonials } = siteData;

  return (
    <section id={testimonials.id} className="bg-white py-28 md:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{testimonials.eyebrow}</p>
          <h2 className="heading-md mt-4">{testimonials.title}</h2>
          <p className="mt-4 text-base leading-7 text-text-secondary">
            {testimonials.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.items.map((item) => (
            <article
              key={item.name}
              className="flex min-h-[340px] flex-col rounded-2xl border border-navy/8 bg-bg p-7 shadow-soft"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/12 text-gold">
                  <Quote size={25} strokeWidth={1.8} />
                </div>
                <div className="flex gap-1 text-gold" aria-label={item.ratingLabel}>
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={17}
                      fill="currentColor"
                      strokeWidth={1.8}
                    />
                  ))}
                </div>
              </div>

              <p className="mt-7 flex-1 text-sm leading-7 text-text-secondary">
                {item.text}
              </p>

              <div className="mt-7 border-t border-navy/8 pt-5">
                <h3 className="text-lg font-extrabold text-navy">{item.name}</h3>
                <p className="mt-1 text-sm font-semibold text-gold">{item.context}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Depoimentos;
