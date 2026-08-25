'use client';

import React, { useState } from 'react';
import { Container, Section, Card, Badge, Button, NoohaLogo, cn } from '@nooha/ui';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  FileText,
  Lock,
  Eye,
  ArrowRight,
  ChevronRight,
  Info,
  Scale,
  Building2,
  Mail,
  Phone
} from 'lucide-react';

export function LegalFeature() {
  const [activePolicy, setActivePolicy] = useState('privacy');

  const policies = [
    { id: 'privacy', title: 'Privacy Policy', icon: <Eye size={18} /> },
    { id: 'terms', title: 'Terms of Service', icon: <Scale size={18} /> },
    { id: 'data', title: 'Data Handling', icon: <Lock size={18} /> },
    { id: 'onboarding', title: 'Onboarding Terms', icon: <FileText size={18} /> },
  ];

  return (
    <main className="pt-20 bg-nooha-navy min-h-screen">
      <Section padding="xl" className="relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-nooha-blue/5 blur-[120px] rounded-full pointer-events-none" />

        <Container>
          <div className="flex flex-col lg:flex-row gap-24">
             {/* Sidebar Selection */}
             <div className="lg:w-80 shrink-0">
                <Badge variant="primary" className="mb-6 uppercase tracking-widest text-[9px]">Legal Ecosystem</Badge>
                <h1 className="text-5xl font-black text-white tracking-tighter uppercase italic mb-12">Compliance & Governance.</h1>

                <div className="space-y-2">
                   {policies.map(p => (
                     <button
                        key={p.id}
                        onClick={() => setActivePolicy(p.id)}
                        className={cn(
                          "w-full flex items-center gap-4 p-5 rounded-2xl transition-all group",
                          activePolicy === p.id
                            ? "bg-nooha-blue text-white shadow-glow-blue border border-nooha-blue/20"
                            : "text-zinc-600 hover:text-zinc-300 hover:bg-white/5 border border-transparent"
                        )}
                     >
                        <div className={cn(
                          "w-8 h-8 rounded-lg flex items-center justify-center transition-all",
                          activePolicy === p.id ? "bg-white/10 text-white" : "bg-nooha-blue/5 text-nooha-blue"
                        )}>
                           {p.icon}
                        </div>
                        <span className="text-[11px] font-black uppercase tracking-widest text-left">{p.title}</span>
                     </button>
                   ))}
                </div>

                <div className="mt-20 p-8 rounded-3xl bg-nooha-slate border border-white/5 space-y-6">
                   <div className="flex items-center gap-4 text-nooha-blue">
                      <Building2 size={20} />
                      <h4 className="text-[10px] font-black uppercase tracking-widest">Entity Info</h4>
                   </div>
                   <div className="space-y-4 text-xs font-medium text-nooha-muted leading-relaxed">
                      <p>Nooha Labs Engineering Studio</p>
                      <p>Mombasa HQ, Kenya</p>
                      <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                         <Mail size={14} className="text-zinc-700" />
                         <span>legal@noohalabs.com</span>
                      </div>
                   </div>
                </div>
             </div>

             {/* Content Area */}
             <div className="flex-1 max-w-3xl">
                <AnimatePresence mode="wait">
                   <motion.div
                      key={activePolicy}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.4, ease: [0.21, 0.45, 0.32, 0.9] }}
                      className="bg-nooha-midnight/40 rounded-[4rem] border border-white/5 p-12 md:p-24 shadow-2xl relative overflow-hidden"
                   >
                      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

                      <div className="relative z-10">
                         <div className="flex items-center justify-between mb-16">
                            <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.5em]">Standard v1.0.2</span>
                            <span className="text-[10px] font-black text-nooha-blue uppercase tracking-widest italic">Last Update: Aug 2026</span>
                         </div>

                         <h2 className="text-6xl font-black text-white tracking-tighter uppercase italic mb-12">
                            {policies.find(p => p.id === activePolicy)?.title}
                         </h2>

                         <div className="prose prose-invert prose-zinc max-w-none space-y-12">
                            <p className="text-2xl text-zinc-400 font-medium leading-relaxed italic">
                               "Our commitment to institutional transparency and data sovereignty defines every technical protocol within the Nooha ecosystem."
                            </p>

                            <div className="space-y-8">
                               <h3 className="text-3xl font-black text-white tracking-tight border-b border-white/5 pb-4">Logic Governance</h3>
                               <p className="text-nooha-muted leading-relaxed font-medium">
                                 The following protocols outline how institutional data is processed, isolated, and
                                 audited within the multi-tenant context of the Nooha Platform. These standards are
                                 binding for all verified technical integrations and customer subscriptions.
                               </p>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                               {[
                                 { t: 'Institutional Isolation', d: 'All data is cryptographically separated at the kernel layer.' },
                                 { t: 'Verified Identity', d: 'Terminal access is restricted to authenticated human operators.' },
                                 { t: 'Audit Integrity', d: 'Immutable logs are maintained for all state-changing operations.' },
                               ].map(item => (
                                 <div key={item.t} className="p-8 rounded-3xl bg-white/5 border border-white/5 group hover:border-nooha-blue/20 transition-all">
                                    <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest group-hover:text-nooha-blue transition-colors">{item.t}</h4>
                                    <p className="text-sm text-zinc-500 font-medium leading-relaxed">{item.d}</p>
                                 </div>
                               ))}
                            </div>
                         </div>

                         <div className="mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                            <p className="text-xs text-zinc-600 font-medium max-w-sm">By using the Nooha Platform, you acknowledge and agree to these technical and legal governance protocols.</p>
                            <Button variant="outline" className="px-10">Download PDF Pack</Button>
                         </div>
                      </div>
                   </motion.div>
                </AnimatePresence>
             </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
