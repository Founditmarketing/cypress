import React from 'react';
import { Link } from 'react-router-dom';

export interface SheetTrailer {
  id: string;
  sku: string;
  name: string;
  inStock: string;
  regularPrice: string;
  categories: string;
  images: string[];
}

export const TrailerCard: React.FC<{ trailer: SheetTrailer }> = ({ trailer: t }) => {
  return (
    <div className="group bg-[#111] rounded-sm shadow-2xl border-2 border-gray-800 overflow-hidden flex flex-col h-full hover:border-brand-red transition-all duration-300">
      <div className="relative h-64 overflow-hidden bg-white border-b-2 border-brand-red/30 group-hover:border-brand-red transition-all">
        {t.images && t.images.length > 0 ? (
          <img 
            src={t.images[0]} 
            alt={t.name || 'Trailer'} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 font-display tracking-widest uppercase text-xs">No Image</div>
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
          <Link to={`/inventory/${t.id}`} className="bg-transparent border-2 border-gray-600 text-gray-300 hover:bg-white hover:text-brand-dark hover:border-white px-5 py-2 text-sm font-bold uppercase transition-all duration-300 rounded-sm tracking-wider">
            VIEW
          </Link>
        </div>
      </div>
    </div>
  );
};