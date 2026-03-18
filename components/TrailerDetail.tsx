import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Truck, Shield, Calendar, Phone, Cog, Loader2 } from 'lucide-react';
import { QuoteModal } from './QuoteModal';
import { TrailerCard, SheetTrailer } from './TrailerCard';

export const TrailerDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [trailers, setTrailers] = useState<SheetTrailer[]>([]);
  const [loading, setLoading] = useState(true);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  
  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const res = await fetch('/api/inventory');
        if (res.ok) {
          const data = await res.json();
          setTrailers(data);
        }
      } catch (err) {
        console.error('Failed to load detail inventory', err);
      } finally {
        setLoading(false);
      }
    };
    fetchInventory();
  }, []);

  const trailer = trailers.find(t => t.id === id);

  if (loading) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center bg-gray-50">
        <Loader2 className="w-12 h-12 text-brand-red animate-spin mb-4" />
        <h2 className="text-xl font-bold tracking-widest uppercase text-gray-500 font-display">Verifying Inventory...</h2>
      </div>
    );
  }

  if (!trailer) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-4 font-display uppercase tracking-widest text-brand-dark">Trailer not found</h2>
        <Link to="/inventory" className="text-brand-red font-bold uppercase tracking-widest hover:underline">Back to Inventory</Link>
      </div>
    );
  }

  // Find similar trailers
  const similarTrailers = trailers
    .filter(t => t.categories === trailer.categories && t.id !== trailer.id)
    .slice(0, 3);

  const hasDexterAxles = trailer.name?.toLowerCase().includes('dexter') || false;

  const cleanHtmlContent = (html?: string) => {
    if (!html) return '';
    // Remove literal "\n" strings
    let cleaned = html.replace(/\\n/g, ' ');
    // Remove empty HTML tags that might survive
    cleaned = cleaned.replace(/<p>\s*<\/p>/gi, '').replace(/(<br\s*\/?>\s*)+/gi, '<br />');
    
    // Check if there's actual readable text or media
    const strippedText = cleaned.replace(/<[^>]*>?/gm, '').trim();
    const hasVisibleMedia = /<(img|iframe|video|table)/i.test(cleaned);
    
    if (!strippedText && !hasVisibleMedia) return '';
    return cleaned.trim();
  };

  const cleanDescription = cleanHtmlContent(trailer.shortDescription);
  const cleanSpecs = cleanHtmlContent(trailer.htmlSpecs);

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
        trailerName={trailer.name}
      />

      {/* Breadcrumb / Back */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Link to="/inventory" className="inline-flex items-center text-gray-500 hover:text-brand-red transition-colors text-sm font-bold uppercase tracking-wide">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Inventory
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Images */}
          <div className="space-y-4">
            <div className="bg-white p-2 shadow-sm rounded-lg overflow-hidden border border-gray-100 relative">
              <img 
                src={trailer.images && trailer.images[0] ? trailer.images[0] : '/placeholder.jpg'} 
                alt={trailer.name} 
                className="w-full h-auto object-cover rounded"
              />
              {hasDexterAxles && (
                 <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm border-2 border-[#004B8D] text-[#004B8D] px-3 py-1 rounded-sm shadow-lg">
                    <div className="flex items-center gap-2">
                        <Cog className="w-5 h-5 animate-spin-slow" />
                        <div>
                            <span className="block text-[10px] font-bold uppercase leading-none">Equipped With</span>
                            <span className="block text-sm font-black uppercase leading-none">DEXTER AXLES</span>
                        </div>
                    </div>
                 </div>
              )}
            </div>
            <div className="grid grid-cols-4 gap-4">
               {/* Mock thumbnails */}
               {trailer.images && trailer.images.length > 0 ? (
                 trailer.images.slice(0, 4).map((img, i) => (
                   <div key={i} className="bg-white p-1 shadow-sm rounded border border-gray-100 cursor-pointer hover:border-brand-red opacity-80 hover:opacity-100 transition-all">
                     <img src={img} className="w-full h-20 object-cover rounded-sm" alt={`View ${i}`} />
                   </div>
                 ))
               ) : (
                 <div className="bg-gray-100 h-20 w-full rounded col-span-4 flex items-center justify-center text-xs text-gray-400 uppercase tracking-widest font-bold">No additional photos</div>
               )}
            </div>

            {/* Quick Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <Shield className="w-8 h-8 text-brand-red mx-auto mb-2" />
                <span className="block text-xs font-bold uppercase text-gray-600">Secure Purchase</span>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <Truck className="w-8 h-8 text-brand-red mx-auto mb-2" />
                <span className="block text-xs font-bold uppercase text-gray-600">Nationwide Shipping</span>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <Calendar className="w-8 h-8 text-brand-red mx-auto mb-2" />
                <span className="block text-xs font-bold uppercase text-gray-600">Financing Available</span>
              </div>
            </div>
          </div>

          {/* Right Column: Details */}
          <div>
            <div className="mb-6">
              <div className="flex gap-2 mb-3">
                <span className="inline-block bg-brand-dark text-white text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-sm">
                  {trailer.categories || 'TRAILER'}
                </span>
                <span className="inline-block bg-gray-200 text-gray-700 text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-sm">
                  {trailer.inStock?.toUpperCase() || 'CHECK STATUS'}
                </span>
              </div>
              <h1 className="font-display font-bold text-4xl text-brand-dark mb-2 leading-tight">
                {trailer.name}
              </h1>
              <p className="text-gray-500 text-sm font-mono">SKU: {trailer.sku}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
              <div className="flex items-end justify-between mb-6">
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase mb-1">Our Price</p>
                  <div className="flex items-baseline gap-3">
                    <span className="font-display font-bold text-4xl text-brand-dark">{trailer.regularPrice || 'CALL FOR PRICE'}</span>
                  </div>
                </div>
                <div className={`px-4 py-2 rounded font-bold text-sm uppercase ${trailer.inStock?.toLowerCase().includes('yes') || trailer.inStock?.toLowerCase().includes('in stock') ? 'bg-green-100 text-green-700' : 'bg-brand-dark text-white'}`}>
                  {trailer.inStock || 'Call for Availability'}
                </div>
              </div>

              <div className="space-y-3">
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full bg-brand-red text-white font-display font-bold text-xl py-4 rounded-sm hover:bg-red-700 transition-colors shadow-lg shadow-red-100 flex items-center justify-center uppercase tracking-wider"
                >
                   GET BEST PRICE
                </button>
                <button className="w-full border-2 border-brand-dark text-brand-dark font-display font-bold text-xl py-3 rounded-sm hover:bg-gray-50 transition-colors flex items-center justify-center uppercase tracking-wider">
                   <Phone className="w-5 h-5 mr-3" /> (281) 373-4905
                </button>
              </div>
            </div>

            {cleanDescription && (
              <div className="mb-8 border-b border-gray-200 pb-8">
                <h3 className="font-display font-bold text-xl mb-4 border-b border-gray-200 pb-2">DESCRIPTION</h3>
                <div 
                  className="prose-light text-gray-600 leading-relaxed text-lg" 
                  dangerouslySetInnerHTML={{ __html: cleanDescription }}
                />
              </div>
            )}

            {cleanSpecs && (
              <div className="mb-10 bg-[#111] p-6 lg:p-8 rounded-sm shadow-xl border border-gray-800 text-gray-300">
                <h3 className="font-display font-bold text-3xl mb-6 border-b border-gray-800 pb-3 text-white uppercase tracking-widest">
                  Specifications
                </h3>
                <div 
                  className="prose-dark" 
                  dangerouslySetInnerHTML={{ __html: cleanSpecs }} 
                />
              </div>
            )}

            <div className="grid grid-cols-1 gap-8 mb-8">
              <div>
                <h3 className="font-display font-bold text-xl mb-4 border-b border-gray-200 pb-2">QUICK OVERVIEW</h3>
                <ul className="space-y-3">
                    <li className="flex justify-between items-center text-sm border-b border-gray-50 pb-2">
                      <span className="font-bold text-gray-500 uppercase">CATEGORY</span>
                      <span className="font-medium text-brand-dark uppercase">{trailer.categories || 'Various'}</span>
                    </li>
                    <li className="flex justify-between items-center text-sm border-b border-gray-50 pb-2">
                      <span className="font-bold text-gray-500 uppercase">AVAILABILITY</span>
                      <span className="font-medium text-brand-dark uppercase">{trailer.inStock || 'Check with dealer'}</span>
                    </li>
                    <li className="flex justify-between items-center text-sm border-b border-gray-50 pb-2">
                      <span className="font-bold text-gray-500 uppercase">STOCK ID</span>
                      <span className="font-medium text-brand-dark uppercase">{trailer.id || 'N/A'}</span>
                    </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Similar Inventory Section */}
        {similarTrailers.length > 0 && (
          <div className="mt-24 pt-12 border-t border-gray-200">
             <h3 className="font-display font-bold text-3xl text-brand-dark mb-8">YOU MIGHT ALSO LIKE</h3>
             <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
               {similarTrailers.map(t => (
                 <TrailerCard key={t.id || t.sku} trailer={t} />
               ))}
             </div>
          </div>
        )}
      </div>
    </div>
  );
};