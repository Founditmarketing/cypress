import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ChevronRight } from 'lucide-react';

export const HitchInstallationPage: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["AutoRepair", "Store"],
    "name": "Cypress Big Tex Trailers - Gooseneck Hitch Installation",
    "url": "https://cypress-cyan.vercel.app/gooseneck-hitch-installation-cypress",
    "logo": "https://cypress-cyan.vercel.app/cypress_big_tex_trailers_logo.png",
    "description": "Professional Gooseneck and B&W hitch installation in Cypress, TX. Certified installations for severe duty towing and hotshot setups.",
    "telephone": "+1-281-373-4905",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "11333 Huffmeister Rd",
      "addressLocality": "Houston",
      "addressRegion": "TX"
    },
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Gooseneck Hitch Installation",
        "description": "B&W turnover ball installations, standard gooseneck plates, and 5th wheel rails installed by certified technicians."
      }
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="bg-brand-dark py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">GOOSENECK HITCH INSTALLATION IN CYPRESS, TX</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Authorized B&W turnover ball installations, custom truck bed modifications, and verified payload safety checks.</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto prose prose-lg prose-slate h-auto">
          <h2 className="font-display font-bold text-3xl mb-4 text-brand-dark">Haul Heavy, Haul Safe</h2>
          <p className="text-gray-600 mb-6">Installing a gooseneck or 5th-wheel hitch involves extreme demands on your truck's frame. Don't leave it to amateurs. We provide precision installation of industry-leading hitches, ensuring the torque specifications and frame plate alignments exceed standard safety margins.</p>
          <div className="bg-gray-50 p-8 rounded-xl my-8 border-l-4 border-brand-red">
            <h3 className="font-display font-bold text-2xl mb-4 text-brand-dark">Installation Specialties:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <li className="flex items-center"><Shield className="w-5 h-5 text-brand-red mr-2" /> B&W Turnover Ball Hitches</li>
              <li className="flex items-center"><Shield className="w-5 h-5 text-brand-red mr-2" /> 5th Wheel Rail Kits</li>
              <li className="flex items-center"><Shield className="w-5 h-5 text-brand-red mr-2" /> Under-bed Mounting Systems</li>
              <li className="flex items-center"><Shield className="w-5 h-5 text-brand-red mr-2" /> In-Bed 7-way Wiring Outlets</li>
            </ul>
          </div>
          <p className="text-gray-600 mb-8">Whether you're gearing up for a hotshot logistics run or hauling a multi-horse slant load, our installations give you the confidence to tow at max GVWR. We handle all major truck makes: Ford Super Duty, Chevy/GMC HD, and Ram HD.</p>
          <div className="text-center mt-12">
            <Link to="/contact" className="inline-flex items-center bg-brand-red text-white px-8 py-4 font-bold font-display tracking-widest uppercase hover:bg-brand-dark transition-colors rounded-sm -skew-x-12">
              <span className="skew-x-12 flex items-center">Book Installation <ChevronRight className="ml-2 w-5 h-5" /></span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
