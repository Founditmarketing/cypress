import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

interface SheetTrailer {
  id: string;
  sku: string;
  name: string;
  inStock: string;
  regularPrice: string;
  categories: string;
  images: string[];
}

export const InventoryPage: React.FC = () => {
  const [trailers, setTrailers] = useState<SheetTrailer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const res = await fetch('/api/inventory');
        if (!res.ok) throw new Error('Failed to fetch from Google Sheets');
        const data = await res.json();
        setTrailers(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchInventory();
  }, []);

  return (
    <div className="bg-brand-dark min-h-screen py-16 relative overflow-hidden text-white border-t-8 border-brand-red">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-end mb-10 border-b border-gray-800 pb-4">
          <div>
            <h1 className="font-display font-black tracking-wider text-5xl text-white mb-2">
              LIVE <span className="text-brand-red">INVENTORY</span>
            </h1>
            <p className="text-gray-400 font-medium tracking-wide">Directly synchronized from our master sheet.</p>
          </div>
          <span className="text-brand-red font-bold tracking-widest uppercase text-sm border-2 border-brand-red px-4 py-2 bg-brand-red/10 animate-pulse">
            {trailers.length} UNITS AVAILABLE
          </span>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-40 flex-col">
            <Loader2 className="w-16 h-16 text-brand-red animate-spin mb-6" />
            <p className="text-gray-300 font-display tracking-widest uppercase text-xl">Connecting to Headquarters...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20 bg-gray-900 border border-brand-red rounded-sm shadow-2xl max-w-2xl mx-auto">
            <p className="text-xl text-brand-red font-display font-bold uppercase tracking-wider">{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {trailers.map((t, idx) => (
              <div key={idx} className="group bg-[#111] rounded-sm shadow-2xl border-2 border-gray-800 overflow-hidden flex flex-col h-full hover:border-brand-red transition-all duration-300">
                <div className="relative h-64 overflow-hidden bg-black border-b-2 border-brand-red/30 group-hover:border-brand-red transition-all">
                  {t.images && t.images.length > 0 ? (
                    <img 
                      src={t.images[0]} 
                      alt={t.name || 'Trailer'} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-700 font-display tracking-widest uppercase text-xs">No Image</div>
                  )}
                  {t.inStock && (
                    <div className="absolute top-4 left-4">
                      <span className={`px-4 py-1.5 text-xs font-black uppercase tracking-wider text-white border-l-4 ${
                        t.inStock.toLowerCase().includes('yes') || t.inStock.toLowerCase() === 'in stock' || t.inStock.toLowerCase() === 'true' 
                          ? 'bg-brand-red/90 border-white' 
                          : 'bg-gray-800/90 border-gray-500 text-gray-400'
                      }`}>
                        {t.inStock}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-[#1a1a1a] to-[#111]">
                  <div className="mb-4 flex justify-between items-center border-b border-gray-800/50 pb-3">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest truncate max-w-[60%]">
                      {t.categories || 'Uncategorized'}
                    </span>
                    <span className="text-xs font-mono text-gray-500 bg-black/50 px-2 py-1 border border-gray-800">
                      SKU: {t.sku || 'N/A'}
                    </span>
                  </div>
                  
                  <h3 className="font-display font-bold text-2xl text-white leading-snug mb-6 group-hover:text-brand-red transition-colors flex-grow">
                    {t.name || 'Unnamed Configuration'}
                  </h3>
                  
                  <div className="mt-auto pt-4 flex items-end justify-between border-t border-gray-800/50">
                    <div>
                      <p className="text-xs text-brand-red font-bold uppercase tracking-widest mb-1">MSRP</p>
                      <span className="font-display font-black text-3xl text-white">
                        {t.regularPrice ? t.regularPrice : 'CALL FOR PRICE'}
                      </span>
                    </div>
                    <button className="bg-transparent border-2 border-gray-600 text-gray-300 hover:bg-white hover:text-brand-dark hover:border-white px-5 py-2 text-sm font-bold uppercase transition-all duration-300 rounded-sm tracking-wider">
                      VIEW
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            {trailers.length === 0 && (
              <div className="col-span-full py-20 text-center border-2 border-dashed border-gray-800 text-gray-500 font-display uppercase tracking-widest">
                No active inventory found in the main sheet.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};