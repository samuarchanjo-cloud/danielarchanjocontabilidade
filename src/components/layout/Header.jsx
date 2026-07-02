import React, { useState } from 'react';
import Menu from 'lucide-react/dist/esm/icons/menu.js';
import MessageCircle from 'lucide-react/dist/esm/icons/message-circle.js';
import X from 'lucide-react/dist/esm/icons/x.js';
import { motion } from 'framer-motion';
import { siteData } from '../../data/siteData.js';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { brand, labels, links, navigation } = siteData;

  const resolveHref = (href) => (href === 'whatsapp' ? links.whatsappFinal : href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/45 bg-bg/88 backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between">
        <a href="#hero" className="focus-ring flex items-center gap-3 rounded-lg">
          <span className="font-heading text-4xl font-bold leading-none text-gold">
            {brand.initials}
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-extrabold uppercase tracking-[0.2em] text-navy">
              {brand.name}
            </span>
            <span className="block text-xs font-semibold text-gold">
              {brand.subtitle}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={resolveHref(item.href)}
              className="focus-ring rounded-md text-sm font-semibold text-navy-light transition hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <motion.a
          href={links.whatsappFinal}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="focus-ring gold-glow hidden items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white shadow-gold transition lg:flex"
        >
          <MessageCircle size={18} strokeWidth={2} />
          {labels.talkSpecialist}
        </motion.a>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/10 bg-white text-navy shadow-sm lg:hidden"
          aria-label={isOpen ? labels.closeMenu : labels.openMenu}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-navy/10 bg-bg px-4 py-4 shadow-soft lg:hidden"
        >
          <div className="mx-auto grid max-w-sm gap-2">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={resolveHref(item.href)}
                onClick={() => setIsOpen(false)}
                className="focus-ring rounded-xl px-4 py-3 text-sm font-bold text-navy transition hover:bg-white hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.nav>
      )}
    </header>
  );
}

export default Header;
