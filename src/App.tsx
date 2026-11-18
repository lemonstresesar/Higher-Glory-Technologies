import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  Link,
} from 'react-router-dom';
import { QuoteProvider } from './context/QuoteContext';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { SolutionDetailPage } from './pages/SolutionDetailPage';
import { CatalogPage } from './pages/CatalogPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { BrandsPage } from './pages/BrandsPage';
import { ClientsPage } from './pages/ClientsPage';
import { EventsPage } from './pages/EventsPage';
import { ContactPage } from './pages/ContactPage';
import { QuotePage } from './pages/QuotePage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function NotFoundPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center">
      <h1 className="font-display text-3xl font-bold text-[#151635]">
        Page introuvable
      </h1>
      <p className="mt-3 text-sm text-[#242424]/75">
        La page demandée n’existe pas ou a été déplacée.
      </p>
      <Link
        to="/"
        className="inline-block mt-6 px-5 py-2.5 text-sm font-semibold text-white bg-[#D61523] rounded-md hover:bg-[#b8111d] transition-colors"
      >
        Retour à l’accueil
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <QuoteProvider>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/solutions/:slug" element={<SolutionDetailPage />} />
            <Route path="/catalogue" element={<CatalogPage />} />
            <Route path="/catalogue/:id" element={<ProductDetailPage />} />
            <Route path="/marques" element={<BrandsPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/evenements" element={<EventsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/devis" element={<QuotePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </MainLayout>
      </QuoteProvider>
    </BrowserRouter>
  );
}
