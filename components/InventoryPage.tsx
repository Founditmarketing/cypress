import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

import { TrailerCard, SheetTrailer } from './TrailerCard';

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
              <TrailerCard key={t.id || idx.toString()} trailer={t} />
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