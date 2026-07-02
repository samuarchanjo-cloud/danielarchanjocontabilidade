import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../../data/siteData.js';
import { useCountUp } from '../../hooks/useCountUp.js';
import { useInView } from '../../hooks/useInView.js';

function Metric({ metric, active }) {
  const value = useCountUp(metric.value, active);

  return (
    <div className="rounded-2xl border border-white/24 bg-white/86 p-5 shadow-soft backdrop-blur-md">
      <div className="font-heading text-3xl font-bold text-navy">
        {value}
        {metric.suffix}
      </div>
      <div className="mt-2 text-sm font-semibold leading-5 text-text-secondary">
        {metric.label}
      </div>
    </div>
  );
}

function GestaoInteligente() {
  const { intelligence } = siteData;
  const [metricsRef, active] = useInView({ threshold: 0.25 });

  return (
    <section id={intelligence.id} className="relative min-h-[760px] overflow-hidden bg-bg-alt py-24">
      <div className="container-page relative z-10 flex min-h-[580px] items-center">
        <div className="grid w-full gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <p className="eyebrow">{intelligence.eyebrow}</p>
            <h2 className="heading-lg mt-4">
              {intelligence.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-text-secondary">
              {intelligence.subtitle}
            </p>
          </motion.div>

          <motion.div
            ref={metricsRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {intelligence.metrics.map((metric) => (
              <motion.div
                key={metric.label}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Metric metric={metric} active={active} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default GestaoInteligente;
