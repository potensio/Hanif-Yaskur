import React from 'react';
import { WorkCard } from './WorkCard';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'BeliElektronik.com',
    category: 'Gadget & Electronic Commerce',
    description: 'Complete brand identity system for a forward-thinking tech startup, including logo design, color palette, and comprehensive brand guidelines.',
    imageUrl: 'https://fpssel7vjdq04mcq.public.blob.vercel-storage.com/Plastic.png',
    link: '#',
  },
  {
    id: '2',
    title: 'BugsRabbit',
    category: 'Annotation Tools',
    description: 'Comprehensive design system for an e-commerce platform, featuring 200+ components, design tokens, and implementation guidelines for consistent user experiences.',
    imageUrl: 'https://fpssel7vjdq04mcq.public.blob.vercel-storage.com/Plastic.png',
    link: '#',
  },
  {
    id: '3',
    title: 'Swissbel-hotel',
    category: 'Mobile App MVP',
    description: 'Complete UI/UX redesign of a productivity operating system, focusing on minimalism and user workflow optimization for enhanced daily productivity.',
    imageUrl: 'https://fpssel7vjdq04mcq.public.blob.vercel-storage.com/Plastic.png',
    link: '#',
  },
  {
    id: '4',
    title: 'Ayana Wedding',
    category: 'Web Experience',
    description: 'Modern banking web platform featuring intuitive account management, seamless transactions, and comprehensive financial tools designed for the digital-first customer.',
    imageUrl: 'https://fpssel7vjdq04mcq.public.blob.vercel-storage.com/Plastic.png',
    link: '#',
  },
  {
    id: '5',
    title: 'Screen Bolt',
    category: 'Mobile App Design',
    description: 'Native mobile application for creative collaboration, featuring real-time editing, cloud synchronization, and an intuitive gesture-based interface for mobile workflows.',
    imageUrl: 'https://fpssel7vjdq04mcq.public.blob.vercel-storage.com/Plastic.png',
    link: '#',
  },
  {
    id: '6',
    title: 'Analytics Pro',
    category: 'Dashboard Interface',
    description: 'Advanced analytics dashboard with interactive data visualization, custom reporting tools, and AI-powered insights for enterprise-level business intelligence.',
    imageUrl: 'https://fpssel7vjdq04mcq.public.blob.vercel-storage.com/Plastic.png',
    link: '#',
  },
];

export const FeaturedWork: React.FC = () => {
  return (
    <section id="work" className="max-w-7xl sm:px-8 mx-auto px-6">
      <div className="mb-8 sm:mb-12">
        <h2 className="text-4xl lg:text-5xl text-black mb-4 font-geist tracking-tighter font-medium">
          Featured Work
        </h2>
        <p className="text-lg sm:text-2xl text-black/40 leading-relaxed max-w-3xl font-geist tracking-tighter font-medium">
          A mix of real-world and personal projects — from ideas to working products.
        </p>
      </div>
    </section>
  );
};