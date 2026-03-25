import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ChevronRight } from 'lucide-react';

export const ElectricalRewiringPage: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["AutoRepair", "Store"],
    "name": "Cypress Big Tex Trailers - Trailer Electrical Rewiring",
    "url": "https://cypress-cyan.vercel.app/trailer-electrical-rewiring-cypress",
    "description": "Trailer electrical and wiring repair. Replacing 7-way plugs, tracing shorts in utility lines, and LED light upgrades.",
    "telephone": "+1-281-373-4905",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "11333 Huffmeister Rd",
      "addressLocality": "Houston",
      "addressRegion": "TX"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="bg-brand-dark py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">TRAILER ELECTRICAL & WIRING REPAIR</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Expert diagnosis for dead lights, tracing persistent short circuits, 7-way plug replacements, and LED system upgrades.</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto prose prose-lg prose-slate h-auto">
          <h2 className="font-display font-bold text-3xl mb-4 text-brand-dark">Eliminate Trailer Wiring Headaches</h2>
          <p className="text-gray-600 mb-6">Nothing is more frustrating than a trailer light that intermittently fails or a ground fault popping your truck's fuses. Salt, vibration, and road debris ruthlessly degrade trailer wiring. We track down electrical gremlins fast, replacing frayed harnesses and ensuring proper grounding so you stay DOT compliant.</p>
          <div className="bg-gray-50 p-8 rounded-xl my-8 border-l-4 border-brand-red">
            <h3 className="font-display font-bold text-2xl mb-4 text-brand-dark">Electrical Services:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <li className="flex items-center"><Shield className="w-5 h-5 text-brand-red mr-2" /> Complete Trailer Rewiring</li>
              <li className="flex items-center"><Shield className="w-5 h-5 text-brand-red mr-2" /> 7-Way & 4-Way Plug Conversions</li>
              <li className="flex items-center"><Shield className="w-5 h-5 text-brand-red mr-2" /> Sealed LED Light Upgrades</li>
              <li className="flex items-center"><Shield className="w-5 h-5 text-brand-red mr-2" /> Junction Box Diagnostics</li>
            </ul>
          </div>
          <p className="text-gray-600 mb-8">Stop fighting with spliced wires and electrical tape. Let our experts professionally loom, route, and seal your trailer's electrical system to withstand weather and commercial use.</p>
          <div className="text-center mt-12">
            <Link to="/contact" className="inline-flex items-center bg-brand-red text-white px-8 py-4 font-bold font-display tracking-widest uppercase hover:bg-brand-dark transition-colors rounded-sm -skew-x-12">
              <span className="skew-x-12 flex items-center">Book Wiring Repair <ChevronRight className="ml-2 w-5 h-5" /></span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
