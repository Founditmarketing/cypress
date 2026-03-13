import { Trailer, TrailerCategory } from '../types';

// In a real app, this would be fetched from a CMS like Sanity, Strapi, or a database.
// This file serves as the "Non-Techy Owner's" database representation.

export const INVENTORY: Trailer[] = [
  {
    id: '1',
    sku: '14LP-14',
    name: '14LP Heavy Duty Low Profile Dump',
    brand: 'Big Tex',
    category: TrailerCategory.DUMP,
    price: 12495,
    salePrice: 11995,
    description: 'The 14LP from Big Tex is an ultra-tough, low-profile dump trailer designed for the professional. With an 8-inch I-beam frame and heavy-duty scissor lift, it handles heavy loads with ease.',
    specs: {
      gvwr: '14,000 lbs',
      payload: '10,000 lbs',
      axles: '2 x 7,000# Dexter w/ Electric Brakes',
      length: '14 ft',
      width: '83 in'
    },
    features: ['Scissor Hoist', 'Ramps Included', 'Tarp Kit Installed', 'LED Lighting', 'Powder Coat Finish'],
    images: ['https://picsum.photos/800/600?random=1', 'https://picsum.photos/800/600?random=11'],
    status: 'In Stock',
    isFeatured: true
  },
  {
    id: '2',
    sku: '35SA-12',
    name: '35SA Single Axle Utility',
    brand: 'Big Tex',
    category: TrailerCategory.UTILITY,
    price: 3295,
    description: 'Perfect for home use, landscaping, and light hauling. The 35SA features a pipe top rail for rigidity and versatility.',
    specs: {
      gvwr: '2,995 lbs',
      payload: '1,900 lbs',
      axles: '1 x 3,500# Dexter Quick Lubes',
      length: '12 ft',
      width: '77 in'
    },
    features: ['4ft Ramp Gate', 'Spare Tire Mount', 'Treated Pine Floor', 'Pipe Top Rail'],
    images: ['https://picsum.photos/800/600?random=2'],
    status: 'In Stock'
  },
  {
    id: '3',
    sku: '14GN-25',
    name: '14GN Single Wheel Tandem Gooseneck',
    brand: 'Big Tex',
    category: TrailerCategory.FLATBED,
    price: 15995,
    description: 'A heavy duty gooseneck for farm and ranch. The 14GN is the industry standard for hauling tractors, hay, and heavy equipment.',
    specs: {
      gvwr: '15,900 lbs',
      payload: '11,500 lbs',
      axles: '2 x 7,000# Dexter',
      length: '25 ft (20+5)',
      width: '102 in'
    },
    features: ['Mega Ramps', 'Dual Jacks', 'Toolbox', 'Rub Rail', 'Stake Pockets'],
    images: ['https://picsum.photos/800/600?random=3'],
    status: 'Order Only',
    isFeatured: true
  },
  {
    id: '4',
    sku: '10ET-20',
    name: '10ET Pro Series Equipment',
    brand: 'Big Tex',
    category: TrailerCategory.EQUIPMENT,
    price: 7895,
    description: 'Designed to haul medium-duty equipment like skid steers and compact tractors safely and securely.',
    specs: {
      gvwr: '9,990 lbs',
      payload: '7,500 lbs',
      axles: '2 x 5,200# Dexter',
      length: '20 ft',
      width: '83 in'
    },
    features: ['Stand-up Ramps', 'Removable Fenders', 'D-Rings', 'Adjustable Coupler'],
    images: ['https://picsum.photos/800/600?random=4'],
    status: 'In Stock'
  },
  {
    id: '5',
    sku: 'ANV-CH-18',
    name: 'Anvil Steel Car Hauler',
    brand: 'Anvil',
    category: TrailerCategory.CARGO,
    price: 5495,
    description: 'An open car hauler built to last by Anvil. Features a teardrop fender and slide-in ramps for easy loading of vehicles.',
    specs: {
      gvwr: '7,000 lbs',
      payload: '5,000 lbs',
      axles: '2 x 3,500# Dexter',
      length: '18 ft',
      width: '83 in'
    },
    features: ['Slide-in Ramps', 'Bulldog Coupler', 'Diamond Plate Fenders', 'Brake Away Kit'],
    images: ['https://picsum.photos/800/600?random=5'],
    status: 'In Stock'
  },
  {
    id: '6',
    sku: '22GN-32',
    name: '22GN Tandem Dual Gooseneck',
    brand: 'Big Tex',
    category: TrailerCategory.FLATBED,
    price: 22500,
    salePrice: 21000,
    description: 'The ultimate hotshot trailer. 22GN handles maximum payloads for commercial transport.',
    specs: {
      gvwr: '23,900 lbs',
      payload: '16,000 lbs',
      axles: '2 x 10,000# Oil Bath Dexter',
      length: '32 ft',
      width: '102 in'
    },
    features: ['Torque Tube', 'Under-frame Bridge', 'Dual 12k Jacks', 'LED Lighting'],
    images: ['https://picsum.photos/800/600?random=6'],
    status: 'In Stock',
    isFeatured: true
  },
  {
    id: '7',
    sku: 'TXP-8318',
    name: 'TXP 83x18 Pipe Top',
    brand: 'TXP',
    category: TrailerCategory.UTILITY,
    price: 4595,
    description: 'A heavy duty utility trailer from TXP with a square tube top rail. Ideal for landscapers and general hauling. Comparable to the Big Tex 70PI.',
    specs: {
      gvwr: '7,000 lbs',
      payload: '5,100 lbs',
      axles: '2 x 3,500# Dexter',
      length: '18 ft',
      width: '83 in'
    },
    features: ['Pipe Top Rail', 'Set-back Jack', 'Spring Suspension', 'LED Lights'],
    images: ['https://picsum.photos/800/600?random=7'],
    status: 'In Stock'
  },
  {
    id: '8',
    sku: 'LIB-6x12',
    name: 'Liberty 6x12 Enclosed',
    brand: 'Liberty',
    category: TrailerCategory.CARGO,
    price: 6200,
    salePrice: 5995,
    description: 'Protect your cargo from the elements. The Liberty Enclosed brings durability and American-made value together.',
    specs: {
      gvwr: '3,500 lbs',
      payload: '2,100 lbs',
      axles: '1 x 3,500# Dexter',
      length: '12 ft',
      width: '6 ft'
    },
    features: ['V-Nose Profile', 'Rear Ramp Door', 'Side Door', '12v Dome Light'],
    images: ['https://picsum.photos/800/600?random=8'],
    status: 'In Stock',
    isFeatured: true
  },
  {
    id: '9',
    sku: 'ANV-DZ-14',
    name: 'Anvil 14ft Dumpzilla',
    brand: 'Anvil',
    category: TrailerCategory.DUMP,
    price: 11500,
    description: 'With fold-down sides and a massive payload capacity, the Anvil Dumpzilla is perfect for pallets and loose materials.',
    specs: {
      gvwr: '14,000 lbs',
      payload: '10,500 lbs',
      axles: '2 x 7,000# Dexter',
      length: '14 ft',
      width: '96 in'
    },
    features: ['Fold-Down Sides', 'Scissor Hoist', 'Rear Barn Doors', 'Radial Tires'],
    images: ['https://picsum.photos/800/600?random=9'],
    status: 'In Stock'
  },
  {
    id: '10',
    sku: '25GN-35',
    name: '25GN Heavy Duty Gooseneck',
    brand: 'Big Tex',
    category: TrailerCategory.FLATBED,
    price: 26995,
    description: 'The big daddy of goosenecks. 25GN is equipped for the heaviest loads on the highway.',
    specs: {
      gvwr: '25,900 lbs',
      payload: '18,000 lbs',
      axles: '2 x 12,000# Heavy Duty Dexter',
      length: '35 ft (30+5)',
      width: '102 in'
    },
    features: ['Heavy Duty Suspension', 'Dual 2-Speed Jacks', 'Low Profile Bed', 'Powder Coated'],
    images: ['https://picsum.photos/800/600?random=10'],
    status: 'Order Only'
  }
];