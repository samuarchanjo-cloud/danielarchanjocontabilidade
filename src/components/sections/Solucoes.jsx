import React from 'react';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right.js';
import BarChart3 from 'lucide-react/dist/esm/icons/bar-chart-3.js';
import Handshake from 'lucide-react/dist/esm/icons/handshake.js';
import Headset from 'lucide-react/dist/esm/icons/headset.js';
import RefreshCw from 'lucide-react/dist/esm/icons/refresh-cw.js';
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check.js';
import TrendingUp from 'lucide-react/dist/esm/icons/trending-up.js';
import { motion } from 'framer-motion';
import { siteData } from '../../data/siteData.js';

const icons = {
  ShieldCheck,
  RefreshCw,
  TrendingUp,
  Handshake,
  BarChart3,
  Headset,
};

function Solucoes() {
  const { labels, solutions } = siteData;

  return (
    <section id={solutions.id} className="section-pad bg-bg-alt">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl"
        >
          <p className="eyebrow">{solutions.eyebrow}</p>
          <h2 className="heading-md mt-4">{solutions.title}</h2>
          <p className="mt-4 text-base leading-7 text-text-secondary">
            {solutions.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {solutions.items.map((item) => {
            const Icon = icons[item.icon];

            return (
              <motion.article
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -6 }}
                className="group flex min-h-[248px] flex-col rounded-2xl border border-white/80 bg-white p-6 shadow-soft transition hover:border-gold/40"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold transition group-hover:scale-105">
                  <Icon size={25} strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-extrabold text-navy">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-text-secondary">
                  {item.description}
                </p>
                <a
                  href="#cta-final"
                  className="focus-ring mt-6 inline-flex w-fit items-center gap-2 rounded-md text-sm font-extrabold text-gold transition hover:text-navy"
                >
                  {labels.learnMore}
                  <ArrowRight size={17} />
                </a>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Solucoes;
