import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Plus,
  Minus,
  Trash2,
  Send,
  CheckCircle2,
  AlertCircle,
  RotateCw,
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useQuote } from '../context/QuoteContext';
import {
  validateQuoteForm,
  hasValidationErrors,
  type ValidationErrors,
  type QuoteFormPayload,
} from '../utils/validation';
import {
  submitQuoteRequest,
  type SubmissionResult,
} from '../services/inquiryService';
import { PageSeo } from '../components/PageSeo';
import { ResilientImage } from '../components/ResilientImage';

const SECTOR_SUGGESTIONS = [
  'Banque & Finance',
  'Assurance',
  'Industrie & Agro-alimentaire',
  'Commerce & Grande distribution',
  'Santé & Cliniques',
  'Éducation & Universités',
  'Administration & Collectivités',
  'Transport & Logistique',
  'Sécurité & Gardiennage',
  'Télécoms & Services IT',
];

export function QuotePage() {
  const { items, totalUnits, addItem, updateQuantity, removeItem, clearQuote } =
    useQuote();

  const [selectedProductToAdd, setSelectedProductToAdd] = useState(
    PRODUCTS[0].id
  );
  const [contactName, setContactName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [sector, setSector] = useState('');
  const [specialRequirements, setSpecialRequirements] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<
    ValidationErrors<keyof QuoteFormPayload>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submittedResult, setSubmittedResult] =
    useState<SubmissionResult | null>(null);

  const handleQuickAdd = () => {
    const prod = PRODUCTS.find((p) => p.id === selectedProductToAdd);
    if (prod) {
      addItem(prod, 1, false);
      if (errors.itemsCount) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next.itemsCount;
          return next;
        });
      }
    }
  };

  const clearFieldError = (field: keyof QuoteFormPayload) => {
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const runSubmission = async () => {
    setSubmitError(null);
    setSubmittedResult(null);

    const validation = validateQuoteForm({
      contactName,
      organization,
      email,
      phone,
      sector,
      specialRequirements,
      message,
      itemsCount: items.length,
    });

    if (hasValidationErrors(validation)) {
      setErrors(validation);
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitQuoteRequest({
        contactName,
        organization,
        email,
        phone,
        sector,
        specialRequirements,
        message,
        items,
      });

      if (!result.ok) {
        throw new Error(
          'La confirmation d’envoi n’a pas été reçue. Veuillez réessayer.'
        );
      }

      setSubmittedResult(result);
      setErrors({});
      setContactName('');
      setOrganization('');
      setEmail('');
      setPhone('');
      setSector('');
      setSpecialRequirements('');
      setMessage('');
      clearQuote();
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : 'Impossible de transmettre votre demande de devis par e-mail. Veuillez réessayer.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await runSubmission();
  };

  return (
    <>
      <PageSeo
        title="Demande de Devis Regroupée – Higher Glory Technologies"
        description="Constituez votre sélection d'imprimantes à cartes, rubans et équipements et envoyez directement votre demande de devis à Higher Glory Technologies."
      />

      <section className="bg-[#151635] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/75">
            Devis commercial · Transmission directe par e-mail
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold mt-2">
            Demande de devis regroupée
          </h1>
          <p className="mt-3 text-base text-white/85 max-w-2xl leading-relaxed">
            Sélectionnez un ou plusieurs équipements et consommables, renseignez
            vos coordonnées et envoyez directement votre demande à notre équipe
            commerciale à Douala, sans quitter le site.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Colonne gauche : sélection des produits */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#F2F2F2] border border-neutral-200 rounded-lg p-5">
              <label
                htmlFor="quick-add-product"
                className="block text-xs font-semibold text-[#151635] mb-2"
              >
                Ajouter directement une référence du catalogue
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <select
                  id="quick-add-product"
                  value={selectedProductToAdd}
                  onChange={(e) => setSelectedProductToAdd(e.target.value)}
                  className="w-full min-w-0 flex-1 px-3 py-2.5 text-sm bg-white border border-neutral-300 rounded-md focus:outline-none focus:border-[#3366FF]"
                >
                  {PRODUCTS.filter((p) => p.enabled).map((p) => (
                    <option key={p.id} value={p.id}>
                      [{p.reference}] {p.name}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={handleQuickAdd}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-white bg-[#151635] rounded-md hover:bg-[#D61523] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Plus className="w-4 h-4" aria-hidden="true" />
                  Ajouter
                </button>
              </div>
            </div>

            <div className="border border-neutral-200 rounded-lg overflow-hidden">
              <div className="px-5 py-4 bg-[#F2F2F2] border-b border-neutral-200 flex items-center justify-between gap-2">
                <h2 className="font-display text-base font-bold text-[#242424]">
                  Produits sélectionnés
                </h2>
                <span className="text-xs font-mono font-semibold text-[#151635] tabular-nums shrink-0">
                  {items.length} réf. · {totalUnits} unité
                  {totalUnits > 1 ? 's' : ''}
                </span>
              </div>

              {items.length === 0 ? (
                <div className="p-8 text-center space-y-3">
                  <p className="text-sm font-medium text-[#242424]/80">
                    Votre sélection est actuellement vide.
                  </p>
                  <p className="text-xs text-[#242424]/65">
                    Utilisez le sélecteur ci-dessus ou parcourez le catalogue
                    complet pour ajouter vos équipements.
                  </p>
                  <Link
                    to="/catalogue"
                    className="inline-block text-xs font-semibold text-[#3366FF] hover:underline"
                  >
                    Parcourir le catalogue complet
                  </Link>
                </div>
              ) : (
                <ul className="divide-y divide-neutral-200">
                  {items.map((item) => (
                    <li
                      key={item.productId}
                      className="p-4 flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4"
                    >
                      <div className="w-14 h-14 shrink-0 bg-white border border-neutral-200 rounded-md p-1 flex items-center justify-center">
                        <ResilientImage
                          src={item.imagePath}
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-mono text-[#3366FF] font-medium truncate">
                          {item.reference || 'Sans réf.'} · {item.brand}
                        </p>
                        <p className="text-sm font-semibold text-[#242424] truncate">
                          {item.name}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 ml-auto">
                        <div className="inline-flex items-center border border-neutral-300 rounded-md">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.productId, item.quantity - 1)
                            }
                            aria-label={`Diminuer quantité ${item.name}`}
                            className="p-2 hover:bg-[#F2F2F2] cursor-pointer"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <input
                            type="number"
                            min={1}
                            max={9999}
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(
                                item.productId,
                                Number(e.target.value) || 1
                              )
                            }
                            aria-label={`Quantité pour ${item.name}`}
                            className="w-12 text-center text-xs font-mono font-semibold tabular-nums focus:outline-none"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.productId, item.quantity + 1)
                            }
                            aria-label={`Augmenter quantité ${item.name}`}
                            className="p-2 hover:bg-[#F2F2F2] cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.productId)}
                          aria-label={`Supprimer ${item.name}`}
                          className="p-2 text-[#242424]/60 hover:text-[#D61523] cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              {errors.itemsCount && (
                <p className="px-5 py-3 text-xs text-[#D61523] bg-red-50 border-t border-red-100">
                  {errors.itemsCount}
                </p>
              )}
            </div>
          </div>

          {/* Colonne droite : informations demandeur & envoi automatique par e-mail */}
          <div className="lg:col-span-6">
            <div className="border border-neutral-200 rounded-lg p-5 sm:p-8 bg-white">
              <h2 className="font-display text-xl font-bold text-[#242424]">
                Vos coordonnées &amp; description du besoin
              </h2>
              <p className="text-sm text-[#242424]/70 mt-1">
                Votre demande est transmise directement par e-mail à notre
                équipe commerciale. Les champs marqués d’un astérisque (*) sont
                obligatoires.
              </p>

              {submittedResult && (
                <div
                  role="status"
                  className="mt-6 p-5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2"
                >
                  <div className="flex items-start gap-2.5 font-semibold text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                    <span>
                      Demande envoyée avec succès — Réf.{' '}
                      <span className="font-mono">
                        {submittedResult.referenceId}
                      </span>
                    </span>
                  </div>
                  <p className="text-sm text-emerald-800">
                    {submittedResult.message}
                  </p>
                  {submittedResult.requestDate && (
                    <p className="text-xs text-emerald-700">
                      Date d’envoi : {submittedResult.requestDate}
                    </p>
                  )}
                </div>
              )}

              {submitError && (
                <div
                  role="alert"
                  className="mt-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-900 space-y-3 text-sm"
                >
                  <div className="flex items-start gap-2.5">
                    <AlertCircle className="w-5 h-5 text-[#D61523] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">
                        L’envoi par e-mail n’a pas abouti
                      </p>
                      <p className="mt-0.5 text-red-800">{submitError}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={runSubmission}
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#D61523] rounded-md hover:bg-[#b8111d] disabled:opacity-60 transition-colors cursor-pointer"
                  >
                    <RotateCw className="w-3.5 h-3.5" aria-hidden="true" />
                    Réessayer l’envoi
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="quote-contactName"
                    className="block text-xs font-semibold text-[#242424] mb-1.5"
                  >
                    Nom et prénom *
                  </label>
                  <input
                    id="quote-contactName"
                    type="text"
                    value={contactName}
                    onChange={(e) => {
                      setContactName(e.target.value);
                      clearFieldError('contactName');
                    }}
                    placeholder="Ex. Jean Mbarga"
                    className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 rounded-md focus:outline-none focus:border-[#3366FF]"
                    aria-invalid={Boolean(errors.contactName)}
                  />
                  {errors.contactName && (
                    <p className="mt-1 text-xs text-[#D61523]">
                      {errors.contactName}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="quote-organization"
                      className="block text-xs font-semibold text-[#242424] mb-1.5"
                    >
                      Nom de l’entreprise *
                    </label>
                    <input
                      id="quote-organization"
                      type="text"
                      value={organization}
                      onChange={(e) => {
                        setOrganization(e.target.value);
                        clearFieldError('organization');
                      }}
                      placeholder="Ex. Cameroun Logistique SA"
                      className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 rounded-md focus:outline-none focus:border-[#3366FF]"
                      aria-invalid={Boolean(errors.organization)}
                    />
                    {errors.organization && (
                      <p className="mt-1 text-xs text-[#D61523]">
                        {errors.organization}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="quote-sector"
                      className="block text-xs font-semibold text-[#242424] mb-1.5"
                    >
                      Secteur d’activité *
                    </label>
                    <input
                      id="quote-sector"
                      type="text"
                      list="quote-sector-list"
                      value={sector}
                      onChange={(e) => {
                        setSector(e.target.value);
                        clearFieldError('sector');
                      }}
                      placeholder="Ex. Banque, Industrie, Santé..."
                      className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 rounded-md focus:outline-none focus:border-[#3366FF]"
                      aria-invalid={Boolean(errors.sector)}
                    />
                    <datalist id="quote-sector-list">
                      {SECTOR_SUGGESTIONS.map((item) => (
                        <option key={item} value={item} />
                      ))}
                    </datalist>
                    {errors.sector && (
                      <p className="mt-1 text-xs text-[#D61523]">
                        {errors.sector}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="quote-email"
                      className="block text-xs font-semibold text-[#242424] mb-1.5"
                    >
                      Adresse e-mail *
                    </label>
                    <input
                      id="quote-email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        clearFieldError('email');
                      }}
                      placeholder="nom@entreprise.cm"
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
                      htmlFor="quote-phone"
                      className="block text-xs font-semibold text-[#242424] mb-1.5"
                    >
                      Numéro de téléphone *
                    </label>
                    <input
                      id="quote-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        clearFieldError('phone');
                      }}
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

                <div>
                  <label
                    htmlFor="quote-special"
                    className="block text-xs font-semibold text-[#242424] mb-1.5"
                  >
                    Description de votre besoin *
                  </label>
                  <textarea
                    id="quote-special"
                    rows={3}
                    value={specialRequirements}
                    onChange={(e) => {
                      setSpecialRequirements(e.target.value);
                      clearFieldError('specialRequirements');
                    }}
                    placeholder="Ex. Impression recto/verso de 500 badges employés avec encodage RFID MIFARE et installation sur site à Douala..."
                    className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 rounded-md focus:outline-none focus:border-[#3366FF]"
                    aria-invalid={Boolean(errors.specialRequirements)}
                  />
                  {errors.specialRequirements && (
                    <p className="mt-1 text-xs text-[#D61523]">
                      {errors.specialRequirements}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="quote-message"
                    className="block text-xs font-semibold text-[#242424] mb-1.5"
                  >
                    Message complémentaire
                  </label>
                  <textarea
                    id="quote-message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Délais souhaités, ville de livraison, questions techniques..."
                    className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 rounded-md focus:outline-none focus:border-[#3366FF]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#D61523] rounded-md hover:bg-[#b8111d] disabled:opacity-60 transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
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
