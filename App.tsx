import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { InventoryPage } from './components/InventoryPage'; // Corrected import to component
import { TrailerDetail } from './components/TrailerDetail';
import { ServicesPage } from './components/ServicesPage';
import { FinancingPage } from './components/FinancingPage';
import { PartsPage } from './components/PartsPage';
import { AboutPage } from './components/AboutPage';
import { AdminPage } from './components/AdminPage';
import { AIChat } from './components/AIChat';
import { HomePage } from './components/HomePage'; // Extracted HomePage component
import { ContactPage } from './components/ContactPage'; // Extracted/Existing ContactPage
import { InventoryProvider } from './context/InventoryContext';

// Scroll To Top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <InventoryProvider>
      <HashRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/inventory/:id" element={<TrailerDetail />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/parts" element={<PartsPage />} />
            <Route path="/financing" element={<FinancingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Layout>
        <AIChat />
      </HashRouter>
    </InventoryProvider>
  );
};

export default App;