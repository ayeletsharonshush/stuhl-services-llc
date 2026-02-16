
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Modern Spa Master Suite',
    category: 'Bathroom',
    description: 'Total bathroom renovation including a curbless walk-in shower with linear drain, freestanding soaking tub, and custom dual vanity with integrated lighting.',
    beforeImage: '/images/bathroom-before.jpg',
    afterImages: [
      '/images/bathroom-after_1.jpg',
      '/images/bathroom-after_2.jpg',
      '/images/bathroom-after_3.jpg'
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
    beforeImage: '/images/basement-before.jpg',
    afterImages: [
      '/images/basement-after_1.jpg',
      '/images/basement-after_2.jpg',
      '/images/basement-after_3.jpg'
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
    beforeImage: '/images/kitchen-before.jpg',
    afterImages: [
      '/images/kitchen-after_1.jpg',
      '/images/kitchen-after_2.jpg',
      '/images/kitchen-after_3.jpg'
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
