
import React from 'react';
import { Section } from '../types';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  setSection: (section: Section) => void;
}

const Footer: React.FC<FooterProps> = ({ setSection }) => {
  return (
    <footer className="bg-white py-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-4 mb-10 leading-none">
              <Logo size={48} />
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-tighter text-brand-navy">STUHL</span>
                <span className="text-xs font-bold tracking-[0.4em] text-brand-gold uppercase mt-0.5">SERVICES LLC</span>
              </div>
            </div>
            <p className="text-slate-500 max-w-sm mb-10 leading-relaxed font-medium">
              Stuhl Services LLC is a local, owner-operated remodeling company specializing in kitchens, bathrooms, and basements. Built on trust and quality.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 flex items-center justify-center border-2 border-slate-100 rounded-2xl text-slate-400 hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center border-2 border-slate-100 rounded-2xl text-slate-400 hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center border-2 border-slate-100 rounded-2xl text-slate-400 hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-black text-brand-navy mb-8 uppercase text-xs tracking-[0.3em]">Navigation</h4>
            <ul className="space-y-6">
              <li><button onClick={() => setSection(Section.HOME)} className="text-slate-500 font-bold hover:text-brand-red transition-colors">Home</button></li>
              <li><button onClick={() => setSection(Section.PORTFOLIO)} className="text-slate-500 font-bold hover:text-brand-red transition-colors">Project Gallery</button></li>
              <li><button onClick={() => setSection(Section.CONTACT)} className="text-slate-500 font-bold hover:text-brand-red transition-colors">Contact Us</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-brand-navy mb-8 uppercase text-xs tracking-[0.3em]">Service Area</h4>
            <ul className="space-y-4 text-slate-500 font-bold">
              <li className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></div> Long Hill</li>
              <li className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div> Morristown</li>
              <li className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div> New Providence</li>
              <li className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-brand-navy"></div> Summit</li>
              <li className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></div> Westfield</li>
              <li className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div> Watchung</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-[10px] font-black uppercase tracking-widest pt-12 border-t border-slate-50">
          <p>© 2024 Stuhl Services LLC. All rights reserved.</p>
          <div className="flex gap-10 mt-6 md:mt-0">
            <a href="#" className="hover:text-brand-navy transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-navy transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
