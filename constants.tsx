
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Modern Spa Master Suite',
    category: 'Bathroom',
    description: 'Total bathroom renovation including a curbless walk-in shower with linear drain, freestanding soaking tub, and custom dual vanity with integrated lighting.',
    beforeImage: 'https://images.unsplash.com/photo-1507652313519-d4c9174996dd?q=80&w=800&auto=format&fit=crop',
    afterImages: [
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620626011761-9963d7521576?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop'
    ],
    testimonial: {
      text: "Clean, professional, and on time. The tile work is flawless. It feels like we are at a luxury resort every morning.",
      author: "Michelle R.",
      location: "Summit, NJ"
    }
  },
  {
    id: '2',
    title: 'Ultimate Entertainment Level',
    category: 'Basement',
    description: 'Converted a dark, unfinished basement into a multi-functional living space featuring a custom wet bar, media room, and a modern home office suite.',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
    afterImages: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800&auto=format&fit=crop'
    ],
    testimonial: {
      text: "The Stuhl team helped us maximize every square inch. We now have a dedicated space for work and a beautiful area to host friends.",
      author: "James & Kara",
      location: "Morristown, NJ"
    }
  },
  {
    id: '3',
    title: 'Executive Kitchen Transformation',
    category: 'Kitchen',
    description: 'A complete culinary redesign featuring custom shaker cabinetry, professional-grade appliances, and a waterfall quartz island. We focused on maximizing workflow and modern aesthetics.',
    beforeImage: 'https://images.unsplash.com/photo-1556912177-45003447e9cc?q=80&w=800&auto=format&fit=crop',
    afterImages: [
      'https://images.unsplash.com/photo-1556911223-e2f0228ffaa0?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop'
    ],
    testimonial: {
      text: "Stuhl Services turned our dated 90s kitchen into the heart of our home. Their attention to detail on the custom cabinetry was beyond what we expected.",
      author: "David L.",
      location: "Madison, NJ"
    }
  }
];

export const SERVICES = [
  {
    title: 'Bathroom Renovations',
    description: 'Bath transformation, repairs and upgrades including custom tile showers, high-end vanity luxury upgrades.',
    icon: 'Bath'
  },
  {
    title: 'Basement Finishing',
    description: 'Turn your unfinished space into a guest suite, home theater, bar area, or professional home office.',
    icon: 'Warehouse'
  },
  {
    title: 'Kitchen Remodeling',
    description: 'IKEA expert offering complete redesigns, custom cabinetry, island installations, and lighting solutions that blend form and function.',
    icon: 'CookingPot'
  },
  {
    title: 'Custom Work',
    description: 'Custom carpentry, built-ins, and premium storage solutions tailored to your unique lifestyle needs.',
    icon: 'LayoutGrid'
  }
];
