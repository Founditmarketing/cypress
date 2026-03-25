import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ChevronRight } from 'lucide-react';

export const UtilityTrailersPage: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["AutoDealer", "Store"],
    "name": "Cypress Big Tex Trailers - Utility Trailers",
    "url": "https://cypress-cyan.vercel.app/utility-trailers-cypress",
    "description": "Utility and landscape trailers for sale in Cypress, TX. Single vs tandem axle utility trailers, ramp gate options, and tie-down loops.",
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
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">UTILITY TRAILERS & LANDSCAPE TRAILERS FOR SALE</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Explore single vs tandem axle utility trailers, fold-flat gate options, pipe top rails, and integrated tie-down loops.</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto prose prose-lg prose-slate h-auto">
          <h2 className="font-display font-bold text-3xl mb-4 text-brand-dark">The Most Versatile Trailer You Can Own</h2>
          <p className="text-gray-600 mb-6">Whether you are a professional landscaper hauling zero-turn mowers, or a homeowner moving ATVs to the deer lease, utility trailers are the backbone of everyday hauling. Big Tex leads the industry with pipe-top durability and reinforced A-frame tongues.</p>
          <div className="bg-gray-50 p-8 rounded-xl my-8 border-l-4 border-brand-red">
            <h3 className="font-display font-bold text-2xl mb-4 text-brand-dark">Utility Trailer Options:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <li className="flex items-center"><Shield className="w-5 h-5 text-brand-red mr-2" /> Single & Tandem Axle Models</li>
              <li className="flex items-center"><Shield className="w-5 h-5 text-brand-red mr-2" /> Spring-Assist Ramp Gates</li>
              <li className="flex items-center"><Shield className="w-5 h-5 text-brand-red mr-2" /> Angle Iron vs Pipe Top Side Rails</li>
              <li className="flex items-center"><Shield className="w-5 h-5 text-brand-red mr-2" /> Treated Pine Decking</li>
            </ul>
          </div>
          <p className="text-gray-600 mb-8">Stop buying disposable box-store trailers. A Big Tex utility trailer provides superior resale value and structural integrity that will last decades of hard use.</p>
          <div className="text-center mt-12">
            <Link to="/inventory?cat=Utility" className="inline-flex items-center bg-brand-red text-white px-8 py-4 font-bold font-display tracking-widest uppercase hover:bg-brand-dark transition-colors rounded-sm -skew-x-12">
              <span className="skew-x-12 flex items-center">View Utility Inventory <ChevronRight className="ml-2 w-5 h-5" /></span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
