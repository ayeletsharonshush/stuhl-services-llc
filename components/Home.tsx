
import React from 'react';
import { Section } from '../types';
import { SERVICES } from '../constants';
import { CheckCircle, ShieldCheck, MapPin, Users, CookingPot, Bath, Warehouse, LayoutGrid, ArrowRight } from 'lucide-react';

interface HomeProps {
  onPortfolioClick: () => void;
  onContactClick: () => void;
}

const Home: React.FC<HomeProps> = ({ onPortfolioClick, onContactClick }) => {
  const IconMap: any = {
    CookingPot: { icon: CookingPot, color: 'text-brand-red', bg: 'bg-red-50' },
    Bath: { icon: Bath, color: 'text-brand-cyan', bg: 'bg-cyan-50' },
    Warehouse: { icon: Warehouse, color: 'text-brand-navy', bg: 'bg-blue-50' },
    LayoutGrid: { icon: LayoutGrid, color: 'text-brand-gold', bg: 'bg-amber-50' }
  };

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-gold/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-brand-cyan/5 rounded-full -ml-20 -mb-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-12 lg:mb-0">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-brand-navy/5 text-brand-navy mb-8 border border-brand-navy/10 uppercase tracking-widest">
                <MapPin size={14} className="mr-2 text-brand-red" />
                Your Local Trusted Remodeling Team
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold text-brand-navy leading-[1.1] mb-8">
                Crafting Spaces You <span className="text-brand-gold">Love.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed font-medium">
                Specializing in premium bathrooms, kitchens, and basements. <span className="text-brand-navy font-bold">Stuhl Services LLC</span> is a local family-owned company built on trust, quality craftsmanship, and exceptional references.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <button 
                  onClick={onContactClick}
                  className="px-10 py-5 bg-brand-navy text-white font-black rounded-lg hover:bg-brand-red transition-all shadow-xl shadow-brand-navy/20 flex items-center justify-center uppercase tracking-wider text-sm"
                >
                  Book a Consultation
                  <ArrowRight size={18} className="ml-2" />
                </button>
                <button 
                  onClick={onPortfolioClick}
                  className="px-10 py-5 bg-white border-2 border-brand-gold text-brand-gold font-black rounded-lg hover:bg-brand-gold hover:text-white transition-all uppercase tracking-wider text-sm shadow-lg shadow-brand-gold/5"
                >
                  See Our Work
                </button>
              </div>
              
              <div className="mt-16 flex items-center gap-10 border-t border-slate-100 pt-10">
                <div>
                  <div className="text-3xl font-black text-brand-navy">12+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">Local Years</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-brand-gold">100+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">Ref. Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-brand-cyan">100%</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">Satisfaction</div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 border-2 border-brand-gold/20 rounded-3xl -z-10 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-navy/20 transform group-hover:-translate-y-2 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1556911223-e2f0228ffaa0?q=80&w=1000&auto=format&fit=crop" 
                  alt="Modern Home Renovation" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl border border-slate-50">
                <div className="flex items-center gap-4">
                  <div className="bg-brand-cyan text-white p-3 rounded-xl shadow-lg shadow-brand-cyan/30">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <p className="font-black text-brand-navy uppercase tracking-tight text-sm">Owner-Operated</p>
                    <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Certified Pros</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-1/2 -right-20 w-40 h-40 bg-brand-cyan/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="text-brand-gold font-black uppercase tracking-[0.3em] text-xs mb-4 block">Specializations</span>
            <h2 className="text-4xl lg:text-5xl font-black text-brand-navy mb-6">Our Remodeling Expertise</h2>
            <div className="w-20 h-1.5 bg-brand-red mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, idx) => {
              const { icon: Icon, color, bg } = IconMap[service.icon];
              return (
                <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group flex flex-col items-center text-center">
                  <div className={`w-16 h-16 ${bg} ${color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-black mb-4 text-brand-navy">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-navy rounded-[3rem] p-10 lg:p-24 text-white relative overflow-hidden shadow-2xl shadow-brand-navy/40">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-cyan/10 rounded-full -ml-24 -mb-24"></div>
            
            <div className="relative z-10 lg:grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">Expert Service. <span className="text-brand-gold underline decoration-brand-red underline-offset-8">Local Trust.</span></h2>
                <p className="text-slate-300 mb-12 text-lg font-medium leading-relaxed">At Stuhl Services, we treat your home like our own. Our business is built on word-of-mouth and a long list of successful local references.</p>
                
                <ul className="space-y-6">
                  {[
                    "Over 100+ local references available upon request",
                    "Hands-on owner working on all projects for maximum accountability",
                    "Specialized in Kitchen, Bathroom, & Basement finish",
                    "Transparent project timelines & cost estimates",
                    "Detailed cleaning at every job's end"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <div className="bg-brand-red p-1.5 rounded-full mr-4 shadow-lg shadow-brand-red/30">
                        <CheckCircle className="text-white" size={16} />
                      </div>
                      <span className="text-slate-100 font-bold tracking-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-16 lg:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-md hover:bg-white/10 transition-colors group">
                  <Users className="mb-6 text-brand-gold group-hover:scale-110 transition-transform" size={48} />
                  <p className="text-lg font-black uppercase tracking-widest text-white">Local Roots</p>
                  <p className="text-xs text-slate-400 mt-2 font-bold uppercase tracking-tight">Serving Morris and Union Counties in New Jersey</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-md hover:bg-white/10 transition-colors group sm:mt-12">
                  <ShieldCheck className="mb-6 text-brand-cyan group-hover:scale-110 transition-transform" size={48} />
                  <p className="text-lg font-black uppercase tracking-widest text-white">Trusted Pro</p>
                  <p className="text-xs text-slate-400 mt-2 font-bold uppercase tracking-tight">Vetted References</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
