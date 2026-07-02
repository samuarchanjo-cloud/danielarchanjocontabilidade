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
    <section id={hero.id} className="relative min-h-screen overflow-hidden bg-bg pt-20">
      <img
        src={heroImage}
        alt=""
        className="absolute inset-0 h-full w-full origin-right scale-[0.88] object-cover object-[74%_center] md:origin-center md:scale-100 md:object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/78 to-bg/6 md:from-bg md:via-bg/62 md:to-transparent" />

      <div className="container-page relative z-10 flex min-h-[calc(100vh-80px)] items-center py-12">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="heading-xl mt-5">
            {hero.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-text-secondary">
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

          <div ref={metricsRef} className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
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
