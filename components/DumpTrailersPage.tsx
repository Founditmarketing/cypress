import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ChevronRight } from 'lucide-react';

export const DumpTrailersPage: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["AutoDealer", "Store"],
    "name": "Cypress Big Tex Trailers - Dump Trailers",
    "url": "https://cypress-cyan.vercel.app/dump-trailers-cypress",
    "logo": "https://cypress-cyan.vercel.app/cypress_big_tex_trailers_logo.png",
    "description": "Heavy-duty Big Tex dump trailers for sale in Cypress, TX. High payload capacities, reliable hydraulic hoist mechanisms, and local financing.",
    "telephone": "+1-281-373-4905",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "11333 Huffmeister Rd",
      "addressLocality": "Houston",
      "addressRegion": "TX",
      "postalCode": "77065",
      "addressCountry": "US"
    },
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Dump Trailers",
        "description": "Professional-grade dump trailers featuring heavy-duty axles and hydraulic scissor hoists."
      }
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="bg-brand-dark py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">DUMP TRAILERS FOR SALE IN CYPRESS, TX</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Highlighting heavy-duty dump trailers, payload capacities, hydraulic hoist types, and full financing options for local contractors.</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto prose prose-lg prose-slate h-auto">
          <h2 className="font-display font-bold text-3xl mb-4 text-brand-dark">Built to Excel on the Job Site</h2>
          <p className="text-gray-600 mb-6">Our inventory of Big Tex dump trailers represents the pinnacle of hauling performance. Designed with heavy-duty gauge steel floors and reinforced side walls, these trailers handle gravel, debris, and bulk materials effortlessly. Choose from variations utilizing single or dual hydraulic scissor hoists to match your payload demands exactly.</p>
          <div className="bg-gray-50 p-8 rounded-xl my-8 border-l-4 border-brand-red">
            <h3 className="font-display font-bold text-2xl mb-4 text-brand-dark">Features Our Dump Trailers Offer:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <li className="flex items-center"><Shield className="w-5 h-5 text-brand-red mr-2" /> Massive Payload Capacity</li>
              <li className="flex items-center"><Shield className="w-5 h-5 text-brand-red mr-2" /> Heavy-Duty Dexter Axles</li>
              <li className="flex items-center"><Shield className="w-5 h-5 text-brand-red mr-2" /> Power Up/Power Down Hydraulics</li>
              <li className="flex items-center"><Shield className="w-5 h-5 text-brand-red mr-2" /> Slide-In Ramps Included</li>
            </ul>
          </div>
          <p className="text-gray-600 mb-8">We proudly offer financing solutions to ensure your business doesn't miss a beat. Upgrade your fleet today with a trailer built to endure.</p>
          <div className="text-center mt-12">
            <Link to="/inventory?cat=Dump" className="inline-flex items-center bg-brand-red text-white px-8 py-4 font-bold font-display tracking-widest uppercase hover:bg-brand-dark transition-colors rounded-sm -skew-x-12">
              <span className="skew-x-12 flex items-center">View Dump Inventory <ChevronRight className="ml-2 w-5 h-5" /></span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
