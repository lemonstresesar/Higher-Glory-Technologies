import React, { useState } from 'react';
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import {
  validateContactForm,
  hasValidationErrors,
  type ContactFormPayload,
  type ValidationErrors,
} from '../utils/validation';
import { buildWhatsAppUrl } from '../utils/quote';
import {
  submitContactInquiry,
  type SubmissionResult,
} from '../services/inquiryService';
import { PageSeo } from '../components/PageSeo';

const INITIAL_FORM: ContactFormPayload = {
  lastName: '',
  firstName: '',
  company: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

export function ContactPage() {
  const [form, setForm] = useState<ContactFormPayload>(INITIAL_FORM);
  const [errors, setErrors] = useState<ValidationErrors<keyof ContactFormPayload>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submittedResult, setSubmittedResult] =
    useState<SubmissionResult | null>(null);

  const handleChange = (
    field: keyof ContactFormPayload,
    value: string
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const validation = validateContactForm(form);
    if (hasValidationErrors(validation)) {
      setErrors(validation);
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitContactInquiry(form);
      setSubmittedResult(result);
      setForm(INITIAL_FORM);
      setErrors({});
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : 'Une erreur est survenue lors de l’envoi du message.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappUrl = buildWhatsAppUrl(
    COMPANY_CONFIG.contact.whatsappNumber,
    `Bonjour Higher Glory Technologies, je souhaite échanger avec votre équipe${
      form.subject ? ` au sujet de : ${form.subject}` : ''
    }.`
  );

  return (
    <>
      <PageSeo
        title="Contact – Higher Glory Technologies Douala, Cameroun"
        description="Contactez Higher Glory Technologies à Douala, Cameroun : +237 696 30 24 79 / +237 670 72 41 59, infos@higherglorytechnologies.com, WhatsApp direct et formulaire de demande."
      />

      <section className="bg-[#151635] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/75">
            Contact &amp; accompagnement
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold mt-2">
            Contacter Higher Glory Technologies
          </h1>
          <p className="mt-3 text-base text-white/85 max-w-2xl leading-relaxed">
            Notre équipe à Douala vous conseille sur le choix de vos
            équipements d’identification, de traçabilité, de point de vente ou
            de sécurité.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Coordonnées officielles */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#F2F2F2] border border-neutral-200 rounded-lg p-6 sm:p-8 space-y-5">
              <h2 className="font-display text-xl font-bold text-[#151635]">
                Coordonnées officielles
              </h2>

              <div className="space-y-4 text-sm text-[#242424]/85">
                <div className="flex items-start gap-3">
                  <MapPin
                    className="w-5 h-5 text-[#D61523] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-[#242424]">Localisation</p>
                    <p className="mt-0.5">
                      {COMPANY_CONFIG.contact.streetAddress ||
                        COMPANY_CONFIG.contact.addressPendingConfirmationNote}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone
                    className="w-5 h-5 text-[#D61523] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-[#242424]">Téléphones</p>
                    <p className="mt-0.5 tabular-nums">
                      {COMPANY_CONFIG.contact.phones.map((phone, idx) => (
                        <React.Fragment key={phone}>
                          <a
                            href={`tel:${phone.replace(/\s+/g, '')}`}
                            className="hover:text-[#3366FF] transition-colors"
                          >
                            {phone}
                          </a>
                          {idx < COMPANY_CONFIG.contact.phones.length - 1 &&
                            ' / '}
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail
                    className="w-5 h-5 text-[#D61523] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-[#242424]">E-mail</p>
                    <a
                      href={`mailto:${COMPANY_CONFIG.contact.email}`}
                      className="mt-0.5 inline-block hover:text-[#3366FF] transition-colors break-all"
                    >
                      {COMPANY_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock
                    className="w-5 h-5 text-[#D61523] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-[#242424]">Horaires</p>
                    <p className="mt-0.5">{COMPANY_CONFIG.contact.hours}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#151635] rounded-md hover:bg-[#D61523] transition-colors"
                >
                  <MessageCircle
                    className="w-4 h-4 text-[#25D366]"
                    aria-hidden="true"
                  />
                  Écrire sur WhatsApp ({COMPANY_CONFIG.contact.whatsappDisplay})
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="lg:col-span-7">
            <div className="border border-neutral-200 rounded-lg p-6 sm:p-8 bg-white">
              <h2 className="font-display text-xl font-bold text-[#242424]">
                Envoyer un message à notre équipe
              </h2>
              <p className="text-sm text-[#242424]/70 mt-1">
                Les champs marqués d’un astérisque (*) sont obligatoires.
              </p>

              {submittedResult && (
                <div
                  role="status"
                  className="mt-6 p-5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2"
                >
                  <div className="flex items-center gap-2 font-semibold text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                    <span>
                      Message enregistré — Référence{' '}
                      <span className="font-mono">
                        {submittedResult.referenceId}
                      </span>
                    </span>
                  </div>
                  <p className="text-sm text-emerald-800">
                    {submittedResult.message}
                  </p>
                </div>
              )}

              {submitError && (
                <div
                  role="alert"
                  className="mt-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-900 flex items-start gap-2.5 text-sm"
                >
                  <AlertCircle className="w-5 h-5 text-[#D61523] shrink-0 mt-0.5" />
                  <span>{submitError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-lastName"
                      className="block text-xs font-semibold text-[#242424] mb-1.5"
                    >
                      Nom *
                    </label>
                    <input
                      id="contact-lastName"
                      type="text"
                      value={form.lastName}
                      onChange={(e) => handleChange('lastName', e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 rounded-md focus:outline-none focus:border-[#3366FF]"
                      aria-invalid={Boolean(errors.lastName)}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-xs text-[#D61523]">
                        {errors.lastName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-firstName"
                      className="block text-xs font-semibold text-[#242424] mb-1.5"
                    >
                      Prénom *
                    </label>
                    <input
                      id="contact-firstName"
                      type="text"
                      value={form.firstName}
                      onChange={(e) => handleChange('firstName', e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 rounded-md focus:outline-none focus:border-[#3366FF]"
                      aria-invalid={Boolean(errors.firstName)}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-xs text-[#D61523]">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-company"
                      className="block text-xs font-semibold text-[#242424] mb-1.5"
                    >
                      Entreprise / Organisation
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      value={form.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 rounded-md focus:outline-none focus:border-[#3366FF]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-semibold text-[#242424] mb-1.5"
                    >
                      Téléphone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="+237 6XX XX XX XX"
                      className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 rounded-md focus:outline-none focus:border-[#3366FF]"
                      aria-invalid={Boolean(errors.phone)}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-[#D61523]">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-[#242424] mb-1.5"
                    >
                      Adresse e-mail *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 rounded-md focus:outline-none focus:border-[#3366FF]"
                      aria-invalid={Boolean(errors.email)}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-[#D61523]">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-semibold text-[#242424] mb-1.5"
                    >
                      Sujet *
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={form.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                      placeholder="Ex. Projet badges PVC, rubans, POS..."
                      className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 rounded-md focus:outline-none focus:border-[#3366FF]"
                      aria-invalid={Boolean(errors.subject)}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-[#D61523]">
                        {errors.subject}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-[#242424] mb-1.5"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Décrivez votre besoin, vos quantités estimées ou les équipements recherchés..."
                    className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 rounded-md focus:outline-none focus:border-[#3366FF]"
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-[#D61523]">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#D61523] rounded-md hover:bg-[#b8111d] disabled:opacity-60 transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
