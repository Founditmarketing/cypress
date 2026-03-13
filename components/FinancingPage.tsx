import React from 'react';
import { Check, ArrowRight, ExternalLink } from 'lucide-react';

export const FinancingPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="bg-brand-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-5xl mb-4">FINANCING OPTIONS</h1>
          <p className="text-xl text-gray-300">Don't let budget hold you back. We have payment plans for every credit situation.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Sheffield */}
          <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="w-full md:w-1/3 bg-[#002C5F] p-8 flex items-center justify-center h-full min-h-[200px]">
               <h3 className="text-white font-bold text-3xl italic font-serif tracking-wider">SHEFFIELD</h3>
            </div>
            <div className="w-full md:w-2/3 p-8">
              <h3 className="font-display font-bold text-2xl mb-2 text-brand-dark">Sheffield Financial</h3>
              <p className="text-gray-600 mb-4">
                The industry leader in trailer financing. Great for customers with established credit looking for low interest rates.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center text-sm font-medium"><Check className="w-4 h-4 text-green-500 mr-2"/> Rates as low as 0% for 12 months</li>
                <li className="flex items-center text-sm font-medium"><Check className="w-4 h-4 text-green-500 mr-2"/> Quick pre-qualification</li>
              </ul>
              <a 
                href="https://www.sheffieldfinancial.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#002C5F] text-white font-bold py-3 px-6 rounded hover:bg-blue-900 transition-colors"
              >
                Apply with Sheffield <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          {/* Rock Solid Funding */}
          <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="w-full md:w-1/3 bg-gray-900 p-8 flex items-center justify-center h-full min-h-[200px]">
               <div className="text-center">
                 <h3 className="text-white font-bold text-3xl font-sans tracking-wide">ROCK SOLID</h3>
                 <p className="text-brand-red font-bold tracking-widest text-sm">FUNDING</p>
               </div>
            </div>
            <div className="w-full md:w-2/3 p-8">
              <h3 className="font-display font-bold text-2xl mb-2 text-brand-dark">Rock Solid Funding</h3>
              <p className="text-gray-600 mb-4">
                Specialized trailer financing with flexible terms. We work with all credit types to get you hauling faster.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center text-sm font-medium"><Check className="w-4 h-4 text-green-500 mr-2"/> All Credit Types Welcome</li>
                <li className="flex items-center text-sm font-medium"><Check className="w-4 h-4 text-green-500 mr-2"/> Terms up to 84 months</li>
              </ul>
              <a 
                href="https://www.rocksolidfunding.com/?utm_source=google&utm_campaign=brand&utm_term=rock%20solid%20funding&gad_source=1&gad_campaignid=20404523488&gbraid=0AAAAADOFtFlzfXhKMR3920OMnFQuG9fZ-" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gray-900 text-white font-bold py-3 px-6 rounded hover:bg-black transition-colors"
              >
                Apply with Rock Solid <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          {/* Clicklease */}
          <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="w-full md:w-1/3 bg-[#FFB81C] p-8 flex items-center justify-center h-full min-h-[200px]">
               <h3 className="text-white font-bold text-3xl font-sans tracking-tighter">clicklease</h3>
            </div>
            <div className="w-full md:w-2/3 p-8">
              <h3 className="font-display font-bold text-2xl mb-2 text-brand-dark">Clicklease</h3>
              <p className="text-gray-600 mb-4">
                Perfect for small business owners and contractors. Instant approvals with no hard credit pull.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center text-sm font-medium"><Check className="w-4 h-4 text-green-500 mr-2"/> No Hard Credit Check</li>
                <li className="flex items-center text-sm font-medium"><Check className="w-4 h-4 text-green-500 mr-2"/> Instant Decisions</li>
              </ul>
              <button className="inline-flex items-center bg-[#FFB81C] text-white font-bold py-3 px-6 rounded hover:bg-yellow-500 transition-colors">
                Apply with Clicklease
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};