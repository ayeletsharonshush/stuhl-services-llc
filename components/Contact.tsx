
import React, { useState } from 'react';
import { Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Bathroom',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry Received. A project manager from Stuhl Services will contact you within 24 hours.");
    setFormState({
      name: '',
      email: '',
      phone: '',
      projectType: 'Bathroom',
      message: ''
    });
  };

  return (
    <div className="py-24 bg-slate-50 animate-in slide-in-from-right-8 duration-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-5 lg:gap-20 items-start">
          <div className="lg:col-span-2">
            <span className="text-brand-cyan font-black uppercase tracking-[0.4em] text-xs mb-4 block">Consultation</span>
            <h2 className="text-5xl font-black text-brand-navy mb-8 leading-tight">Elevate Your Home Today.</h2>
            <p className="text-slate-600 mb-12 text-lg font-medium leading-relaxed">
              Every masterpiece starts with a conversation. Share your vision with our expert design team for a zero-obligation consultation.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-brand-gold/10 text-brand-gold rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-black text-brand-navy uppercase tracking-widest text-sm mb-1">Direct Line</h4>
                  <p className="text-slate-600 font-bold">(555) 123-4567</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Mon-Sat, 8am - 6pm</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-brand-red/10 text-brand-red rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-black text-brand-navy uppercase tracking-widest text-sm mb-1">Email Inquiry</h4>
                  <p className="text-slate-600 font-bold">estimate@stuhlservices.com</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-brand-cyan/10 text-brand-cyan rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-cyan group-hover:text-white transition-all duration-300">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-black text-brand-navy uppercase tracking-widest text-sm mb-1">Priority Service</h4>
                  <p className="text-slate-600 font-bold">24-Hour callback guaranteed.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 lg:mt-0 lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white p-10 lg:p-16 rounded-[3rem] shadow-2xl shadow-brand-navy/10 border border-white">
              <div className="grid sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Your Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    placeholder="John Stuhl"
                    className="w-full px-6 py-4 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/10 outline-none transition-all font-bold text-brand-navy"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Email Contact</label>
                  <input 
                    type="email" 
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/10 outline-none transition-all font-bold text-brand-navy"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Phone (Optional)</label>
                  <input 
                    type="tel" 
                    value={formState.phone}
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    placeholder="(555) 000-0000"
                    className="w-full px-6 py-4 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/10 outline-none transition-all font-bold text-brand-navy"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Transformation Area</label>
                  <select 
                    value={formState.projectType}
                    onChange={(e) => setFormState({...formState, projectType: e.target.value})}
                    className="w-full px-6 py-4 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/10 outline-none transition-all font-bold text-brand-navy appearance-none"
                  >
                    <option>Bathroom</option>
                    <option>Basement</option>
                    <option>Kitchen</option>
                    <option>Custom Work</option>
                  </select>
                </div>
              </div>

              <div className="mb-10">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Project Vision & Details</label>
                <textarea 
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  placeholder="Tell us about the space you want to redefine..."
                  className="w-full px-6 py-4 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/10 outline-none transition-all font-bold text-brand-navy resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-navy text-white font-black py-6 rounded-2xl hover:bg-brand-red transition-all shadow-xl shadow-brand-navy/30 flex items-center justify-center group uppercase tracking-[0.2em] text-sm"
              >
                Request Estimate
                <Send size={18} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
