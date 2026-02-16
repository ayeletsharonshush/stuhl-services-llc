
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { Quote, MoveRight, ChevronRight, Eye, Layers } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <div className="py-24 bg-white animate-in slide-in-from-bottom-8 duration-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-brand-red font-black uppercase tracking-[0.4em] text-xs mb-4 block">Proven Excellence</span>
          <h2 className="text-5xl font-black text-brand-navy mb-6">Our Transformations</h2>
          <div className="w-24 h-1.5 bg-brand-gold mx-auto rounded-full mb-8"></div>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">Seeing is believing. Explore our latest work across the metropolitan area.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-50 flex flex-col group cursor-pointer transition-all hover:-translate-y-2"
              onClick={() => setActiveProject(project)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={project.afterImages[0]} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-brand-navy/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-brand-gold text-white p-4 rounded-full shadow-2xl transform scale-75 group-hover:scale-100 transition-transform">
                    <Eye size={32} />
                  </div>
                </div>
              </div>
              
              <div className="p-10 flex-1 flex flex-col">
                <h3 className="text-2xl font-black mb-3 text-brand-navy group-hover:text-brand-gold transition-colors">{project.title}</h3>
                <p className="text-slate-500 text-sm mb-8 font-medium leading-relaxed line-clamp-2">{project.description}</p>
                
                <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center text-[10px] font-black text-white shadow-md shadow-brand-red/20">
                      B
                    </div>
                    <div className="w-8 h-8 rounded-full bg-brand-cyan flex items-center justify-center text-[10px] font-black text-white shadow-md shadow-brand-cyan/20">
                      A
                    </div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Process View</span>
                  </div>
                  <span className="text-[10px] font-black text-brand-navy uppercase tracking-[0.2em] group-hover:text-brand-red transition-colors flex items-center">
                    Project Details <MoveRight size={14} className="ml-2" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Detailed Project View */}
      {activeProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-10 overflow-hidden">
          <div 
            className="absolute inset-0 bg-brand-navy/95 backdrop-blur-lg" 
            onClick={() => setActiveProject(null)} 
          />
          <div className="relative bg-white w-full max-w-6xl max-h-full rounded-[3rem] shadow-2xl overflow-y-auto animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setActiveProject(null)}
              className="sticky top-6 float-right mr-6 z-50 p-4 bg-slate-100 hover:bg-brand-red hover:text-white text-brand-navy rounded-full transition-all shadow-lg"
            >
              <ChevronRight className="rotate-45" size={24} />
            </button>
            
            <div className="p-8 lg:p-20">
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-1 bg-brand-gold rounded-full"></div>
                  <span className="text-brand-gold font-black text-xs tracking-[0.3em] uppercase">{activeProject.category} Excellence</span>
                </div>
                <h2 className="text-4xl lg:text-6xl font-black text-brand-navy mb-6">{activeProject.title}</h2>
                <p className="text-slate-500 text-xl max-w-3xl font-medium leading-relaxed">{activeProject.description}</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-10 mb-16">
                <div className="group">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-brand-red text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">Initial State</span>
                    <h4 className="text-sm font-black text-brand-navy uppercase tracking-widest">Before</h4>
                  </div>
                  <div className="relative aspect-video rounded-3xl overflow-hidden shadow-inner border-4 border-slate-50">
                    <img 
                      src={activeProject.beforeImage} 
                      alt="Project Before" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
                <div className="group">
                  <div className="flex items-center gap-3 mb-4">
                     <span className="bg-brand-cyan text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">Elite Finish</span>
                    <h4 className="text-sm font-black text-brand-navy uppercase tracking-widest">After</h4>
                  </div>
                  <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-brand-navy/20 border-4 border-brand-cyan/20">
                    <img 
                      src={activeProject.afterImages[0]} 
                      alt="Project After" 
                      className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-20">
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] mb-10 text-center">Craftsmanship Details</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {activeProject.afterImages.slice(1).map((img, i) => (
                    <div key={i} className="aspect-square rounded-2xl overflow-hidden shadow-lg border border-slate-100 transition-transform hover:scale-105">
                      <img src={img} alt={`Detail ${i}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="aspect-square rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-300 p-4 text-center">
                    <Layers size={32} className="mb-2 opacity-50" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Premium Finishes</span>
                  </div>
                </div>
              </div>

              <div className="bg-brand-navy rounded-[3rem] p-10 lg:p-20 border border-white/10 relative overflow-hidden text-center shadow-2xl shadow-brand-navy/30">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-brand-gold/20 rounded-full blur-3xl -mt-20"></div>
                <Quote className="text-brand-gold mx-auto mb-8" size={64} />
                <div className="relative z-10 max-w-4xl mx-auto">
                  <p className="text-2xl lg:text-3xl font-bold text-white italic leading-relaxed mb-10">
                    "{activeProject.testimonial.text}"
                  </p>
                  <div className="h-1 w-12 bg-brand-red mx-auto mb-6"></div>
                  <div>
                    <p className="font-black text-brand-gold text-xl uppercase tracking-widest">{activeProject.testimonial.author}</p>
                    <p className="text-brand-cyan text-sm font-bold mt-1 uppercase tracking-tighter">{activeProject.testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
