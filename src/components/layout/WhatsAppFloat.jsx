import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../../data/siteData.js';
import WhatsAppIcon from '../WhatsAppIcon.jsx';

function WhatsAppFloat() {
  const { labels, links } = siteData;

  return (
    <motion.a
      href={links.whatsappFinal}
      target="_blank"
      rel="noreferrer"
      aria-label={labels.talkSpecialist}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="focus-ring pulse-whatsapp fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/80 bg-white shadow-gold transition hover:bg-bg-alt md:bottom-7 md:right-7 md:h-16 md:w-16"
    >
      <WhatsAppIcon className="h-8 w-8 md:h-9 md:w-9" />
    </motion.a>
  );
}

export default WhatsAppFloat;
