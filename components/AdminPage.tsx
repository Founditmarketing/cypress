import React, { useState } from 'react';
import { useInventory } from '../context/InventoryContext';
import { Trailer, TrailerCategory } from '../types';
import { Trash2, Plus, Copy, Lock, LogOut, Image as ImageIcon, CheckCircle, AlertCircle, Star, Eye, EyeOff } from 'lucide-react';

export const AdminPage: React.FC = () => {
  const { inventory, addTrailer, updateTrailer, deleteTrailer } = useInventory();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Simple authentication for demo
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '1234') { // Mock password
      setIsAuthenticated(true);
    } else {
      alert('Incorrect Password');
    }
  };

  const toggleStatus = (id: string, currentStatus: string) => {
    const newStatus = currentStatus === 'In Stock' ? 'Sold' : 'In Stock';
    updateTrailer(id, { status: newStatus as any });
  };

  const toggleFeatured = (id: string, currentFeatured?: boolean) => {
    updateTrailer(id, { isFeatured: !currentFeatured });
  };

  const toggleHidden = (id: string, currentHidden?: boolean) => {
    updateTrailer(id, { isHidden: !currentHidden });
  };

  const duplicateTrailer = (item: Trailer) => {
    if (window.confirm(`Duplicate ${item.name}? This helps you quickly add similar inventory.`)) {
        const newItem: Trailer = {
            ...item,
            id: Date.now().toString(),
            name: `${item.name} (Copy)`,
            status: 'In Stock',
            sku: `${item.sku}-COPY`
        };
        addTrailer(newItem);
    }
  };

  const NewTrailerForm = () => {
    const [formData, setFormData] = useState<Partial<Trailer>>({
      name: '',
      sku: '',
      brand: 'Big Tex',
      category: TrailerCategory.UTILITY,
      price: 0,
      salePrice: 0,
      description: '',
      images: [''], // Start with empty string for URL input
      status: 'In Stock',
      isFeatured: false,
      specs: { gvwr: '', payload: '', axles: '', length: '', width: '' },
      features: ['Standard Feature']
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Ensure we have at least a placeholder if no image provided
      const finalImages = formData.images && formData.images[0] ? formData.images : ['https://picsum.photos/800/600?grayscale'];
      
      const newTrailer: Trailer = {
        ...formData as Trailer,
        salePrice: formData.salePrice === 0 ? undefined : formData.salePrice,
        images: finalImages,
        id: Date.now().toString(),
      };
      addTrailer(newTrailer);
      setIsAddModalOpen(false);
    };

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto border-t-4 border-brand-red">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
            <div>
                <h3 className="font-display font-bold text-2xl text-brand-dark">ADD NEW TRAILER</h3>
                <p className="text-sm text-gray-500">Enter the details below to add to inventory.</p>
            </div>
            <button onClick={() => setIsAddModalOpen(false)} className="text-gray-400 hover:text-red-500 transition-colors"><LogOut className="w-6 h-6"/></button>
          </div>
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            
            {/* Top Row: Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Trailer Name</label>
                <input required className="w-full border-2 border-gray-100 p-3 rounded focus:border-brand-red outline-none transition-colors" placeholder="e.g. 14LP Dump Trailer" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Brand</label>
                <input required className="w-full border-2 border-gray-100 p-3 rounded focus:border-brand-red outline-none transition-colors" list="brand-suggestions" placeholder="Select or Type..." value={formData.brand} onChange={e => setFormData({...formData, brand: e.target.value})} />
                <datalist id="brand-suggestions">
                    <option value="Big Tex" />
                    <option value="CM Trailers" />
                    <option value="Commander" />
                    <option value="Wells Cargo" />
                </datalist>
              </div>
            </div>

            {/* Price & SKU */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
               <div className="md:col-span-1">
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">SKU / Stock #</label>
                <input required className="w-full border-2 border-gray-100 p-3 rounded focus:border-brand-red outline-none transition-colors" placeholder="e.g. 14LP-14-001" value={formData.sku} onChange={e => setFormData({...formData, sku: e.target.value})} />
              </div>
              <div className="md:col-span-1">
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Category</label>
                <select className="w-full border-2 border-gray-100 p-3 rounded focus:border-brand-red outline-none transition-colors" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value as any})}>
                  {Object.values(TrailerCategory).map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="md:col-span-1">
               <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Price ($)</label>
               <div className="relative">
                 <span className="absolute left-3 top-3 text-gray-400">$</span>
                 <input required type="number" className="w-full border-2 border-gray-100 p-3 pl-8 rounded focus:border-brand-red outline-none transition-colors font-mono" placeholder="0.00" value={formData.price} onChange={e => setFormData({...formData, price: Number(e.target.value)})} />
               </div>
              </div>
              <div className="md:col-span-1">
               <label className="block text-xs font-bold text-gray-500 uppercase mb-2 text-brand-red">Sale Price ($)</label>
               <div className="relative">
                 <span className="absolute left-3 top-3 text-red-200">$</span>
                 <input type="number" className="w-full border-2 border-red-50 p-3 pl-8 rounded focus:border-brand-red outline-none transition-colors font-mono" placeholder="Optional" value={formData.salePrice || ''} onChange={e => setFormData({...formData, salePrice: Number(e.target.value)})} />
               </div>
              </div>
            </div>

            {/* Checkbox for Featured */}
            <div className="flex items-center">
                <input 
                    type="checkbox" 
                    id="isFeatured"
                    checked={formData.isFeatured} 
                    onChange={e => setFormData({...formData, isFeatured: e.target.checked})}
                    className="w-5 h-5 text-brand-red rounded focus:ring-brand-red border-gray-300" 
                />
                <label htmlFor="isFeatured" className="ml-2 text-sm font-bold text-gray-700 uppercase cursor-pointer flex items-center">
                    <Star className="w-4 h-4 mr-1 text-brand-accent fill-brand-accent" /> Mark as Featured Item on Homepage
                </label>
            </div>

            {/* Image URL */}
            <div>
               <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Image URL</label>
               <div className="flex gap-2">
                 <div className="relative flex-grow">
                    <ImageIcon className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                    <input 
                        type="url" 
                        className="w-full border-2 border-gray-100 p-3 pl-10 rounded focus:border-brand-red outline-none transition-colors text-sm" 
                        placeholder="https://example.com/image.jpg" 
                        value={formData.images?.[0] || ''} 
                        onChange={e => setFormData({...formData, images: [e.target.value]})} 
                    />
                 </div>
               </div>
               <p className="text-[10px] text-gray-400 mt-1">Paste a link to an image. If left blank, a placeholder will be used.</p>
               {formData.images?.[0] && (
                   <div className="mt-2 w-32 h-24 bg-gray-100 rounded overflow-hidden border border-gray-200">
                       <img src={formData.images[0]} alt="Preview" className="w-full h-full object-cover" onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/150?text=Invalid+URL')}/>
                   </div>
               )}
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Description</label>
              <textarea className="w-full border-2 border-gray-100 p-3 rounded focus:border-brand-red outline-none transition-colors" rows={3} placeholder="Describe the trailer..." value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
            </div>

            <div className="pt-4 border-t border-gray-100 flex justify-end gap-4">
                <button type="button" onClick={() => setIsAddModalOpen(false)} className="px-6 py-3 font-bold text-gray-500 hover:bg-gray-100 rounded transition-colors">CANCEL</button>
                <button type="submit" className="bg-brand-red text-white font-bold px-8 py-3 rounded hover:bg-red-700 transition-colors shadow-lg shadow-red-100 flex items-center">
                    <Plus className="w-5 h-5 mr-2" /> SAVE TRAILER
                </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
          <div className="text-center mb-8">
            <div className="inline-block p-4 bg-brand-dark rounded-full mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-display font-bold text-2xl text-brand-dark">OWNER LOGIN</h1>
            <p className="text-gray-500 text-sm">Please enter your access code (1234)</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              className="w-full border-2 border-gray-200 p-4 rounded text-center text-xl tracking-widest focus:border-brand-red outline-none transition-colors"
              placeholder="••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="w-full bg-brand-dark text-white font-bold py-4 rounded hover:bg-black transition-colors">
              ACCESS DASHBOARD
            </button>
          </form>
        </div>
      </div>
    );
  }

  const totalValue = inventory.reduce((acc, item) => acc + item.price, 0);
  const soldCount = inventory.filter(i => i.status === 'Sold').length;

  return (
    <div className="bg-gray-100 min-h-screen pb-20">
      {isAddModalOpen && <NewTrailerForm />}
      
      {/* Admin Header */}
      <div className="bg-brand-dark text-white py-8 px-4 shadow-lg sticky top-0 z-40">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="font-display font-bold text-3xl">MANAGER DASHBOARD</h1>
            <p className="text-gray-400 text-sm">Welcome back, Owner.</p>
          </div>
          <button onClick={() => setIsAuthenticated(false)} className="text-gray-400 hover:text-white flex items-center text-sm font-bold uppercase transition-colors">
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-brand-red">
            <p className="text-xs font-bold text-gray-500 uppercase">Total Inventory Value</p>
            <p className="font-display font-bold text-3xl text-brand-dark">${totalValue.toLocaleString()}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <p className="text-xs font-bold text-gray-500 uppercase">Total Units</p>
            <p className="font-display font-bold text-3xl text-brand-dark">{inventory.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
            <p className="text-xs font-bold text-gray-500 uppercase">Units Sold</p>
            <p className="font-display font-bold text-3xl text-brand-dark">{soldCount}</p>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <h2 className="font-display font-bold text-xl text-brand-dark flex items-center">
            INVENTORY LIST <span className="ml-3 bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">{inventory.length} Items</span>
          </h2>
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="w-full sm:w-auto bg-brand-red text-white px-6 py-3 rounded font-bold hover:bg-red-700 transition-colors flex items-center justify-center shadow-lg transform hover:-translate-y-0.5"
          >
            <Plus className="w-5 h-5 mr-2" /> ADD TRAILER
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
                <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                    <th className="text-left p-4 text-xs font-bold text-gray-500 uppercase">Image</th>
                    <th className="text-left p-4 text-xs font-bold text-gray-500 uppercase">Details</th>
                    <th className="text-left p-4 text-xs font-bold text-gray-500 uppercase">Brand</th>
                    <th className="text-left p-4 text-xs font-bold text-gray-500 uppercase">Featured</th>
                    <th className="text-left p-4 text-xs font-bold text-gray-500 uppercase">Visible</th>
                    <th className="text-left p-4 text-xs font-bold text-gray-500 uppercase">Price & Sale</th>
                    <th className="text-left p-4 text-xs font-bold text-gray-500 uppercase">Status</th>
                    <th className="text-right p-4 text-xs font-bold text-gray-500 uppercase">Actions</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                {inventory.map(item => (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors group">
                    <td className="p-4 w-24">
                        <img src={item.images[0]} alt="" className="w-16 h-12 object-cover rounded bg-gray-200 border border-gray-100" />
                    </td>
                    <td className="p-4">
                        <div className="font-bold text-brand-dark">{item.name}</div>
                        <div className="text-xs text-gray-500 font-mono">{item.sku}</div>
                    </td>
                    <td className="p-4">
                        <span className="font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded text-xs uppercase">{item.brand}</span>
                    </td>
                     <td className="p-4">
                        <button onClick={() => toggleFeatured(item.id, item.isFeatured)} className="focus:outline-none">
                            <Star className={`w-5 h-5 ${item.isFeatured ? 'text-brand-accent fill-brand-accent' : 'text-gray-300'}`} />
                        </button>
                    </td>
                    <td className="p-4">
                        <button onClick={() => toggleHidden(item.id, item.isHidden)} className="focus:outline-none" title={item.isHidden ? "Currently Hidden - Click to Show" : "Currently Visible - Click to Hide"}>
                            {item.isHidden ? <EyeOff className="w-5 h-5 text-red-500" /> : <Eye className="w-5 h-5 text-green-500" />}
                        </button>
                    </td>
                    <td className="p-4">
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center">
                                <span className="text-gray-400 mr-1 text-xs">Reg: $</span>
                                <input 
                                    type="number" 
                                    value={item.price}
                                    onChange={(e) => updateTrailer(item.id, { price: Number(e.target.value) })}
                                    className="w-20 border border-gray-200 rounded px-2 py-1 text-xs font-bold focus:border-brand-red outline-none transition-colors"
                                />
                            </div>
                            <div className="flex items-center">
                                <span className="text-red-300 mr-1 text-xs">Sale: $</span>
                                <input 
                                    type="number" 
                                    placeholder="--"
                                    value={item.salePrice || ''}
                                    onChange={(e) => updateTrailer(item.id, { salePrice: e.target.value ? Number(e.target.value) : undefined })}
                                    className="w-20 border border-red-100 rounded px-2 py-1 text-xs font-bold text-brand-red focus:border-brand-red outline-none transition-colors"
                                />
                            </div>
                        </div>
                    </td>
                    <td className="p-4">
                        <button 
                        onClick={() => toggleStatus(item.id, item.status)}
                        className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase transition-colors border ${
                            item.status === 'In Stock' 
                            ? 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100' 
                            : 'bg-gray-800 text-white border-gray-800 hover:bg-black'
                        }`}
                        >
                        {item.status === 'In Stock' ? <CheckCircle className="w-3 h-3"/> : <AlertCircle className="w-3 h-3"/>}
                        {item.status}
                        </button>
                    </td>
                    <td className="p-4 text-right">
                        <div className="flex justify-end gap-2">
                            <button 
                                onClick={() => duplicateTrailer(item)}
                                title="Duplicate Trailer"
                                className="text-gray-400 hover:text-brand-dark bg-white border border-gray-200 hover:border-brand-dark p-2 rounded transition-all"
                            >
                                <Copy className="w-4 h-4" />
                            </button>
                            <button 
                                onClick={() => { if(window.confirm('Are you sure you want to PERMANENTLY remove this trailer from inventory?')) deleteTrailer(item.id); }}
                                title="Remove Trailer"
                                className="text-white bg-red-100 hover:bg-red-600 text-red-600 hover:text-white p-2 rounded transition-all border border-red-200 hover:border-red-600"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
          </div>
          {inventory.length === 0 && (
            <div className="p-16 text-center text-gray-500 bg-gray-50 flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4 text-gray-400">
                  <AlertCircle className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">No inventory found</h3>
              <p className="mb-6 max-w-sm mx-auto">Your lot is empty. Click the "Add Trailer" button above to start stocking up.</p>
              <button onClick={() => setIsAddModalOpen(true)} className="text-brand-red font-bold hover:underline">Add Your First Trailer</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};