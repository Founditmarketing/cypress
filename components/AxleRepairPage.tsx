import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ChevronRight } from 'lucide-react';

export const AxleRepairPage: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["AutoRepair", "Store"],
    "name": "Cypress Big Tex Trailers - Axle Repair",
    "url": "https://cypress-cyan.vercel.app/trailer-axle-repair-cypress",
    "logo": "https://cypress-cyan.vercel.app/cypress_big_tex_trailers_logo.png",
    "description": "Expert trailer axle repair and replacement services in Cypress, TX. Specializing in Dexter axles, spindle repairs, and tandem suspension upgrades.",
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
        "@type": "Service",
        "name": "Trailer Axle Repair and Replacement",
        "description": "Comprehensive trailer axle services including bent axle replacement, spindle repair, leaf spring replacement, and Dexter axle upgrades."
      }
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="bg-brand-dark py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">TRAILER AXLE REPAIR & REPLACEMENT IN CYPRESS, TX</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Expert diagnostics for bent axles, Dexter axle full replacements, precision spindle repairs, and suspension u-bolt upgrades.</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto prose prose-lg prose-slate h-auto">
          <h2 className="font-display font-bold text-3xl mb-4 text-brand-dark">Don't Ignore a Bent Axle</h2>
          <p className="text-gray-600 mb-6">A compromised axle not only destroys your tires through uneven wear, but it puts your entire payload and tow vehicle at risk. Whether you hit a nasty pothole under load or simply exceeded your GTWR, our team is equipped to accurately diagnose axle deflection and structural fatigue.</p>
          <div className="bg-gray-50 p-8 rounded-xl my-8 border-l-4 border-brand-red">
            <h3 className="font-display font-bold text-2xl mb-4 text-brand-dark">Our Axle Services:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <li className="flex items-center"><Shield className="w-5 h-5 text-brand-red mr-2" /> Complete Dexter Axle Swaps</li>
              <li className="flex items-center"><Shield className="w-5 h-5 text-brand-red mr-2" /> Spindle Repair & Replacement</li>
              <li className="flex items-center"><Shield className="w-5 h-5 text-brand-red mr-2" /> Leaf Spring Replacements</li>
              <li className="flex items-center"><Shield className="w-5 h-5 text-brand-red mr-2" /> Tandem Suspension Upgrades</li>
            </ul>
          </div>
          <p className="text-gray-600 mb-8">We carry a massive inventory of genuine Dexter Axle parts. From standard 3,500lb idler axles to heavy-duty 10,000lb dual-tandem setups, get your trailer back on the road tracking straight and true.</p>
          <div className="text-center mt-12">
            <Link to="/contact" className="inline-flex items-center bg-brand-red text-white px-8 py-4 font-bold font-display tracking-widest uppercase hover:bg-brand-dark transition-colors rounded-sm -skew-x-12">
              <span className="skew-x-12 flex items-center">Schedule Axle Service <ChevronRight className="ml-2 w-5 h-5" /></span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
