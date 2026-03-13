export interface Trailer {
  id: string;
  sku: string;
  name: string;
  brand: string; // New field
  category: TrailerCategory;
  price: number;
  salePrice?: number;
  description: string;
  specs: {
    gvwr: string;
    payload: string;
    axles: string;
    length: string;
    width: string;
  };
  features: string[];
  images: string[];
  status: 'In Stock' | 'Order Only' | 'Sold';
  isFeatured?: boolean;
  isHidden?: boolean;
}

export enum TrailerCategory {
  UTILITY = 'Utility',
  DUMP = 'Dump',
  EQUIPMENT = 'Equipment',
  CARGO = 'Cargo',
  FLATBED = 'Flatbed/Gooseneck',
  LIVESTOCK = 'Livestock'
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isThinking?: boolean;
}

export interface InventoryFilter {
  category: TrailerCategory | 'All';
  brand: string | 'All'; // New filter
  minPrice: number;
  maxPrice: number;
  search: string;
}