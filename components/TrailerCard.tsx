import React from 'react';
import { Link } from 'react-router-dom';
import { Trailer } from '../types';
import { Tag, Ruler, Weight } from 'lucide-react';

export const TrailerCard: React.FC<{ trailer: Trailer }> = ({ trailer }) => {
  return (
    <div className="group bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-gray-200">
        <img 
          src={trailer.images[0]} 
          alt={trailer.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider text-white ${trailer.status === 'In Stock' ? 'bg-green-600' : 'bg-brand-dark'}`}>
            {trailer.status}
          </span>
        </div>
        {trailer.salePrice && (
          <div className="absolute bottom-4 right-4 bg-brand-accent text-brand-dark px-3 py-1 text-xs font-bold uppercase -skew-x-12">
            <span className="skew-x-12">Sale Event</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-2 flex justify-between items-center">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{trailer.category}</span>
          <span className="text-xs font-bold text-brand-red uppercase tracking-widest">{trailer.brand}</span>
        </div>
        <h3 className="font-display font-bold text-xl text-brand-dark leading-tight mb-3 group-hover:text-brand-red transition-colors">
          {trailer.name}
        </h3>
        
        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-600 mb-6 font-medium">
          <div className="flex items-center">
            <Ruler className="w-4 h-4 mr-2 text-gray-400" />
            {trailer.specs.length} L
          </div>
          <div className="flex items-center">
            <Weight className="w-4 h-4 mr-2 text-gray-400" />
            {trailer.specs.gvwr} GVWR
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <div>
            {trailer.salePrice ? (
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 line-through decoration-red-500">${trailer.price.toLocaleString()}</span>
                <span className="font-display font-bold text-2xl text-brand-red">${trailer.salePrice.toLocaleString()}</span>
              </div>
            ) : (
              <span className="font-display font-bold text-2xl text-brand-dark">${trailer.price.toLocaleString()}</span>
            )}
          </div>
          <Link 
            to={`/inventory/${trailer.id}`} 
            className="bg-brand-dark text-white hover:bg-brand-red px-4 py-2 text-sm font-bold uppercase transition-colors"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};