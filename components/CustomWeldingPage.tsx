import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ChevronRight } from 'lucide-react';

export const CustomWeldingPage: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["AutoRepair", "Store"],
    "name": "Cypress Big Tex Trailers - Custom Trailer Welding & Fabrication",
    "url": "https://cypress-cyan.vercel.app/custom-trailer-welding-cypress",
    "description": "Custom trailer welding and fabrication in Cypress, TX. Landscape gate beef ups, ramp gate replacements, and structural frame repairs.",
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
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">CUSTOM TRAILER WELDING & FABRICATION</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Expert steel and aluminum welding for structural frame repairs, custom ramp gates, and heavy-duty modifications.</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto prose prose-lg prose-slate h-auto">
          <h2 className="font-display font-bold text-3xl mb-4 text-brand-dark">Built to Your Exact Needs</h2>
          <p className="text-gray-600 mb-6">Every job is different, and sometimes an off-the-lot trailer needs a few modifications to be perfect. From tearing off a sheared landscape gate to fabricating custom winch plates on a car hauler, our welders deliver deep-penetration welds that outlast the lifespan of the trailer.</p>
          <div className="bg-gray-50 p-8 rounded-xl my-8 border-l-4 border-brand-red">
            <h3 className="font-display font-bold text-2xl mb-4 text-brand-dark">Fabrication Services:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <li className="flex items-center"><Shield className="w-5 h-5 text-brand-red mr-2" /> Structural Frame Repair</li>
              <li className="flex items-center"><Shield className="w-5 h-5 text-brand-red mr-2" /> Custom Ramp Gate Fabrication</li>
              <li className="flex items-center"><Shield className="w-5 h-5 text-brand-red mr-2" /> D-Ring & Tie-Down Welding</li>
              <li className="flex items-center"><Shield className="w-5 h-5 text-brand-red mr-2" /> Jack Replacements</li>
            </ul>
          </div>
          <p className="text-gray-600 mb-8">Whether it's mild steel, diamond plate, or aluminum, we have the MIG and TIG capabilities to handle any custom request or repair.</p>
          <div className="text-center mt-12">
            <Link to="/contact" className="inline-flex items-center bg-brand-red text-white px-8 py-4 font-bold font-display tracking-widest uppercase hover:bg-brand-dark transition-colors rounded-sm -skew-x-12">
              <span className="skew-x-12 flex items-center">Discuss Your Project <ChevronRight className="ml-2 w-5 h-5" /></span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
