import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ChevronRight } from 'lucide-react';

export const BearingRepackingPage: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["AutoRepair", "Store"],
    "name": "Cypress Big Tex Trailers - Trailer Bearing Repacking",
    "url": "https://cypress-cyan.vercel.app/trailer-bearing-repacking-cypress",
    "description": "Professional trailer bearing repacking and hub service. Preventative maintenance, bearing greasing schedules, and grease seal replacement.",
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
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">TRAILER BEARING REPACKING & HUB SERVICE</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Providing essential preventative maintenance, bearing greasing schedules, hub inspection, and grease seal replacements.</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto prose prose-lg prose-slate h-auto">
          <h2 className="font-display font-bold text-3xl mb-4 text-brand-dark">Prevent Catastrophic Blowouts</h2>
          <p className="text-gray-600 mb-6">A seized trailer bearing at 70MPH is a guaranteed disaster, often destroying the spindle, taking out the tire, and snapping the axle. Bearing repacking isn't an option; it's mandatory preventative maintenance. We recommend full repacking every 12,000 miles or 12 months, especially for boat trailers submerged in water.</p>
          <div className="bg-gray-50 p-8 rounded-xl my-8 border-l-4 border-brand-red">
            <h3 className="font-display font-bold text-2xl mb-4 text-brand-dark">Bearing & Hub Services:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <li className="flex items-center"><Shield className="w-5 h-5 text-brand-red mr-2" /> Hand-Packed Bearings</li>
              <li className="flex items-center"><Shield className="w-5 h-5 text-brand-red mr-2" /> Grease Seal Replacements</li>
              <li className="flex items-center"><Shield className="w-5 h-5 text-brand-red mr-2" /> Hub Face Cleaning & Inspection</li>
              <li className="flex items-center"><Shield className="w-5 h-5 text-brand-red mr-2" /> EZ-Lube System Maintenance</li>
            </ul>
          </div>
          <p className="text-gray-600 mb-8">Our technicians completely strip, clean, and inspect the races and bearings before packing them with high-temp red grease. Don't risk your cargo—schedule your bearing service today.</p>
          <div className="text-center mt-12">
            <Link to="/contact" className="inline-flex items-center bg-brand-red text-white px-8 py-4 font-bold font-display tracking-widest uppercase hover:bg-brand-dark transition-colors rounded-sm -skew-x-12">
              <span className="skew-x-12 flex items-center">Schedule Repack <ChevronRight className="ml-2 w-5 h-5" /></span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
