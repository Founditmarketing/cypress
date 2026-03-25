import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ChevronRight } from 'lucide-react';

export const GooseneckTrailersPage: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["AutoDealer", "Store"],
    "name": "Cypress Big Tex Trailers - Gooseneck Trailers",
    "url": "https://cypress-cyan.vercel.app/gooseneck-trailers-cypress",
    "description": "Gooseneck trailers for sale in Cypress, TX. High payload flatbed goosenecks, dual tandem axles, perfect for hotshot hauling.",
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
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">GOOSENECK TRAILERS FOR SALE IN CYPRESS, TX</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Details on flatbed goosenecks, dual tandem axles, payload capacities, and hotshot hauling suitability.</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto prose prose-lg prose-slate h-auto">
          <h2 className="font-display font-bold text-3xl mb-4 text-brand-dark">The Ultimate Heavy Hauler</h2>
          <p className="text-gray-600 mb-6">Big Tex Gooseneck trailers are the industry standard for commercial hauling. By moving the tongue weight over the rear axle of your tow vehicle, you unlock massive payload capabilities and unmatched towing stability over conventional bumper pulls.</p>
          <div className="bg-gray-50 p-8 rounded-xl my-8 border-l-4 border-brand-red">
            <h3 className="font-display font-bold text-2xl mb-4 text-brand-dark">Gooseneck Features:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <li className="flex items-center"><Shield className="w-5 h-5 text-brand-red mr-2" /> Dual Tandem Axle Configurations</li>
              <li className="flex items-center"><Shield className="w-5 h-5 text-brand-red mr-2" /> Mega Ramps & Dovetails</li>
              <li className="flex items-center"><Shield className="w-5 h-5 text-brand-red mr-2" /> Pierced Beam Frame Construction</li>
              <li className="flex items-center"><Shield className="w-5 h-5 text-brand-red mr-2" /> Gooseneck Coupler & Chain Trays</li>
            </ul>
          </div>
          <p className="text-gray-600 mb-8">We cater extensively to the hotshot industry. From 30ft flatbeds to 40ft monsters with hydraulic dovetails, our inventory is stocked to get your rig on the road earning revenue.</p>
          <div className="text-center mt-12">
            <Link to="/inventory?cat=Gooseneck" className="inline-flex items-center bg-brand-red text-white px-8 py-4 font-bold font-display tracking-widest uppercase hover:bg-brand-dark transition-colors rounded-sm -skew-x-12">
              <span className="skew-x-12 flex items-center">View Gooseneck Inventory <ChevronRight className="ml-2 w-5 h-5" /></span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
