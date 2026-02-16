
import React from 'react';
import { Section } from '../types';
import Logo from './Logo';

interface NavbarProps {
  activeSection: Section;
  setSection: (section: Section) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setSection }) => {
  const navItems = [
    { label: 'Home', value: Section.HOME },
    { label: 'Portfolio', value: Section.PORTFOLIO },
    { label: 'Contact', value: Section.CONTACT },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div 
            className="flex items-center cursor-pointer group gap-3"
            onClick={() => setSection(Section.HOME)}
          >
            <Logo size={32} className="group-hover:scale-110 transition-transform duration-300" />
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-black tracking-tighter text-brand-navy uppercase">
                STUHL
              </span>
              <span className="text-[10px] font-bold tracking-[0.35em] text-brand-gold uppercase -mt-0.5">
                SERVICES LLC
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setSection(item.value)}
                className={`text-sm font-bold tracking-wide transition-all hover:text-brand-red ${
                  activeSection === item.value 
                    ? 'text-brand-navy border-b-2 border-brand-red pb-1' 
                    : 'text-slate-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <div className="flex space-x-2">
               {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => setSection(item.value)}
                  className={`text-[10px] font-bold px-3 py-1.5 rounded-full transition-colors ${
                    activeSection === item.value 
                      ? 'bg-brand-navy text-white' 
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
