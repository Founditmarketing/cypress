import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ChevronRight } from 'lucide-react';

export const DOTInspectionsPage: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["AutoRepair", "Store"],
    "name": "Cypress Big Tex Trailers - Commercial Trailer DOT Inspections",
    "url": "https://cypress-cyan.vercel.app/commercial-trailer-dot-inspections",
    "description": "Annual commercial trailer DOT inspections in Cypress, TX. Federal annual inspection criteria and safety compliance checklists.",
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
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">COMMERCIAL TRAILER DOT INSPECTIONS IN CYPRESS</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Walkthrough of the Federal annual inspection criteria, safety compliance checklist, and certification.</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto prose prose-lg prose-slate h-auto">
          <h2 className="font-display font-bold text-3xl mb-4 text-brand-dark">Stay Legal. Stay on the Road.</h2>
          <p className="text-gray-600 mb-6">Commercial vehicle enforcement doesn't mess around. If you are operating a trailer for interstate commerce with a GVWR over 10,000 lbs, you are required to have a current FMCSA Annual DOT Inspection. Our certified inspectors will meticulously review your rig to keep you out of the weigh station penalty box.</p>
          <div className="bg-gray-50 p-8 rounded-xl my-8 border-l-4 border-brand-red">
            <h3 className="font-display font-bold text-2xl mb-4 text-brand-dark">What We Inspect:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <li className="flex items-center"><Shield className="w-5 h-5 text-brand-red mr-2" /> Brake System Integrity</li>
              <li className="flex items-center"><Shield className="w-5 h-5 text-brand-red mr-2" /> Suspension & Axle Alignment</li>
              <li className="flex items-center"><Shield className="w-5 h-5 text-brand-red mr-2" /> Frame & Coupling Devices</li>
              <li className="flex items-center"><Shield className="w-5 h-5 text-brand-red mr-2" /> Lighting & Reflective Tape</li>
            </ul>
          </div>
          <p className="text-gray-600 mb-8">We don't just inspect; we repair. If a component fails inspection, our full-service shop can immediately rectify the issue so you leave with your certification decal applied.</p>
          <div className="text-center mt-12">
            <Link to="/contact" className="inline-flex items-center bg-brand-red text-white px-8 py-4 font-bold font-display tracking-widest uppercase hover:bg-brand-dark transition-colors rounded-sm -skew-x-12">
              <span className="skew-x-12 flex items-center">Schedule Inspection <ChevronRight className="ml-2 w-5 h-5" /></span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
