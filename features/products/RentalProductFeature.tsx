'use client';

import React from 'react';
import { Container, Section, Badge, Button, Card, NoohaLogo } from '@nooha/ui';
import { Truck, Package, FileText, BarChart3, CheckCircle2, ArrowRight, Zap, ShieldCheck, MapPin, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export function RentalProductFeature() {
  const rentalModules = [
    {
      title: 'Fleet Telemetry',
      desc: 'Real-time GPS tracking and performance monitoring for heavy machinery and material transport trucks.',
      icon: <Truck size={24} />,
      points: ['Live site geofencing', 'Fuel consumption analytics', 'Operator behavior monitoring']
    },
    {
      title: 'Contract Logic',
      desc: 'Automated generation of legal rental agreements with terminal e-signature integration.',
      icon: <FileText size={24} />,
      points: ['Digital e-signatures', 'Automated renewal logic', 'Technical template library']
    },
    {
      title: 'Site Distribution',
      desc: 'Coordinate asset delivery and retrieval across high-frequency geographical job sites.',
      icon: <Package size={24} />,
      points: ['Multi-site synchronization', 'Inventory transfer logic', 'QR-based asset check-in']
    }
  ];

  return (
    <main className="pt-20">
      {/* 01. Product Hero */}
      <Section padding="xl" className="relative min-h-[90vh] flex items-center overflow-hidden bg-nooha-navy">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-nooha-blue/5 blur-[120px] rounded-full pointer-events-none" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="primary" className="mb-8 font-black tracking-[0.4em] px-5 py-2 uppercase">NOOHA RENTAL</Badge>
              <h1 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[1.05]">
                Master your logistics <br />
                <span className="text-nooha-blue">at every site.</span>
              </h1>
              <p className="text-body text-xl mb-12 font-medium">
                A high-fidelity inventory and telemetry platform for construction rental yards,
                heavy machinery providers, and high-frequency equipment fleets.
              </p>
              <div className="flex flex-wrap gap-5">
                <Button variant="premium" size="xl" href="/contact?subject=Nooha%20Rental%20Demo" className="group shadow-2xl">
                  Request Private Demo <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="secondary" size="xl" href="#capabilities" className="px-12">
                  Technical Overview
                </Button>
              </div>

              <div className="mt-12 pt-8 border-t border-white/5 flex gap-8">
                 <div className="space-y-1">
                    <p className="text-white font-bold">Real-time GPS</p>
                    <p className="text-[10px] text-nooha-muted font-black uppercase tracking-widest">Global Telemetry</p>
                 </div>
                 <div className="space-y-1">
                    <p className="text-white font-bold">Encrypted</p>
                    <p className="text-[10px] text-nooha-muted font-black uppercase tracking-widest">Terminal Security</p>
                 </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
               <div className="absolute -inset-10 bg-nooha-blue/5 rounded-full blur-[100px] animate-pulse" />
               <div className="relative rounded-[2.5rem] border border-nooha-border bg-nooha-slate overflow-hidden shadow-elevated group">
                  <img
                    src="/assets/images/NOOHA-PROD-01.jpg"
                    alt="Nooha Rental Command Console"
                    className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nooha-midnight/60 via-transparent to-transparent pointer-events-none" />

                  {/* Operational Status */}
                  <div className="absolute top-8 right-8">
                     <div className="px-5 py-2 rounded-full bg-nooha-blue/10 border border-nooha-blue/30 backdrop-blur-xl flex items-center gap-3 shadow-2xl">
                        <div className="w-1.5 h-1.5 rounded-full bg-nooha-blue animate-pulse" />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">Fleet Telemetry Active</span>
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* 02. Capability Grid */}
      <Section id="capabilities" className="bg-nooha-midnight relative overflow-hidden border-t border-white/5 py-40">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-32">
             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Badge variant="primary" className="mb-6 uppercase tracking-widest">FLEET & INVENTORY CORE</Badge>
                <h2 className="text-h2 text-white mb-8 tracking-tighter">Precision Logistics Infrastructure.</h2>
                <p className="text-body text-xl font-medium text-nooha-muted">Nooha Rental connects asset tracking, contract management, and financial reconciliation into one high-performance command layer.</p>
             </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
             {rentalModules.map((m, i) => (
               <motion.div
                 key={m.title}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
               >
                 <Card variant="glass" className="p-12 bg-nooha-slate/20 border-nooha-border group hover:border-nooha-blue/30 transition-all duration-500 h-full rounded-[3rem]">
                    <div className="w-14 h-14 rounded-2xl bg-nooha-blue/5 border border-nooha-blue/10 flex items-center justify-center text-nooha-blue mb-10 group-hover:scale-110 transition-transform shadow-inner">
                       {m.icon}
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-6 group-hover:text-nooha-blue transition-colors tracking-tight">{m.title}</h4>
                    <ul className="space-y-4">
                       {m.points.map(p => (
                         <li key={p} className="flex gap-4 text-sm text-nooha-muted font-medium group-hover:text-zinc-300 transition-colors">
                            <CheckCircle2 size={16} className="text-nooha-blue shrink-0" />
                            {p}
                         </li>
                       ))}
                    </ul>
                 </Card>
               </motion.div>
             ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { title: 'Asset Monitoring', desc: 'Real-time state and location visibility for every fleet unit.', icon: <MapPin /> },
               { title: 'Predictive ROI', desc: 'Identify asset utilization patterns and maintenance cycles.', icon: <BarChart3 /> },
               { title: 'Terminal Invoicing', desc: 'Confirm signatures and trigger payments directly from the site.', icon: <Zap /> },
               { title: 'System Security', desc: 'Multi-tenant isolation protecting your proprietary data.', icon: <ShieldCheck /> },
             ].map((f, i) => (
               <div key={f.title} className="space-y-4 group">
                  <div className="text-nooha-blue opacity-40 group-hover:opacity-100 transition-opacity">{f.icon}</div>
                  <h4 className="text-white font-bold tracking-tight">{f.title}</h4>
                  <p className="text-xs text-nooha-muted leading-relaxed font-medium">{f.desc}</p>
               </div>
             ))}
          </div>
        </Container>
      </Section>

      {/* 03. Terminal CTA */}
      <Section className="bg-nooha-navy py-40">
         <Container>
            <div className="max-w-4xl mx-auto p-12 md:p-24 rounded-[5rem] bg-nooha-blue relative overflow-hidden text-center shadow-[0_64px_120px_-20px_rgba(37,99,235,0.4)]">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1),_transparent)] pointer-events-none" />
               <div className="relative z-10">
                  <h3 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">Ready to synchronize <br/> your fleet?</h3>
                  <p className="text-white/80 text-xl mb-12 font-medium max-w-xl mx-auto">Discuss your logistics requirements with our engineering team and discover the Nooha technical standard.</p>
                  <div className="flex flex-wrap justify-center gap-6">
                     <Button variant="premium" size="xl" href="/contact">Start a Conversation</Button>
                     <Button variant="outline" size="xl" className="text-white border-white/20 hover:bg-white/10 px-12">View Documentation</Button>
                  </div>
               </div>
            </div>
         </Container>
      </Section>
    </main>
  );
}
