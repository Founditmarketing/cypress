import React, { useState } from 'react';
import { InventoryFilter } from './InventoryFilter';
import { TrailerCard } from './TrailerCard';
import { useInventory } from '../context/InventoryContext';
import { InventoryFilter as IFilter } from '../types';

export const InventoryPage: React.FC = () => {
  const { inventory } = useInventory();
  const [filter, setFilter] = useState<IFilter>({
    category: 'All',
    brand: 'All',
    minPrice: 0,
    maxPrice: 50000,
    search: ''
  });

  const filteredInventory = inventory.filter(item => {
    if (item.isHidden) return false;
    const matchesCategory = filter.category === 'All' || item.category === filter.category;
    const matchesBrand = filter.brand === 'All' || item.brand === filter.brand;
    const matchesPrice = item.price <= filter.maxPrice;
    const matchesSearch = item.name.toLowerCase().includes(filter.search.toLowerCase()) || 
                          item.sku.toLowerCase().includes(filter.search.toLowerCase());
    return matchesCategory && matchesBrand && matchesPrice && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-1/4">
            <InventoryFilter filter={filter} setFilter={setFilter} />
          </div>

          {/* Grid */}
          <div className="w-full md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h1 className="font-display font-bold text-3xl text-brand-dark">
                {filter.category === 'All' ? 'FULL INVENTORY' : `${filter.category} TRAILERS`}
              </h1>
              <span className="text-gray-500 font-medium">{filteredInventory.length} Results</span>
            </div>

            {filteredInventory.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                {filteredInventory.map(t => <TrailerCard key={t.id} trailer={t} />)}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-lg border border-gray-100">
                <p className="text-xl text-gray-500 font-display">No trailers found matching your criteria.</p>
                <button 
                  onClick={() => setFilter({ category: 'All', brand: 'All', minPrice: 0, maxPrice: 50000, search: '' })}
                  className="mt-4 text-brand-red font-bold hover:underline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};