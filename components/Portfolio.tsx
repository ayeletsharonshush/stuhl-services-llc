
import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { Quote, MoveRight, ChevronRight, Eye, Layers, X } from 'lucide-react';

const FadeInSection: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = '', delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [activeProject]);

  return (
    <div className="py-28 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-20">
            <span className="inline-block text-brand-red font-bold uppercase tracking-[0.3em] text-xs mb-4 px-4 py-1.5 bg-brand-red/5 rounded-full">Proven Excellence</span>
            <h2 className="text-5xl text-brand-navy mb-6">Our Transformations</h2>
            <p className="text-brand-charcoal/50 max-w-2xl mx-auto text-lg">Seeing is believing. Explore our latest work across the metropolitan area.</p>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <FadeInSection key={project.id} delay={idx * 150}>
              <div 
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-brand-navy/5 flex flex-col group cursor-pointer hover:-translate-y-2"
                onClick={() => setActiveProject(project)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.afterImages[0]} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-5 left-5">
                    <span className="bg-white/90 backdrop-blur-md text-brand-navy text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-sm">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-brand-navy/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <div className="bg-white text-brand-navy p-4 rounded-full shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Eye size={28} />
                    </div>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-extrabold mb-2 text-brand-navy group-hover:text-brand-gold transition-colors duration-300">{project.title}</h3>
                  <p className="text-brand-charcoal/50 text-sm mb-6 leading-relaxed line-clamp-2">{project.description}</p>
                  
                  <div className="mt-auto pt-6 border-t border-brand-navy/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-brand-red/10 flex items-center justify-center text-[9px] font-bold text-brand-red">B</div>
                      <div className="w-7 h-7 rounded-full bg-brand-cyan/10 flex items-center justify-center text-[9px] font-bold text-brand-cyan">A</div>
                      <span className="text-[10px] font-bold text-brand-charcoal/30 uppercase tracking-wider ml-1">Before / After</span>
                    </div>
                    <span className="text-[11px] font-bold text-brand-navy group-hover:text-brand-gold transition-colors flex items-center gap-1">
                      Details <MoveRight size={12} />
                    </span>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>

      {activeProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8 overflow-hidden">
          <div 
            className="absolute inset-0 bg-brand-charcoal/90 backdrop-blur-md" 
            onClick={() => setActiveProject(null)} 
          />
          <div className="relative bg-white w-full max-w-5xl max-h-[90vh] rounded-3xl shadow-2xl overflow-y-auto animate-fade-up">
            <div className="sticky top-0 z-50 flex justify-end p-5">
              <button 
                onClick={() => setActiveProject(null)}
                className="p-3 bg-brand-navy/5 hover:bg-brand-red hover:text-white text-brand-navy rounded-full transition-all duration-300"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="px-8 pb-12 lg:px-16 lg:pb-16 -mt-4">
              <div className="mb-10">
                <span className="inline-block text-brand-gold font-bold text-xs tracking-[0.3em] uppercase mb-3 px-3 py-1 bg-brand-gold/5 rounded-full">{activeProject.category}</span>
                <h2 className="text-4xl lg:text-5xl text-brand-navy mb-4">{activeProject.title}</h2>
                <p className="text-brand-charcoal/50 text-lg max-w-3xl leading-relaxed">{activeProject.description}</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <div className="group">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-brand-red/10 text-brand-red text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Before</span>
                  </div>
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-brand-navy/5">
                    <img 
                      src={activeProject.beforeImage} 
                      alt="Project Before" 
                      className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
                <div className="group">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-brand-cyan/10 text-brand-cyan text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">After</span>
                  </div>
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg shadow-brand-navy/10 border border-brand-cyan/10">
                    <img 
                      src={activeProject.afterImages[0]} 
                      alt="Project After" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {activeProject.afterImages.length > 1 && (
                <div className="mb-12">
                  <h4 className="text-xs font-bold text-brand-charcoal/30 uppercase tracking-[0.3em] mb-6">Detail Shots</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {activeProject.afterImages.slice(1).map((img, i) => (
                      <div key={i} className="aspect-square rounded-2xl overflow-hidden border border-brand-navy/5 transition-transform hover:scale-[1.03] shadow-sm hover:shadow-md">
                        <img src={img} alt={`Detail ${i}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-brand-navy rounded-3xl p-8 lg:p-14 relative overflow-hidden text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl -mt-20"></div>
                <Quote className="text-brand-gold/30 mx-auto mb-6" size={48} />
                <div className="relative z-10 max-w-3xl mx-auto">
                  <p className="text-xl lg:text-2xl font-medium text-white italic leading-relaxed mb-8">
                    "{activeProject.testimonial.text}"
                  </p>
                  <div className="w-8 h-0.5 bg-brand-gold mx-auto mb-4"></div>
                  <p className="font-extrabold text-brand-gold text-sm uppercase tracking-wider">{activeProject.testimonial.author}</p>
                  <p className="text-brand-cyan/60 text-xs font-semibold mt-1 tracking-wider">{activeProject.testimonial.location}</p>
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
