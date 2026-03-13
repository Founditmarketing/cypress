import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useInventory } from '../context/InventoryContext';
import { ArrowLeft, Check, Truck, Shield, Calendar, Phone, Cog } from 'lucide-react';
import { QuoteModal } from './QuoteModal';
import { TrailerCard } from './TrailerCard';

export const TrailerDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { inventory } = useInventory();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  
  const trailer = inventory.find(t => t.id === id);

  if (!trailer) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Trailer not found</h2>
        <Link to="/inventory" className="text-brand-red underline">Back to Inventory</Link>
      </div>
    );
  }

  // Find similar trailers (same category, excluding current one)
  const similarTrailers = inventory
    .filter(t => t.category === trailer.category && t.id !== trailer.id && !t.isHidden)
    .slice(0, 3);

  const hasDexterAxles = trailer.specs.axles.toLowerCase().includes('dexter');

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
        trailerName={trailer.name}
      />

      {/* Breadcrumb / Back */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Link to="/inventory" className="inline-flex items-center text-gray-500 hover:text-brand-red transition-colors text-sm font-bold uppercase tracking-wide">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Inventory
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Images */}
          <div className="space-y-4">
            <div className="bg-white p-2 shadow-sm rounded-lg overflow-hidden border border-gray-100 relative">
              <img 
                src={trailer.images[0]} 
                alt={trailer.name} 
                className="w-full h-auto object-cover rounded"
              />
              {hasDexterAxles && (
                 <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm border-2 border-[#004B8D] text-[#004B8D] px-3 py-1 rounded-sm shadow-lg">
                    <div className="flex items-center gap-2">
                        <Cog className="w-5 h-5 animate-spin-slow" />
                        <div>
                            <span className="block text-[10px] font-bold uppercase leading-none">Equipped With</span>
                            <span className="block text-sm font-black uppercase leading-none">DEXTER AXLES</span>
                        </div>
                    </div>
                 </div>
              )}
            </div>
            <div className="grid grid-cols-4 gap-4">
               {/* Mock thumbnails - reusing the same image for demo if only 1 exists */}
               {[...trailer.images, ...Array(3).fill(trailer.images[0])].slice(0, 4).map((img, i) => (
                 <div key={i} className="bg-white p-1 shadow-sm rounded border border-gray-100 cursor-pointer hover:border-brand-red opacity-80 hover:opacity-100 transition-all">
                   <img src={img} className="w-full h-20 object-cover rounded-sm" alt={`View ${i}`} />
                 </div>
               ))}
            </div>

            {/* Quick Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <Shield className="w-8 h-8 text-brand-red mx-auto mb-2" />
                <span className="block text-xs font-bold uppercase text-gray-600">3 Year Warranty</span>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <Truck className="w-8 h-8 text-brand-red mx-auto mb-2" />
                <span className="block text-xs font-bold uppercase text-gray-600">Nationwide Shipping</span>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <Calendar className="w-8 h-8 text-brand-red mx-auto mb-2" />
                <span className="block text-xs font-bold uppercase text-gray-600">Financing Available</span>
              </div>
            </div>
          </div>

          {/* Right Column: Details */}
          <div>
            <div className="mb-6">
              <div className="flex gap-2 mb-3">
                <span className="inline-block bg-brand-dark text-white text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-sm">
                  {trailer.brand}
                </span>
                <span className="inline-block bg-gray-200 text-gray-700 text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-sm">
                  {trailer.category}
                </span>
              </div>
              <h1 className="font-display font-bold text-4xl text-brand-dark mb-2 leading-tight">
                {trailer.name}
              </h1>
              <p className="text-gray-500 text-sm font-mono">SKU: {trailer.sku}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
              <div className="flex items-end justify-between mb-6">
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase mb-1">Our Price</p>
                  <div className="flex items-baseline gap-3">
                    {trailer.salePrice ? (
                       <>
                         <span className="font-display font-bold text-4xl text-brand-red">${trailer.salePrice.toLocaleString()}</span>
                         <span className="text-xl text-gray-400 line-through">${trailer.price.toLocaleString()}</span>
                       </>
                    ) : (
                      <span className="font-display font-bold text-4xl text-brand-dark">${trailer.price.toLocaleString()}</span>
                    )}
                  </div>
                </div>
                <div className={`px-4 py-2 rounded font-bold text-sm uppercase ${trailer.status === 'In Stock' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                  {trailer.status}
                </div>
              </div>

              <div className="space-y-3">
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full bg-brand-red text-white font-display font-bold text-xl py-4 rounded-sm hover:bg-red-700 transition-colors shadow-lg shadow-red-100 flex items-center justify-center"
                >
                   GET BEST PRICE
                </button>
                <button className="w-full border-2 border-brand-dark text-brand-dark font-display font-bold text-xl py-3 rounded-sm hover:bg-gray-50 transition-colors flex items-center justify-center">
                   <Phone className="w-5 h-5 mr-2" /> (281) 373-4905
                </button>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-display font-bold text-xl mb-4 border-b border-gray-200 pb-2">DESCRIPTION</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {trailer.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-display font-bold text-xl mb-4 border-b border-gray-200 pb-2">SPECIFICATIONS</h3>
                <ul className="space-y-3">
                  {Object.entries(trailer.specs).map(([key, value]) => (
                    <li key={key} className="flex justify-between items-center text-sm border-b border-gray-50 pb-2">
                      <span className="font-bold text-gray-500 uppercase">{key}</span>
                      <span className="font-medium text-brand-dark">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-4 border-b border-gray-200 pb-2">KEY FEATURES</h3>
                <ul className="space-y-2">
                  {trailer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <Check className="w-5 h-5 text-brand-red mr-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Similar Inventory Section */}
        {similarTrailers.length > 0 && (
          <div className="mt-24 pt-12 border-t border-gray-200">
             <h3 className="font-display font-bold text-3xl text-brand-dark mb-8">YOU MIGHT ALSO LIKE</h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {similarTrailers.map(t => (
                 <TrailerCard key={t.id} trailer={t} />
               ))}
             </div>
          </div>
        )}
      </div>
    </div>
  );
};