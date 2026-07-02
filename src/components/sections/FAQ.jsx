import React, { useState } from 'react';
import Minus from 'lucide-react/dist/esm/icons/minus.js';
import Plus from 'lucide-react/dist/esm/icons/plus.js';
import { AnimatePresence, motion } from 'framer-motion';
import { siteData } from '../../data/siteData.js';

function FAQ() {
  const { faq, labels } = siteData;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id={faq.id} className="section-pad bg-bg-alt">
      <div className="container-page grid gap-10 lg:grid-cols-[0.42fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.24 }}
          transition={{ duration: 0.55 }}
        >
          <p className="eyebrow">{faq.eyebrow}</p>
          <h2 className="heading-md mt-4">{faq.title}</h2>
        </motion.div>

        <div className="grid gap-4">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.article
                key={item.question}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="rounded-2xl border border-white/80 bg-white shadow-sm"
              >
                <button
                  type="button"
                  aria-label={isOpen ? labels.collapseQuestion : labels.expandQuestion}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="focus-ring flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-5 text-left text-base font-extrabold text-navy"
                >
                  <span>{item.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold"
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-7 text-text-secondary">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
