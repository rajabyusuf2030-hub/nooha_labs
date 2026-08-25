'use client';

import React, { useState } from 'react';
import { Container, Section, Card, Badge, Button, NoohaLogo, cn } from '@nooha/ui';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  ShieldCheck,
  Database,
  Zap,
  Cpu,
  Users,
  Settings,
  Layout,
  Globe,
  ArrowRight,
  Terminal,
  Activity,
  Server,
  Lock,
  Search
} from 'lucide-react';

export function PlatformFeature() {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);

  const layers = [
    {
      id: 'experiences',
      title: 'Experiences',
      detail: 'Multi-channel access through specialized Web, Desktop, and Mobile interfaces.',
      items: ['Dashboard', 'Web Portal', 'Mobile App'],
      icon: <Layout size={20} />,
      color: 'border-nooha-blue'
    },
    {
      id: 'products',
      title: 'Products',
      detail: 'Proprietary logic engines built for specific domain requirements.',
      items: ['Nooha ERP', 'Rental Engine', 'AI Assistant'],
      icon: <Zap size={20} />,
      color: 'border-nooha-green'
    },
    {
      id: 'modules',
      title: 'Modules',
      detail: 'Functional building blocks that expand the core platform capability.',
      items: ['Academic Core', 'Finance Logic', 'Telemetry'],
      icon: <Layers size={20} />,
      color: 'border-nooha-cyan'
    },
    {
      id: 'core-services',
      title: 'Core Services',
      detail: 'Shared foundation for identity, governance, and institutional structure.',
      items: ['Identity', 'RBAC', 'Configuration'],
      icon: <Settings size={20} />,
      color: 'border-nooha-violet'
    },
    {
      id: 'data-tenancy',
      title: 'Data / Tenancy',
      detail: 'Cryptographic isolation ensuring institution-wide data sovereignty.',
      items: ['Tenant Context', 'Private Storage', 'Audit Logs'],
      icon: <Database size={20} />,
      color: 'border-nooha-blue'
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure',
      detail: 'High-availability cloud environment engineered for zero downtime.',
      items: ['GCP / Firebase', 'Auto-scaling', 'Encrypted Transport'],
      icon: <Server size={20} />,
      color: 'border-white/20'
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Experience */}
      <Section padding="xl" className="relative overflow-hidden bg-nooha-navy">
        <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-nooha-blue/5 blur-[120px] rounded-full pointer-events-none" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="primary" className="mb-8 font-black tracking-[0.4em] px-5 py-2 uppercase">
                The Nooha Platform
              </Badge>
              <h1 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[1.05]">
                A connected foundation for <span className="text-nooha-blue">institutional technology.</span>
              </h1>
              <p className="text-body text-xl mb-12 font-medium">
                Nooha is more than a list of features. It is a structured technical architecture
                designed for long-term multi-tenant scale and uncompromising security.
              </p>
              <div className="flex flex-wrap gap-5">
                <Button variant="premium" size="xl" href="/docs" className="group">
                  Technical Documentation <Terminal size={20} className="ml-2" />
                </Button>
                <Button variant="secondary" size="xl" href="#architecture" className="px-12">
                  Explore Architecture
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-video rounded-[3rem] bg-nooha-slate border border-white/5 overflow-hidden flex items-center justify-center p-12 text-center group"
            >
               <div className="absolute inset-0 bg-grid-white opacity-[0.03]" />
               <div className="relative z-10 space-y-8">
                  <div className="w-20 h-20 rounded-[2rem] bg-nooha-blue/10 border border-nooha-blue/20 flex items-center justify-center text-nooha-blue mx-auto shadow-glow-blue animate-float">
                     <Cpu size={40} strokeWidth={1} />
                  </div>
                  <h4 className="text-white font-black text-2xl uppercase tracking-widest italic leading-tight opacity-40">System Core <br/> Fully Operational</h4>
               </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Architecture Explorer */}
      <Section id="architecture" className="bg-nooha-midnight relative overflow-hidden border-t border-white/5 py-40">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-32">
             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="text-caption mb-4 block uppercase tracking-[0.4em]">Interactive Blueprints</span>
                <h2 className="text-h2 text-white mb-8 tracking-tighter italic">Explore the System Thinking.</h2>
                <p className="text-body text-xl font-medium text-nooha-muted">Select a technical layer to view its specific functional role within the ecosystem.</p>
             </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
             {/* The Visual Explorer */}
             <div className="lg:col-span-7">
                <div className="space-y-3">
                   {layers.map((layer) => (
                     <motion.div
                       key={layer.id}
                       onClick={() => setActiveLayer(layer.id)}
                       className={cn(
                         "relative p-8 rounded-3xl border cursor-pointer transition-all duration-500 overflow-hidden group",
                         activeLayer === layer.id
                           ? cn("bg-nooha-slate/60 shadow-2xl scale-[1.02] z-10", layer.color)
                           : "bg-nooha-slate/10 border-white/5 hover:border-white/10"
                       )}
                     >
                        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="flex items-center justify-between relative z-10">
                           <div className="flex items-center gap-6">
                              <div className={cn(
                                "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                                activeLayer === layer.id ? "bg-nooha-blue text-white" : "bg-white/5 text-zinc-600"
                              )}>
                                 {layer.icon}
                              </div>
                              <span className={cn(
                                "text-sm font-black uppercase tracking-[0.4em] transition-colors",
                                activeLayer === layer.id ? "text-white" : "text-zinc-600"
                              )}>
                                 {layer.title}
                              </span>
                           </div>

                           <div className="flex gap-2">
                              {layer.items.slice(0, 2).map(item => (
                                <span key={item} className="px-3 py-1 rounded-sm bg-white/5 border border-white/5 text-[8px] font-black text-zinc-700 uppercase tracking-widest">
                                   {item}
                                </span>
                              ))}
                           </div>
                        </div>

                        {/* Layer Connection Markers */}
                        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-4 h-4 bg-nooha-blue/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                     </motion.div>
                   ))}
                </div>
             </div>

             {/* Detail Panel */}
             <div className="lg:col-span-5 sticky top-32">
                <AnimatePresence mode="wait">
                   {activeLayer ? (
                     <motion.div
                       key={activeLayer}
                       initial={{ opacity: 0, x: 20 }}
                       animate={{ opacity: 1, x: 0 }}
                       exit={{ opacity: 0, x: -20 }}
                     >
                        <Card variant="glass" className="p-12 md:p-16 border-nooha-blue/30 rounded-[3rem]">
                           <div className="flex items-center gap-4 mb-10">
                              <div className="w-14 h-14 rounded-2xl bg-nooha-blue/10 border border-nooha-blue/20 flex items-center justify-center text-nooha-blue shadow-inner">
                                 {layers.find(l => l.id === activeLayer)?.icon}
                              </div>
                              <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter">
                                 {layers.find(l => l.id === activeLayer)?.title}
                              </h3>
                           </div>

                           <p className="text-zinc-400 text-xl leading-relaxed mb-12 font-medium">
                              {layers.find(l => l.id === activeLayer)?.detail}
                           </p>

                           <div className="space-y-4 pt-10 border-t border-white/5">
                              <p className="text-[10px] font-black text-nooha-blue uppercase tracking-[0.4em] mb-6">Technical Capabilities</p>
                              {layers.find(l => l.id === activeLayer)?.items.map(item => (
                                <div key={item} className="flex items-center justify-between group/item">
                                   <span className="text-sm font-bold text-white uppercase tracking-widest">{item}</span>
                                   <div className="w-6 h-px bg-white/10 group-hover/item:w-12 group-hover/item:bg-nooha-blue transition-all" />
                                </div>
                              ))}
                           </div>

                           <div className="mt-16">
                              <Button variant="outline" className="w-full h-14 group">
                                 View Layer Technicals <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                              </Button>
                           </div>
                        </Card>
                     </motion.div>
                   ) : (
                     <motion.div
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       className="p-12 md:p-20 text-center rounded-[3rem] border border-dashed border-white/10 bg-nooha-slate/5"
                     >
                        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-zinc-800 mx-auto mb-10">
                           <Search size={32} />
                        </div>
                        <h4 className="text-xl font-bold text-zinc-700 uppercase tracking-widest mb-4">Select a Layer</h4>
                        <p className="text-zinc-800 text-sm font-medium">Interact with the architecture diagram to inspect deep platform capabilities.</p>
                     </motion.div>
                   )}
                </AnimatePresence>
             </div>
          </div>
        </Container>
      </Section>

      {/* Integration Hub - Radial Hub Pattern (Reference 4) */}
      <Section className="bg-nooha-navy relative overflow-hidden py-40 border-t border-white/5">
        <Container>
           <div className="flex flex-col lg:flex-row items-center gap-24">
              <div className="flex-1 relative aspect-square max-w-xl mx-auto flex items-center justify-center">
                 {/* Radial Connectors */}
                 <div className="absolute inset-0 border border-nooha-blue/5 rounded-full animate-float" />

                 {/* The "Brain" Center Node */}
                 <div className="relative z-10 w-64 h-64 rounded-full bg-nooha-midnight border-4 border-nooha-blue/20 flex flex-col items-center justify-center shadow-glow-blue">
                    <NoohaLogo variant="compact" size="lg" animate />
                    <p className="mt-4 text-[10px] font-black text-white uppercase tracking-[0.5em]">INTEGRATION HUB</p>
                 </div>

                 {/* Satellite Integration Nodes */}
                 {[
                   { label: 'M-PESA', icon: <Wallet size={18} />, angle: 0 },
                   { label: 'GOOGLE', icon: <Globe size={18} />, angle: 72 },
                   { label: 'MESSAGING', icon: <MessageSquare size={18} />, angle: 144 },
                   { label: 'TERMINAL', icon: <Terminal size={18} />, angle: 216 },
                   { label: 'ANALYTICS', icon: <Activity size={18} />, angle: 288 },
                 ].map((sat, i) => {
                   const x = Math.cos((sat.angle * Math.PI) / 180) * 320;
                   const y = Math.sin((sat.angle * Math.PI) / 180) * 320;
                   return (
                     <motion.div
                       key={sat.label}
                       initial={{ opacity: 0, scale: 0 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       transition={{ delay: i * 0.1 }}
                       className="absolute"
                       style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: 'translate(-50%, -50%)' }}
                     >
                        <div className="flex flex-col items-center gap-3 group">
                           <div className="w-14 h-14 rounded-full bg-nooha-slate border border-white/10 flex items-center justify-center text-zinc-500 group-hover:bg-nooha-blue group-hover:text-white transition-all shadow-2xl">
                              {sat.icon}
                           </div>
                           <span className="text-[9px] font-black text-zinc-700 uppercase tracking-widest group-hover:text-nooha-blue transition-colors">{sat.label}</span>
                        </div>
                     </motion.div>
                   );
                 })}

                 {/* Rotating Orbit Ring */}
                 <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border border-dashed border-nooha-blue/10 rounded-full"
                 />
              </div>

              <div className="flex-1 space-y-12">
                 <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}>
                    <Badge variant="primary" className="mb-6 uppercase tracking-widest">Ecosystem Expansion</Badge>
                    <h2 className="text-h2 text-white mb-8 tracking-tighter italic">Unified Integration Kernel.</h2>
                    <p className="text-body text-xl font-medium text-nooha-muted leading-relaxed">
                       Nooha Platform is built to communicate. Our integration hub ensures that external services—from
                       financial gateways to cloud analytics—interact seamlessly with your institutional data core.
                    </p>
                 </motion.div>

                 <div className="grid grid-cols-2 gap-8">
                    {[
                      { t: 'Bi-directional', d: 'Secure real-time data sync.' },
                      { t: 'Type-safe API', d: 'Immutable technical contracts.' },
                      { t: 'Audit Trail', desc: 'Traceable communication logs.' },
                      { t: 'Encrypted', desc: 'Zero-knowledge transport.' }
                    ].map(f => (
                      <div key={f.t} className="space-y-2">
                         <h4 className="text-white font-bold text-sm uppercase tracking-widest italic">{f.t}</h4>
                         <p className="text-xs text-nooha-muted font-medium">{f.d || f.desc}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </Container>
      </Section>

      {/* Terminal Pass */}
      <Section className="bg-nooha-midnight py-40">
         <Container>
            <div className="max-w-4xl mx-auto p-12 md:p-32 rounded-[5rem] border border-nooha-border bg-gradient-to-br from-nooha-slate to-nooha-midnight text-center relative overflow-hidden shadow-2xl">
               <div className="absolute inset-0 bg-noise opacity-[0.02]" />
               <div className="relative z-10">
                  <Badge variant="primary" className="mb-10 px-5 py-2 font-black tracking-widest">SYSTEM DEVELOPER READY</Badge>
                  <h3 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight italic">Engineered for absolute <br/> stability.</h3>
                  <p className="text-nooha-muted text-xl mb-12 font-medium max-w-xl mx-auto">Nooha Labs provides the strategic infrastructure required to navigate high-frequency institutional growth.</p>
                  <div className="flex flex-wrap justify-center gap-6">
                     <Button variant="premium" size="xl" href="/contact">Strategic Partnership</Button>
                     <Button variant="outline" size="xl" className="text-white border-white/10">Read Platform Roadmap</Button>
                  </div>
               </div>
            </div>
         </Container>
      </Section>
    </main>
  );
}
