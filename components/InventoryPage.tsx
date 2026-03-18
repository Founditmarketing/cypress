import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

import { TrailerCard, SheetTrailer } from './TrailerCard';

const BRANDS = ["All", "Big Tex", "TXP", "ANVIL", "Dexter Axle", "Liberty"];

export const InventoryPage: React.FC = () => {
  const [trailers, setTrailers] = useState<SheetTrailer[]>([]);
  const [selectedBrand, setSelectedBrand] = useState('All');
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

  const filteredTrailers = trailers.filter(t => {
    if (selectedBrand === 'All') return true;
    return t.brand?.toLowerCase().includes(selectedBrand.toLowerCase());
  });

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
            {filteredTrailers.length} UNITS AVAILABLE
          </span>
        </div>

        {/* Brand Filter */}
        {!loading && !error && (
          <div className="mb-10 flex flex-wrap gap-3">
            {BRANDS.map(brand => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-5 py-2 font-bold text-sm tracking-wider uppercase rounded-sm transition-all duration-300 ${
                  selectedBrand === brand 
                    ? 'bg-brand-red text-white border-2 border-brand-red shadow-[0_0_15px_rgba(204,0,0,0.5)]' 
                    : 'bg-transparent text-gray-400 border-2 border-gray-700 hover:border-gray-500 hover:text-white'
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        )}

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
            {filteredTrailers.map((t, idx) => (
              <TrailerCard key={t.id || idx.toString()} trailer={t} />
            ))}
            
            {filteredTrailers.length === 0 && (
              <div className="col-span-full py-20 text-center border-2 border-dashed border-gray-800 text-gray-500 font-display uppercase tracking-widest">
                No active inventory found for {selectedBrand === 'All' ? 'the main sheet' : selectedBrand}.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};