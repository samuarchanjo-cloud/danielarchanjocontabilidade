import React from 'react';
import danielImage from '../../assets/images/daniel-sentado.jpg';
import { motion } from 'framer-motion';
import { siteData } from '../../data/siteData.js';
import { useCountUp } from '../../hooks/useCountUp.js';
import { useInView } from '../../hooks/useInView.js';

function Metric({ metric, active }) {
  const value = useCountUp(metric.value, active);

  return (
    <div className="rounded-2xl border border-navy/8 bg-white p-5 shadow-sm">
      <div className="font-heading text-3xl font-bold text-navy">
        {value}
        {metric.suffix}
      </div>
      <p className="mt-1 text-sm font-semibold leading-5 text-text-secondary">
        {metric.label}
      </p>
    </div>
  );
}

function SobreDaniel() {
  const { about } = siteData;
  const [metricsRef, active] = useInView({ threshold: 0.22 });

  return (
    <section id={about.id} className="section-pad bg-bg">
      <div className="container-page grid gap-10 md:grid-cols-[0.88fr_1.12fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl bg-bg-alt shadow-soft"
        >
          <img
            src={danielImage}
            alt=""
            className="aspect-[4/5] h-full w-full object-cover object-top"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 className="heading-md mt-4">{about.title}</h2>
          <div className="mt-6 grid gap-4 text-base leading-8 text-text-secondary">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div ref={metricsRef} className="mt-8 grid grid-cols-2 gap-4">
            {about.metrics.map((metric) => (
              <Metric key={metric.label} metric={metric} active={active} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default SobreDaniel;
