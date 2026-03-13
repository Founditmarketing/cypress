import React from 'react';
import { TrailerCategory, InventoryFilter as IFilter } from '../types';
import { useInventory } from '../context/InventoryContext';

interface Props {
  filter: IFilter;
  setFilter: React.Dispatch<React.SetStateAction<IFilter>>;
}

export const InventoryFilter: React.FC<Props> = ({ filter, setFilter }) => {
  const { inventory } = useInventory();
  const categories = ['All', ...Object.values(TrailerCategory)];
  // Auto-detect brands from current inventory
  const availableBrands = ['All', ...Array.from(new Set(inventory.map(t => t.brand))).sort()] as string[];

  const handleCategoryChange = (cat: string) => {
    setFilter(prev => ({ ...prev, category: cat as TrailerCategory | 'All' }));
  };

  const handleBrandChange = (brand: string) => {
    setFilter(prev => ({ ...prev, brand: brand as string | 'All' }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 sticky top-24">
      <h3 className="font-display font-bold text-xl mb-6 border-b border-gray-100 pb-2">FILTER INVENTORY</h3>
      
      {/* Search */}
      <div className="mb-8">
        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Keyword</label>
        <input 
          type="text" 
          placeholder="Search model, sku..." 
          value={filter.search}
          onChange={(e) => setFilter(prev => ({ ...prev, search: e.target.value }))}
          className="w-full bg-gray-50 border border-gray-200 rounded p-2 text-sm focus:border-brand-red focus:outline-none"
        />
      </div>

      {/* Brands - Dynamic */}
      <div className="mb-8">
        <label className="block text-xs font-bold text-gray-500 uppercase mb-3">Manufacturer</label>
        <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar">
          {availableBrands.map(brand => (
             <label key={brand} className="flex items-center cursor-pointer group">
              <div className="relative flex items-center">
                <input 
                  type="radio" 
                  name="brand"
                  checked={filter.brand === brand}
                  onChange={() => handleBrandChange(brand)}
                  className="peer h-4 w-4 opacity-0 absolute"
                />
                <div className={`w-4 h-4 border-2 rounded-full flex items-center justify-center transition-colors ${filter.brand === brand ? 'border-brand-red' : 'border-gray-300 group-hover:border-gray-400'}`}>
                   {filter.brand === brand && <div className="w-2 h-2 bg-brand-red rounded-full" />}
                </div>
              </div>
              <span className={`ml-3 text-sm ${filter.brand === brand ? 'font-bold text-brand-dark' : 'text-gray-600'}`}>{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <label className="block text-xs font-bold text-gray-500 uppercase mb-3">Category</label>
        <div className="space-y-2">
          {categories.map(cat => (
            <label key={cat} className="flex items-center cursor-pointer group">
              <div className="relative flex items-center">
                <input 
                  type="radio" 
                  name="category"
                  checked={filter.category === cat}
                  onChange={() => handleCategoryChange(cat)}
                  className="peer h-4 w-4 opacity-0 absolute"
                />
                <div className={`w-4 h-4 border-2 rounded-full flex items-center justify-center transition-colors ${filter.category === cat ? 'border-brand-red' : 'border-gray-300 group-hover:border-gray-400'}`}>
                   {filter.category === cat && <div className="w-2 h-2 bg-brand-red rounded-full" />}
                </div>
              </div>
              <span className={`ml-3 text-sm ${filter.category === cat ? 'font-bold text-brand-dark' : 'text-gray-600'}`}>{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <label className="block text-xs font-bold text-gray-500 uppercase mb-3">Max Price</label>
        <input 
          type="range" 
          min="0" 
          max="30000" 
          step="500"
          value={filter.maxPrice}
          onChange={(e) => setFilter(prev => ({ ...prev, maxPrice: parseInt(e.target.value) }))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-red"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-2 font-mono">
          <span>$0</span>
          <span>${filter.maxPrice.toLocaleString()}</span>
        </div>
      </div>

      <button 
        onClick={() => setFilter({ category: 'All', brand: 'All', minPrice: 0, maxPrice: 50000, search: '' })}
        className="w-full py-2 text-xs font-bold text-gray-500 border border-gray-200 hover:bg-gray-50 hover:text-brand-red transition-colors"
      >
        RESET FILTERS
      </button>
    </div>
  );
};