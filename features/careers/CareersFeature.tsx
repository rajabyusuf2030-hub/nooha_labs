'use client';

import React from 'react';
import { Container, Section, Card, Button, Badge, NoohaLogo } from '@nooha/ui';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Briefcase, Globe, Code2, Sparkles, Cpu, Target } from 'lucide-react';

export function CareersFeature() {
  const jobs = [
    { title: 'Full Stack Engineer (Next.js)', location: 'Remote / Mombasa', type: 'Full-time' },
    { title: 'Mobile Developer (Flutter)', location: 'Remote', type: 'Contract' },
    { title: 'Technical Product Strategist', location: 'Nairobi', type: 'Full-time' },
  ];

  const perks = [
    { title: 'Remote-First', desc: 'Work from anywhere in the world, with local hubs in Mombasa and Nairobi.', icon: <Globe size={24} /> },
    { title: 'Laboratory Stack', desc: 'Build with the latest in TypeScript, Flutter 3.27, and AI orchestration.', icon: <Code2 size={24} /> },
    { title: 'Health & Wellness', desc: 'Comprehensive medical cover and mental health support for full-time staff.', icon: <Target size={24} /> },
    { title: 'Innovation Logic', desc: '10% of your time dedicated to exploring new technologies in our internal lab.', icon: <Sparkles size={24} /> },
  ];

  return (
    <main className="pt-20">
      <Section padding="xl" className="relative overflow-hidden bg-nooha-navy">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-nooha-blue/5 blur-[120px] rounded-full pointer-events-none" />

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mb-32"
          >
            <Badge variant="primary" className="mb-8 px-5 py-2 uppercase font-black tracking-widest">Join the Lab</Badge>
            <h1 className="text-4xl md:text-8xl font-black text-white mb-8 leading-[1.05] tracking-tighter">
              Engineer the <br/> <span className="bg-gradient-to-r from-nooha-blue via-nooha-cyan to-nooha-blue bg-clip-text text-transparent italic">Operational Future.</span>
            </h1>
            <p className="text-body text-xl md:text-2xl font-medium max-w-3xl">
              We are building an elite team of problem solvers dedicated to redefining
              institutional infrastructure across Africa.
            </p>
          </motion.div>

          <div className="mb-40">
             <div className="flex items-center gap-6 mb-16">
                <div className="h-px flex-1 bg-white/5" />
                <h3 className="text-caption !text-zinc-600">Technical Culture</h3>
                <div className="h-px flex-1 bg-white/5" />
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {perks.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-10 rounded-[3rem] border border-white/5 bg-nooha-slate/40 group hover:border-nooha-blue/30 transition-all duration-500"
                  >
                     <div className="w-14 h-14 rounded-2xl bg-nooha-blue/5 border border-nooha-blue/10 flex items-center justify-center text-nooha-blue mb-10 group-hover:scale-110 transition-transform shadow-inner">
                        {p.icon}
                     </div>
                     <h4 className="text-xl font-bold text-white mb-4 group-hover:text-nooha-blue transition-colors tracking-tight">{p.title}</h4>
                     <p className="text-nooha-muted text-sm leading-relaxed font-medium">{p.desc}</p>
                  </motion.div>
                ))}
             </div>
          </div>

          <div className="space-y-12 pt-32 border-t border-white/5">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
               <div>
                  <span className="text-[10px] font-black text-nooha-blue uppercase tracking-[0.5em] mb-4 block">Hiring for Q3 2026</span>
                  <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter">Open Laboratory Positions</h3>
               </div>
               <p className="text-nooha-muted max-w-sm text-sm font-medium leading-relaxed">
                  We maintain a high technical bar. Every candidate undergoes a deep domain-logic evaluation.
               </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {jobs.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 0.6, x: 0 }}
                  whileHover={{ opacity: 1, scale: 1.01 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <Card variant="glass" className="p-10 group bg-nooha-slate/40 border-white/5 hover:border-nooha-blue/30 transition-all cursor-pointer rounded-[2.5rem]">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
                      <div>
                        <h4 className="text-3xl font-black text-white mb-6 tracking-tighter group-hover:text-nooha-blue transition-colors">{job.title}</h4>
                        <div className="flex flex-wrap items-center gap-10">
                          <div className="flex items-center gap-3 text-zinc-500">
                             <MapPin size={16} className="text-nooha-blue" />
                             <span className="text-[10px] font-black uppercase tracking-[0.3em]">{job.location}</span>
                          </div>
                          <div className="flex items-center gap-3 text-zinc-500">
                             <Briefcase size={16} className="text-nooha-blue" />
                             <span className="text-[10px] font-black uppercase tracking-[0.3em]">{job.type}</span>
                          </div>
                        </div>
                      </div>
                      <Button href={`/contact?subject=Career%20Application:%20${encodeURIComponent(job.title)}`} variant="premium" className="h-16 px-12 shadow-2xl">
                        Apply Now <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Background Branding Visual */}
          <div className="mt-40 h-[400px] rounded-[5rem] border border-nooha-border bg-nooha-midnight relative overflow-hidden flex items-center justify-center p-20 shadow-2xl">
             <img src="/assets/images/NOOHA-PROD-03.png" className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale" alt="Nooha Labs Infrastructure" />
             <div className="relative z-10 text-center">
                <NoohaLogo variant="monochrome" size="xl" className="opacity-20 mx-auto mb-10" />
                <h4 className="text-3xl md:text-5xl font-black text-white/20 uppercase tracking-[0.4em] select-none italic">LOGIC • SCALE • SECURITY</h4>
             </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
