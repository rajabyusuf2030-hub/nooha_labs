'use client';

import React, { useState } from 'react';
import { Container, Section, Card, Badge, Button, NoohaLogo, cn } from '@nooha/ui';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  Terminal,
  BookOpen,
  Settings,
  Layers,
  Users,
  ShieldCheck,
  Zap,
  Activity,
  ArrowRight,
  Search,
  Book,
  FileText
} from 'lucide-react';

export function DocsFeature() {
  const [activeSection, setActiveSection] = useState('getting-started');
  const [activePage, setActiveTab] = useState('introduction');

  const navigation = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: <Zap size={16} />,
      pages: [
        { id: 'introduction', title: 'Introduction' },
        { id: 'requirements', title: 'Requirements' },
        { id: 'installation', title: 'Installation' },
        { id: 'first-setup', title: 'First Setup' },
      ]
    },
    {
      id: 'administration',
      title: 'Administration',
      icon: <Settings size={16} />,
      pages: [
        { id: 'users', title: 'Users' },
        { id: 'roles', title: 'Roles' },
        { id: 'permissions', title: 'Permissions' },
        { id: 'configuration', title: 'Configuration' },
      ]
    },
    {
      id: 'modules',
      title: 'Modules',
      icon: <Layers size={16} />,
      pages: [
        { id: 'students', title: 'Students' },
        { id: 'academics', title: 'Academics' },
        { id: 'attendance', title: 'Attendance' },
        { id: 'finance', title: 'Finance' },
      ]
    },
    {
      id: 'deployment',
      title: 'Deployment',
      icon: <ShieldCheck size={16} />,
      pages: [
        { id: 'licensing', title: 'Licensing' },
        { id: 'activation', title: 'Activation' },
        { id: 'updates', title: 'Updates' },
        { id: 'troubleshooting', title: 'Troubleshooting' },
      ]
    }
  ];

  const currentSection = navigation.find(n => n.id === activeSection);
  const currentPageTitle = currentSection?.pages.find(p => p.id === activePage)?.title;

  return (
    <main className="pt-20 bg-nooha-navy min-h-screen">
      <Container size="full" className="flex gap-px h-[calc(100vh-80px)] overflow-hidden p-0">

         {/* Sidebar Navigation */}
         <aside className="w-80 border-r border-white/5 bg-nooha-midnight/40 flex flex-col shrink-0">
            <div className="p-8 border-b border-white/5">
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-nooha-blue/10 border border-nooha-blue/20 flex items-center justify-center text-nooha-blue">
                     <Book size={20} />
                  </div>
                  <div>
                     <h2 className="text-white font-black text-xs uppercase tracking-widest">Documentation</h2>
                     <p className="text-zinc-600 text-[9px] font-bold uppercase tracking-[0.3em]">Version 1.0.4</p>
                  </div>
               </div>
               <div className="relative">
                  <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700" />
                  <input
                    placeholder="Quick search..."
                    className="w-full h-11 bg-white/5 border border-white/5 rounded-xl pl-12 pr-4 text-xs text-white focus:outline-none focus:border-nooha-blue/40 transition-all font-medium"
                  />
               </div>
            </div>

            <nav className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
               {navigation.map(group => (
                 <div key={group.id} className="space-y-3">
                    <div className="flex items-center gap-3 px-3">
                       <span className="text-nooha-blue opacity-40">{group.icon}</span>
                       <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em]">{group.title}</span>
                    </div>
                    <div className="space-y-1">
                       {group.pages.map(page => (
                         <button
                           key={page.id}
                           onClick={() => {
                             setActiveSection(group.id);
                             setActiveTab(page.id);
                           }}
                           className={cn(
                             "w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all group flex items-center justify-between",
                             activePage === page.id
                               ? "bg-nooha-blue/10 text-nooha-blue border border-nooha-blue/10 shadow-glow-blue"
                               : "text-zinc-600 hover:text-zinc-300 hover:bg-white/5"
                           )}
                         >
                            {page.title}
                            {activePage === page.id && <ChevronRight size={14} />}
                         </button>
                       ))}
                    </div>
                 </div>
               ))}
            </nav>

            <div className="p-8 border-t border-white/5">
               <Button variant="secondary" size="sm" className="w-full text-[10px]">
                  Technical Support
               </Button>
            </div>
         </aside>

         {/* Content Area */}
         <section className="flex-1 overflow-y-auto bg-noise relative">
            <div className="max-w-4xl mx-auto py-20 px-12">
               {/* Breadcrumbs */}
               <div className="flex items-center gap-3 mb-12 text-[10px] font-black text-zinc-700 uppercase tracking-widest">
                  <span>Nooha Docs</span>
                  <ChevronRight size={12} className="opacity-40" />
                  <span className="text-zinc-500">{currentSection?.title}</span>
                  <ChevronRight size={12} className="opacity-40" />
                  <span className="text-nooha-blue">{currentPageTitle}</span>
               </div>

               <AnimatePresence mode="wait">
                  <motion.div
                    key={activePage}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.4, ease: [0.21, 0.45, 0.32, 0.9] }}
                  >
                     <h1 className="text-6xl font-black text-white tracking-tighter uppercase italic mb-8">{currentPageTitle}</h1>

                     <div className="prose prose-invert prose-zinc max-w-none">
                        <p className="text-xl text-zinc-400 font-medium leading-relaxed mb-12">
                           Understanding the core logic behind Nooha {activePage}. This technical guide
                           outlines the implementation standards and operational parameters for the {currentSection?.title} layer.
                        </p>

                        <div className="grid grid-cols-1 gap-8 mb-16">
                           <Card variant="glass" className="bg-white/5 border-white/5 p-10 rounded-[2.5rem]">
                              <div className="flex items-center gap-4 mb-6 text-nooha-blue">
                                 <Terminal size={20} />
                                 <h4 className="text-sm font-black uppercase tracking-[0.2em]">Platform Specification</h4>
                              </div>
                              <ul className="space-y-4">
                                 {[
                                   'Sovereign multi-tenant data context.',
                                   'Type-safe functional logic kernel.',
                                   'Real-time telemetry and auditing.',
                                   'Cryptographic identity verification.'
                                 ].map(item => (
                                   <li key={item} className="flex items-center gap-4 text-zinc-500 font-medium">
                                      <div className="w-1 h-1 rounded-full bg-nooha-blue shadow-glow-blue" />
                                      {item}
                                   </li>
                                 ))}
                              </ul>
                           </Card>
                        </div>

                        <div className="space-y-12">
                           <h3 className="text-3xl font-black text-white uppercase italic tracking-tight border-b border-white/5 pb-6">Implementation Path</h3>
                           <p className="text-zinc-400 leading-relaxed font-medium">
                              To deploy the {currentPageTitle} capability, the institution must first complete the logic audit
                              phase. This ensures that the technical configuration matches the physical operational reality
                              of the {activeSection} domain.
                           </p>

                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {[
                                { title: 'Security Context', desc: 'Verified identity is required for all state transitions.' },
                                { title: 'Data Integrity', desc: 'Automated validation of synthetic and real datasets.' },
                              ].map(block => (
                                <div key={block.title} className="p-8 rounded-3xl bg-nooha-midnight border border-white/5 group hover:border-nooha-blue/20 transition-all">
                                   <h4 className="text-white font-bold mb-2 group-hover:text-nooha-blue transition-colors uppercase text-[11px] tracking-widest">{block.title}</h4>
                                   <p className="text-xs text-nooha-muted font-medium">{block.desc}</p>
                                </div>
                              ))}
                           </div>
                        </div>
                     </div>

                     {/* Documentation Pagination */}
                     <div className="mt-32 pt-12 border-t border-white/5 flex items-center justify-between">
                        <button className="flex flex-col items-start gap-2 group">
                           <span className="text-[9px] font-black text-zinc-700 uppercase tracking-widest">Previous</span>
                           <span className="text-sm font-bold text-zinc-500 group-hover:text-white transition-colors flex items-center gap-2">
                              <ChevronRight size={14} className="rotate-180" /> Documentation Home
                           </span>
                        </button>
                        <button className="flex flex-col items-end gap-2 group text-right">
                           <span className="text-[9px] font-black text-zinc-700 uppercase tracking-widest">Next</span>
                           <span className="text-sm font-bold text-nooha-blue group-hover:text-white transition-colors flex items-center gap-2">
                              Technical Requirements <ChevronRight size={14} />
                           </span>
                        </button>
                     </div>
                  </motion.div>
               </AnimatePresence>
            </div>
         </section>
      </Container>
    </main>
  );
}
