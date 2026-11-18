import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Clock,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  FileText,
  MessageCircle,
} from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import {
  PRIMARY_NAV_ITEMS,
  FOOTER_NAV_COMPANY,
  FOOTER_NAV_SOLUTIONS,
} from '../config/navigation';
import { useQuote } from '../context/QuoteContext';
import { QuoteDrawer } from '../components/QuoteDrawer';
import { WhatsAppFloatingButton } from '../components/WhatsAppFloatingButton';
import { buildWhatsAppUrl } from '../utils/quote';

export function MainLayout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalUnits, openDrawer } = useQuote();

  const whatsappDirectUrl = buildWhatsAppUrl(
    COMPANY_CONFIG.contact.whatsappNumber,
    'Bonjour Higher Glory Technologies, je souhaite contacter votre équipe commerciale.'
  );

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#242424]">
      {/* Bandeau supérieur institutionnel (#151635) */}
      <div className="hidden md:block bg-[#151635] text-white text-xs border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2 text-white/90 whitespace-nowrap">
              <Clock className="w-3.5 h-3.5 text-[#D61523]" aria-hidden="true" />
              {COMPANY_CONFIG.contact.hours}
            </span>
            <span className="inline-flex items-center gap-2 text-white/90 whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-[#D61523]" aria-hidden="true" />
              {COMPANY_CONFIG.contact.city}, {COMPANY_CONFIG.contact.country}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${COMPANY_CONFIG.contact.email}`}
              className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5 text-[#D61523]" aria-hidden="true" />
              {COMPANY_CONFIG.contact.email}
            </a>
            <a
              href={`tel:${COMPANY_CONFIG.contact.phones[0].replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors tabular-nums whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#D61523]" aria-hidden="true" />
              {COMPANY_CONFIG.contact.phones.join(' / ')}
            </a>
          </div>
        </div>
      </div>

      {/* Navigation principale : contrat 3 zones (Logo original | Liens concis | 1 CTA Devis) */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 md:h-20 flex items-center justify-between gap-2 sm:gap-6 lg:gap-8">
          {/* Zone 1 : Logo original sans déformation ni badge parasite */}
          <Link
            to="/"
            className="shrink-0 flex items-center focus-visible:outline-2 focus-visible:outline-[#3366FF] rounded-sm"
            aria-label="Higher Glory Technologies — Accueil"
          >
            <img
              src="/assets/logo/cropped-logo-higherglory.png"
              alt="Higher Glory Technologies"
              className="h-7 sm:h-10 lg:h-11 w-auto max-w-[165px] sm:max-w-none object-contain"
            />
          </Link>

          {/* Zone 2 : Liens de navigation concis sur une seule ligne */}
          <nav
            aria-label="Navigation principale"
            className="hidden lg:flex items-center gap-7"
          >
            {PRIMARY_NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium whitespace-nowrap shrink-0 transition-colors pb-1 border-b-2 ${
                    isActive
                      ? 'text-[#D61523] border-[#D61523]'
                      : 'text-[#242424] border-transparent hover:text-[#3366FF]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3 : 1 action principale + bouton menu mobile */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={openDrawer}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#D61523] rounded-md hover:bg-[#b8111d] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3366FF]"
            >
              <FileText className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span className="sm:hidden">Devis</span>
              <span className="hidden sm:inline">Demande de devis</span>
              {totalUnits > 0 && (
                <span className="font-mono tabular-nums text-white/95">
                  ({totalUnits})
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              className="lg:hidden p-2 sm:p-2.5 text-[#242424] border border-neutral-200 rounded-md hover:bg-[#F2F2F2]"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-neutral-200 px-4 py-5 space-y-4">
            <nav
              aria-label="Navigation mobile"
              className="flex flex-col space-y-1"
            >
              {[
                ...PRIMARY_NAV_ITEMS,
                { label: 'À propos', path: '/a-propos' },
                { label: 'Nos clients', path: '/clients' },
                { label: 'Événements', path: '/evenements' },
                { label: 'Devis regroupé', path: '/devis' },
              ].map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2.5 text-sm font-medium rounded-md ${
                      isActive
                        ? 'text-[#D61523] bg-[#D61523]/5'
                        : 'text-[#242424] hover:bg-[#F2F2F2]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="pt-4 border-t border-neutral-200 space-y-2 text-xs text-[#242424]/80">
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#D61523]" aria-hidden="true" />
                {COMPANY_CONFIG.contact.hours}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D61523]" aria-hidden="true" />
                {COMPANY_CONFIG.contact.phones.join(' / ')}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D61523]" aria-hidden="true" />
                {COMPANY_CONFIG.contact.email}
              </p>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      {/* Pied de page complet */}
      <footer className="bg-[#151635] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="inline-block bg-white rounded-md px-3 py-2">
              <img
                src="/assets/logo/cropped-logo-higherglory.png"
                alt="Higher Glory Technologies"
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Fournisseur et intégrateur de solutions matérielles et logicielles
              clés en main à Douala, Cameroun : identification par cartes et
              badges, traçabilité codes-barres et RFID, points de vente et
              sécurité électronique.
            </p>
            <p className="text-xs font-medium tracking-wide text-white/60 uppercase">
              {COMPANY_CONFIG.tagline}
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white mb-4">
              Entreprise
            </h3>
            <ul className="space-y-2.5 text-sm text-white/75">
              {FOOTER_NAV_COMPANY.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/catalogue"
                  className="hover:text-white transition-colors"
                >
                  Catalogue équipements
                </Link>
              </li>
              <li>
                <Link
                  to="/marques"
                  className="hover:text-white transition-colors"
                >
                  Marques distribuées
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white mb-4">
              Nos Solutions
            </h3>
            <ul className="space-y-2.5 text-sm text-white/75">
              {FOOTER_NAV_SOLUTIONS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 text-sm text-white/80">
            <h3 className="font-display text-sm font-semibold text-white mb-4">
              Coordonnées à Douala
            </h3>
            <p className="flex items-start gap-2.5">
              <MapPin
                className="w-4 h-4 text-[#D61523] shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span>
                {COMPANY_CONFIG.contact.streetAddress ||
                  `${COMPANY_CONFIG.contact.city}, ${COMPANY_CONFIG.contact.country}`}
              </span>
            </p>
            <p className="flex items-start gap-2.5 tabular-nums">
              <Phone
                className="w-4 h-4 text-[#D61523] shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span>{COMPANY_CONFIG.contact.phones.join(' / ')}</span>
            </p>
            <p className="flex items-start gap-2.5">
              <Mail
                className="w-4 h-4 text-[#D61523] shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <a
                href={`mailto:${COMPANY_CONFIG.contact.email}`}
                className="hover:text-white transition-colors break-all"
              >
                {COMPANY_CONFIG.contact.email}
              </a>
            </p>
            <p className="flex items-start gap-2.5">
              <Clock
                className="w-4 h-4 text-[#D61523] shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span>{COMPANY_CONFIG.contact.hours}</span>
            </p>
            <div className="pt-2">
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-[#D61523] text-white rounded-md hover:bg-[#b8111d] transition-colors"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                Contacter sur WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/65">
            <p>
              © {COMPANY_CONFIG.legal.copyrightYear} {COMPANY_CONFIG.name} —{' '}
              {COMPANY_CONFIG.contact.city}, {COMPANY_CONFIG.contact.country}.
              Tous droits réservés.
            </p>
            <p>{COMPANY_CONFIG.positioningStatement}</p>
          </div>
        </div>
      </footer>

      <QuoteDrawer />
      <WhatsAppFloatingButton />
    </div>
  );
}
