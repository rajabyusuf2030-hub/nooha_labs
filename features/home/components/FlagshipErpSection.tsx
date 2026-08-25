'use client';

import React, { useState } from 'react';
import { Container, Section, Badge, Button, Card, NoohaLogo } from '@nooha/ui';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, BarChart3, Layers, GraduationCap, Wallet } from 'lucide-react';

export function FlagshipErpSection() {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const modules = [
    'Students', 'Academics', 'Attendance', 'Finance', 'Staff', 'Reporting', 'Permissions', 'Administration'
  ];

  const hotspots = [
    { id: 'intel', top: '25%', left: '20%', label: 'Academic Core', detail: 'Centralized grading and curriculum management.' },
    { id: 'ops', top: '45%', left: '75%', label: 'Live Telemetry', detail: 'Real-time attendance and operational status.' },
    { id: 'fin', top: '70%', left: '40%', label: 'Finance Logic', detail: 'Automated fee reconciliation and ledgers.' },
  ];

  const benefits = [
    {
      id: '01',
      title: 'Connected',
      desc: 'Institutional records flow seamlessly from enrollment through academics into financial records.',
      icon: <Layers size={20} />,
    },
    {
      id: '02',
      title: 'Governed',
      desc: 'Role-based access ensures users see exactly what they need based on their operational duty.',
      icon: <ShieldCheck size={20} />,
    },
    {
      id: '03',
      title: 'Predictive',
      desc: 'Identify institutional trends and academic performance early through automated analytics.',
      icon: <BarChart3 size={20} />,
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <Section className="bg-nooha-navy relative overflow-hidden border-t border-white/5 py-40">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-nooha-green/5 blur-[180px] rounded-full pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <Badge variant="primary" className="mb-8 font-black tracking-[0.4em]">FLAGSHIP PLATFORM</Badge>
            <h2 className="text-h2 text-white mb-8 leading-tight tracking-tighter">
              One connected system for the way your <span className="text-nooha-green">institution operates.</span>
            </h2>
            <p className="text-body text-xl mb-12 font-medium">
              Nooha ERP replaces fragmented spreadsheets with one technical foundation for students, academics,
              finance, and administrative workflows.
            </p>

            <div className="flex flex-wrap gap-5 mb-10">
              <Button size="xl" variant="premium" href="/products/erp" className="group">
                Explore Nooha ERP <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="secondary" size="xl" href="/demo">
                Request a Demo
              </Button>
            </div>

            <div className="flex items-center gap-3">
               <div className="w-1.5 h-1.5 rounded-full bg-nooha-green animate-pulse" />
               <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">
                 Enterprise multi-tenant architecture
               </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.21, 0.45, 0.32, 0.9] }}
            className="lg:col-span-7 relative"
          >
            {/* Interactive Image Container */}
            <div className="relative group">
               <div className="absolute -inset-10 bg-nooha-green/10 rounded-full blur-[120px] opacity-40 pointer-events-none" />

               <div className="relative rounded-[2.5rem] border border-white/5 bg-nooha-slate overflow-hidden shadow-[0_64px_120px_-20px_rgba(0,0,0,0.8)] transition-transform duration-700 hover:scale-[1.01]">
                 <img
                   src="/assets/images/NOOHA-ERP-01.png"
                   alt="Nooha ERP Interface"
                   className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                 />

                 {/* Interactive Hotspots */}
                 {hotspots.map(h => (
                   <div
                     key={h.id}
                     className="absolute"
                     style={{ top: h.top, left: h.left }}
                     onMouseEnter={() => setActiveHotspot(h.id)}
                     onMouseLeave={() => setActiveHotspot(null)}
                   >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-6 h-6 rounded-full bg-nooha-green/20 border border-nooha-green flex items-center justify-center cursor-pointer shadow-glow-green"
                      >
                         <div className="w-2 h-2 rounded-full bg-nooha-green" />
                      </motion.div>

                      <AnimatePresence>
                        {activeHotspot === h.id && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 5, scale: 0.9 }}
                            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 p-4 rounded-xl bg-nooha-midnight/90 border border-nooha-green/30 backdrop-blur-xl z-30 shadow-2xl"
                          >
                             <p className="text-[10px] font-black text-nooha-green uppercase tracking-widest mb-1">{h.label}</p>
                             <p className="text-[11px] text-white font-medium">{h.detail}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                   </div>
                 ))}
               </div>
            </div>
          </motion.div>
        </div>

        {/* Module Strip */}
        <div className="mb-40">
          <div className="flex items-center gap-6 mb-16">
            <div className="h-px flex-1 bg-nooha-border" />
            <span className="text-caption !text-zinc-500 whitespace-nowrap">Connected across the institution</span>
            <div className="h-px flex-1 bg-nooha-border" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 md:gap-5"
          >
            {modules.map((m) => (
              <motion.div key={m} variants={itemVariants}>
                <Badge variant="outline" className="px-6 py-3 border-white/5 hover:border-nooha-green/30 hover:text-white transition-all cursor-default text-[10px] font-bold">
                  {m}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <div className="space-y-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Card variant="glass" className="h-full group hover:border-nooha-green/30 transition-all duration-500 p-12 rounded-[2.5rem]">
                  <div className="w-14 h-14 rounded-2xl bg-nooha-green/5 border border-nooha-green/10 flex items-center justify-center text-nooha-green mb-10 group-hover:scale-110 transition-transform shadow-inner">
                    {b.icon}
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[10px] font-black text-nooha-green uppercase tracking-[0.3em]">{b.id}</span>
                    <h4 className="text-2xl font-bold text-white tracking-tight">{b.title}</h4>
                  </div>
                  <p className="text-body !text-sm">
                    {b.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Product Architecture Visual */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative py-24 px-10 rounded-[4rem] border border-white/5 bg-nooha-slate/20 overflow-hidden flex flex-col items-center"
          >
             <div className="absolute inset-0 bg-grid-white opacity-[0.03]" />
             <div className="relative z-10 flex flex-col items-center w-full">
                <div className="px-6 py-3 rounded-xl bg-nooha-green/10 border border-nooha-green/20 text-nooha-green text-[10px] font-black uppercase tracking-[0.6em] mb-16">
                   Institutional Ecosystem Architecture
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl relative">
                   {/* Connections (Visual only) */}
                   <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-nooha-green/0 via-nooha-green/20 to-nooha-green/0 -translate-y-1/2" />

                   <div className="p-10 rounded-[2.5rem] bg-nooha-midnight border border-white/5 text-center space-y-6 shadow-2xl group hover:border-nooha-green/30 transition-all duration-500">
                      <div className="w-12 h-12 rounded-2xl bg-nooha-green/5 border border-nooha-green/10 flex items-center justify-center text-nooha-green mx-auto group-hover:scale-110 transition-transform">
                         <GraduationCap size={24} />
                      </div>
                      <p className="text-xs font-black text-nooha-green uppercase tracking-widest">Academic Core</p>
                      <div className="flex flex-wrap justify-center gap-2">
                         {['Students', 'Exams', 'Results', 'Transcripts'].map(s => (
                           <span key={s} className="text-[9px] text-zinc-600 font-bold px-3 py-1.5 bg-white/5 rounded-lg border border-white/5 group-hover:border-nooha-green/10 transition-colors">{s}</span>
                         ))}
                      </div>
                   </div>

                   <div className="p-10 rounded-[3rem] bg-nooha-midnight border-2 border-nooha-green/20 text-center space-y-8 shadow-glow-green scale-110 relative z-10">
                      <NoohaLogo variant="compact" size="lg" animate />
                      <div>
                         <p className="text-[10px] font-black text-white uppercase tracking-[0.5em] mb-2">Central Node</p>
                         <p className="text-[9px] text-zinc-500 font-medium leading-relaxed">Bidirectional synchronization <br/> between all modules.</p>
                      </div>
                      <div className="flex justify-center gap-3">
                         <div className="w-1.5 h-1.5 rounded-full bg-nooha-green animate-pulse" />
                         <div className="w-1.5 h-1.5 rounded-full bg-nooha-blue animate-pulse" style={{ animationDelay: '0.5s' }} />
                         <div className="w-1.5 h-1.5 rounded-full bg-nooha-cyan animate-pulse" style={{ animationDelay: '1s' }} />
                      </div>
                   </div>

                   <div className="p-10 rounded-[2.5rem] bg-nooha-midnight border border-white/5 text-center space-y-6 shadow-2xl group hover:border-nooha-blue/30 transition-all duration-500">
                      <div className="w-12 h-12 rounded-2xl bg-nooha-blue/5 border border-nooha-blue/10 flex items-center justify-center text-nooha-blue mx-auto group-hover:scale-110 transition-transform">
                         <Wallet size={24} />
                      </div>
                      <p className="text-xs font-black text-nooha-blue uppercase tracking-widest">Financial Logic</p>
                      <div className="flex flex-wrap justify-center gap-2">
                         {['Fee Invoicing', 'M-Pesa Sync', 'Ledger', 'Reporting'].map(s => (
                           <span key={s} className="text-[9px] text-zinc-600 font-bold px-3 py-1.5 bg-white/5 rounded-lg border border-white/5 group-hover:border-nooha-blue/10 transition-colors">{s}</span>
                         ))}
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
