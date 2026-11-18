import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import { buildWhatsAppUrl } from '../utils/quote';

export function WhatsAppFloatingButton() {
  const href = buildWhatsAppUrl(
    COMPANY_CONFIG.contact.whatsappNumber,
    'Bonjour Higher Glory Technologies, je souhaite obtenir des renseignements sur vos solutions.'
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter sur WhatsApp avec Higher Glory Technologies"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#151635] text-white border border-white/15 shadow-lg hover:bg-[#D61523] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3366FF]"
    >
      <MessageCircle className="w-5 h-5 shrink-0 text-[#25D366]" aria-hidden="true" />
      <span className="hidden sm:inline text-xs font-semibold whitespace-nowrap">
        WhatsApp Direct
      </span>
    </a>
  );
}
