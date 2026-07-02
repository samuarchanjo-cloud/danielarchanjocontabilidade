import React from 'react';
import Instagram from 'lucide-react/dist/esm/icons/instagram.js';
import Mail from 'lucide-react/dist/esm/icons/mail.js';
import MessageCircle from 'lucide-react/dist/esm/icons/message-circle.js';
import { siteData } from '../../data/siteData.js';

function Footer() {
  const { brand, footer, links, navigation } = siteData;
  const year = new Date().getFullYear();

  const resolveHref = (href) => (href === 'whatsapp' ? links.whatsappFinal : href);

  return (
    <footer className="bg-navy py-12 text-white">
      <div className="container-page grid gap-10 md:grid-cols-[1.1fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="font-heading text-5xl font-bold leading-none text-gold">
              {brand.initials}
            </span>
            <span>
              <span className="block text-sm font-extrabold uppercase tracking-[0.2em]">
                {brand.name}
              </span>
              <span className="block text-sm font-semibold text-gold-light">
                {brand.subtitle}
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/72">
            {brand.slogan}
          </p>
          <p className="mt-8 text-xs text-white/50">
            {year} {brand.name}. {footer.rights}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold-light">
            {footer.navigationTitle}
          </h2>
          <nav className="mt-5 grid gap-3">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={resolveHref(item.href)}
                className="text-sm font-semibold text-white/72 transition hover:text-gold-light"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold-light">
            {footer.contactsTitle}
          </h2>
          <div className="mt-5 grid gap-4 text-sm font-semibold text-white/78">
            <a className="flex items-center gap-3 transition hover:text-gold-light" href={links.whatsapp}>
              <MessageCircle size={18} className="text-gold-light" />
              {footer.phone}
            </a>
            <a className="flex items-center gap-3 transition hover:text-gold-light" href={links.email}>
              <Mail size={18} className="text-gold-light" />
              {footer.email}
            </a>
            <a
              className="flex items-center gap-3 transition hover:text-gold-light"
              href={links.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={18} className="text-gold-light" />
              {footer.instagram}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
