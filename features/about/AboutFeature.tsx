'use client';

import React from 'react';
import { Container, Section, Card, Badge, Button, NoohaLogo, cn } from '@nooha/ui';
import { motion } from 'framer-motion';
import {
  Code2,
  ShieldCheck,
  Cpu,
  Rocket,
  ArrowRight,
  Zap,
  Target,
  FlaskConical,
  Microscope,
  Users,
  Briefcase,
  History,
  Globe,
  Landmark
} from 'lucide-react';
import Link from 'next/link';

export function AboutFeature() {
  const timeline = [
    { label: 'IDEA', desc: 'Observing institutional friction in Mombasa.', year: '2023' },
    { label: 'RESEARCH', desc: 'Deep domain mapping of academic workflows.', year: '2023' },
    { label: 'BUILD', desc: 'Architecting the multi-tenant institutional kernel.', year: '2024' },
    { label: 'TEST', desc: 'Terminal validation with flagship partners.', year: '2024' },
    { label: 'DEPLOY', desc: 'Operational launch of Nooha ERP v1.0.', year: '2025' },
    { label: 'GROW', desc: 'Scaling the laboratory ecosystem across the region.', year: 'Ongoing' },
  ];

  const philosophy = [
    { title: 'Build with purpose.', desc: 'We prioritize operational logic over unnecessary features.' },
    { title: 'Keep systems understandable.', desc: 'Technology should empower people, not confuse them.' },
    { title: 'Security is foundational.', desc: 'Institutional trust is earned through cryptographic proof.' },
    { title: 'Scale with users.', desc: 'Modular architecture that expands as you grow.' },
  ];

  return (
    <main className="pt-20">
      {/* 01. Company Hero */}
      <Section padding="xl" className="relative overflow-hidden bg-nooha-navy">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-nooha-blue/5 blur-[120px] rounded-full pointer-events-none" />

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Badge variant="primary" className="mb-8 font-black tracking-[0.4em] px-5 py-2 uppercase border-nooha-blue/30 text-nooha-blue bg-nooha-blue/5">
               Nooha Labs
            </Badge>
            <h1 className="text-4xl md:text-8xl font-black text-white mb-8 leading-[1.05] tracking-tighter">
              Technology for those ready to <span className="text-nooha-blue italic">operate differently.</span>
            </h1>
            <p className="text-body text-xl md:text-2xl max-w-3xl font-medium">
              We are a specialized engineering studio focused on building high-fidelity digital infrastructure
              for institutions that demand precision, security, and scale.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* 02. Company Story Timeline */}
      <Section className="bg-nooha-midnight relative overflow-hidden py-40 border-y border-white/5">
         <Container>
            <div className="flex items-center gap-6 mb-24">
               <div className="h-px w-12 bg-nooha-blue" />
               <span className="text-caption !text-zinc-500">The Laboratory Journey</span>
            </div>

            <div className="relative">
               {/* Line */}
               <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2 hidden lg:block" />

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
                  {timeline.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="group"
                    >
                       <div className="mb-6 lg:mb-12 flex flex-col items-center lg:items-start">
                          <div className="w-10 h-10 rounded-xl bg-nooha-midnight border border-white/10 flex items-center justify-center text-zinc-700 group-hover:border-nooha-blue group-hover:text-nooha-blue transition-all shadow-inner font-black text-[10px] italic">
                             {i+1}
                          </div>
                       </div>
                       <h4 className="text-white font-black text-xl tracking-tighter mb-2 group-hover:text-nooha-blue transition-colors italic">{item.label}</h4>
                       <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4">{item.year}</p>
                       <p className="text-xs text-nooha-muted leading-relaxed font-medium">{item.desc}</p>
                    </motion.div>
                  ))}
               </div>
            </div>
         </Container>
      </Section>

      {/* 03. Mission & Philosophy */}
      <Section className="bg-nooha-navy py-40 relative overflow-hidden">
        <Container>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                 <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                    <Badge variant="primary" className="mb-6 uppercase tracking-widest">Our Mission</Badge>
                    <h2 className="text-h2 text-white mb-8 tracking-tighter">Replace institutional friction with <br/> <span className="text-nooha-blue">absolute digital clarity.</span></h2>
                    <p className="text-body text-xl font-medium text-nooha-muted">We enable school leaders and administrators to move faster by providing terminal visibility into their data and operations.</p>
                 </motion.div>

                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {philosophy.map(p => (
                      <div key={p.title} className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/5 group hover:border-nooha-blue/20 transition-all">
                         <h4 className="text-white font-bold tracking-tight group-hover:text-nooha-blue transition-colors italic">{p.title}</h4>
                         <p className="text-xs text-nooha-muted leading-relaxed">{p.desc}</p>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="relative aspect-square rounded-[4rem] overflow-hidden border border-nooha-border bg-nooha-slate shadow-2xl group">
                 <img
                   src="/assets/images/NOOHA-PROD-03.png"
                   alt="Nooha Labs Headquarters"
                   className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-nooha-midnight via-transparent to-transparent" />
                 <div className="absolute bottom-12 left-12">
                    <Badge variant="outline" className="mb-4 border-nooha-blue/30 text-nooha-blue bg-nooha-blue/5">HQ: MOMBASA, KENYA</Badge>
                    <p className="text-white font-black text-3xl tracking-tighter">Engineering Hub</p>
                 </div>
              </div>
           </div>
        </Container>
      </Section>

      {/* 04. Technology Culture */}
      <Section className="bg-nooha-midnight border-y border-white/5 py-40">
         <Container>
            <div className="text-center mb-32">
               <span className="text-caption mb-4 block">Our Technical Pulse</span>
               <h2 className="text-h2 text-white italic tracking-tighter">High-fidelity execution.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { label: 'Engineering', icon: <Code2 /> },
                 { label: 'Product Logic', icon: <Target /> },
                 { label: 'Security Research', icon: <ShieldCheck /> },
                 { label: 'User Experience', icon: <FlaskConical /> },
               ].map((c, i) => (
                 <motion.div
                   key={c.label}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="p-10 rounded-[3rem] bg-nooha-slate/40 border border-nooha-border flex flex-col items-center text-center group hover:border-nooha-blue/30 transition-all"
                 >
                    <div className="w-14 h-14 rounded-2xl bg-nooha-blue/5 border border-nooha-blue/10 flex items-center justify-center text-nooha-blue mb-8 group-hover:scale-110 transition-transform shadow-inner">
                       {c.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white tracking-tight uppercase italic">{c.label}</h4>
                 </motion.div>
               ))}
            </div>
         </Container>
      </Section>

      {/* 05. Careers */}
      <Section className="bg-nooha-navy py-40">
         <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
               <div>
                  <Badge variant="primary" className="mb-6 uppercase tracking-widest">Join the Lab</Badge>
                  <h2 className="text-h2 text-white mb-8 tracking-tighter italic">Work at Nooha.</h2>
                  <p className="text-body text-xl font-medium text-nooha-muted mb-12">We are building an elite team of problem solvers dedicated to redefining institutional infrastructure. No openings? Join our network.</p>

                  <div className="p-8 rounded-[3rem] bg-nooha-blue/5 border border-nooha-blue/20">
                     <p className="text-white font-bold flex items-center gap-3 mb-2">
                        <Briefcase size={18} className="text-nooha-blue" />
                        Status: No open positions currently.
                     </p>
                     <p className="text-xs text-nooha-muted">We don't fake hiring activity. Follow our insights for future opportunities.</p>
                  </div>
               </div>

               <div className="space-y-6">
                  {[
                    { title: 'Engineering Culture', desc: 'Type-safe logic and modular system kernels.' },
                    { title: 'Product Culture', desc: 'Domain-first discovery and terminal clarity.' },
                    { title: 'Application Process', desc: 'Multi-stage logic assessment and domain verification.' }
                  ].map(p => (
                    <div key={p.title} className="p-8 rounded-3xl bg-white/5 border border-white/5 group hover:border-nooha-blue/30 transition-all">
                       <h4 className="text-white font-bold tracking-tight mb-2 group-hover:text-nooha-blue transition-colors">{p.title}</h4>
                       <p className="text-sm text-nooha-muted font-medium">{p.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
         </Container>
      </Section>

      {/* Strategic CTA */}
      <Section className="bg-nooha-midnight py-40 border-t border-white/5">
         <Container>
            <div className="max-w-4xl mx-auto p-12 md:p-32 rounded-[5rem] border border-nooha-border bg-gradient-to-br from-nooha-slate to-nooha-midnight text-center relative overflow-hidden shadow-2xl">
               <div className="absolute inset-0 bg-noise opacity-[0.02]" />
               <h3 className="text-3xl md:text-6xl font-black text-white mb-10 tracking-tighter leading-tight italic uppercase">Institutional Logic <br/> Start Here.</h3>
               <p className="text-nooha-muted text-xl mb-12 font-medium max-w-xl mx-auto">Discuss your operational vision with our strategic team.</p>
               <div className="flex flex-wrap justify-center gap-6">
                  <Button href="/contact" size="xl" variant="premium">Start a Conversation</Button>
                  <Button href="/portfolio" variant="outline" size="xl" className="text-white border-white/10">View Projects</Button>
               </div>
            </div>
         </Container>
      </Section>
    </main>
  );
}
