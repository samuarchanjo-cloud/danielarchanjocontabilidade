import React from 'react';
import MessageCircle from 'lucide-react/dist/esm/icons/message-circle.js';
import { motion } from 'framer-motion';
import heroImage from '../../assets/images/hero-daniel.jpg';
import { siteData } from '../../data/siteData.js';
import { useCountUp } from '../../hooks/useCountUp.js';
import { useInView } from '../../hooks/useInView.js';

function Metric({ metric, active }) {
  const value = useCountUp(metric.value, active);

  return (
    <div className="rounded-2xl border border-white/70 bg-white/74 p-4 shadow-sm backdrop-blur-sm">
      <div className="font-heading text-3xl font-bold text-navy">
        {value}
        {metric.suffix}
      </div>
      <div className="mt-1 text-xs font-semibold leading-5 text-text-secondary">
        {metric.label}
      </div>
    </div>
  );
}

function Hero() {
  const { hero, labels, links } = siteData;
  const [metricsRef, active] = useInView({ threshold: 0.25 });

  return (
    <section id={hero.id} className="relative overflow-hidden bg-bg pt-20 md:min-h-screen">
      <img
        src={heroImage}
        alt=""
        className="absolute inset-0 hidden h-full w-full object-cover object-center md:block"
      />
      <div className="hero-mobile-overlay absolute inset-0 hidden md:block" />

      <div className="container-page relative z-10 flex pb-28 pt-10 md:min-h-[calc(100vh-80px)] md:items-center md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="hero-title-mobile heading-xl mt-5">
            {hero.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-text-secondary">
            {hero.subtitle}
          </p>

          <div className="mt-9 grid gap-3 sm:flex">
            <motion.a
              href={links.whatsappHero}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 0.98 }}
              className="focus-ring gold-glow inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-extrabold text-white shadow-gold"
            >
              <MessageCircle size={19} />
              {labels.talkSpecialist}
            </motion.a>
            <motion.a
              href="#solucoes"
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 0.98 }}
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-navy/20 bg-white/72 px-6 py-3 text-sm font-extrabold text-navy shadow-sm backdrop-blur-sm transition hover:border-gold hover:text-gold"
            >
              {labels.knowSolutions}
            </motion.a>
          </div>

          <div className="relative mt-8 overflow-hidden rounded-2xl bg-bg-alt shadow-soft md:hidden">
            <img
              src={heroImage}
              alt=""
              className="h-[clamp(360px,58svh,460px)] w-full object-cover object-[74%_top]"
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-bg/45 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-bg/35 to-transparent" />
          </div>

          <div ref={metricsRef} className="mt-8 grid grid-cols-2 gap-3 md:mt-10 md:grid-cols-4">
            {hero.metrics.map((metric) => (
              <Metric key={metric.label} metric={metric} active={active} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
