import React, { createContext, useState, useContext, useEffect } from 'react';
import { Trailer, TrailerCategory } from '../types';
import { INVENTORY as INITIAL_INVENTORY } from '../data/inventory';

interface InventoryContextType {
  inventory: Trailer[];
  addTrailer: (trailer: Trailer) => void;
  updateTrailer: (id: string, updates: Partial<Trailer>) => void;
  deleteTrailer: (id: string) => void;
}

const InventoryContext = createContext<InventoryContextType | undefined>(undefined);

export const InventoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize with data from the static file, or localStorage if available for persistence demo
  const [inventory, setInventory] = useState<Trailer[]>(() => {
    const saved = localStorage.getItem('bigtex_inventory');
    return saved ? JSON.parse(saved) : INITIAL_INVENTORY;
  });

  // Persist changes
  useEffect(() => {
    localStorage.setItem('bigtex_inventory', JSON.stringify(inventory));
  }, [inventory]);

  const addTrailer = (trailer: Trailer) => {
    setInventory(prev => [trailer, ...prev]);
  };

  const updateTrailer = (id: string, updates: Partial<Trailer>) => {
    setInventory(prev => prev.map(item => item.id === id ? { ...item, ...updates } : item));
  };

  const deleteTrailer = (id: string) => {
    setInventory(prev => prev.filter(item => item.id !== id));
  };

  return (
    <InventoryContext.Provider value={{ inventory, addTrailer, updateTrailer, deleteTrailer }}>
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventory = () => {
  const context = useContext(InventoryContext);
  if (context === undefined) {
    throw new Error('useInventory must be used within an InventoryProvider');
  }
  return context;
};