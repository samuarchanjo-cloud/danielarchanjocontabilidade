import React from 'react';
import MessageCircle from 'lucide-react/dist/esm/icons/message-circle.js';
import { motion } from 'framer-motion';
import { siteData } from '../../data/siteData.js';

function CTAFinal() {
  const { finalCta, labels, links } = siteData;

  return (
    <section id={finalCta.id} className="relative overflow-hidden bg-bg-alt py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.58 }}
        className="container-page relative z-10 max-w-3xl text-center"
      >
        <h2 className="heading-lg">{finalCta.title}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
          {finalCta.text}
        </p>
        <motion.a
          href={links.whatsappFinal}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.025 }}
          whileTap={{ scale: 0.98 }}
          className="focus-ring gold-glow mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-extrabold text-white shadow-gold"
        >
          <MessageCircle size={19} />
          {labels.talkSpecialist}
        </motion.a>
      </motion.div>
    </section>
  );
}

export default CTAFinal;
