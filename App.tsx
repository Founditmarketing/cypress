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
import { HomePage } from './components/HomePage';
import { ContactPage } from './components/ContactPage';
import { InventoryProvider } from './context/InventoryContext';

// SEO Entity Pages
import { DumpTrailersPage } from './components/DumpTrailersPage';
import { GooseneckTrailersPage } from './components/GooseneckTrailersPage';
import { UtilityTrailersPage } from './components/UtilityTrailersPage';
import { AxleRepairPage } from './components/AxleRepairPage';
import { HitchInstallationPage } from './components/HitchInstallationPage';
import { BrakeRepairPage } from './components/BrakeRepairPage';
import { BearingRepackingPage } from './components/BearingRepackingPage';
import { ElectricalRewiringPage } from './components/ElectricalRewiringPage';
import { DOTInspectionsPage } from './components/DOTInspectionsPage';
import { CustomWeldingPage } from './components/CustomWeldingPage';

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
            
            {/* Dedicated SEO Entity Routes */}
            <Route path="/dump-trailers-cypress" element={<DumpTrailersPage />} />
            <Route path="/gooseneck-trailers-cypress" element={<GooseneckTrailersPage />} />
            <Route path="/utility-trailers-cypress" element={<UtilityTrailersPage />} />
            <Route path="/trailer-axle-repair-cypress" element={<AxleRepairPage />} />
            <Route path="/gooseneck-hitch-installation-cypress" element={<HitchInstallationPage />} />
            <Route path="/trailer-brake-repair-cypress" element={<BrakeRepairPage />} />
            <Route path="/trailer-bearing-repacking-cypress" element={<BearingRepackingPage />} />
            <Route path="/trailer-electrical-rewiring-cypress" element={<ElectricalRewiringPage />} />
            <Route path="/commercial-trailer-dot-inspections" element={<DOTInspectionsPage />} />
            <Route path="/custom-trailer-welding-cypress" element={<CustomWeldingPage />} />

            <Route path="*" element={<HomePage />} />
          </Routes>
        </Layout>
        <AIChat />
      </HashRouter>
    </InventoryProvider>
  );
};

export default App;