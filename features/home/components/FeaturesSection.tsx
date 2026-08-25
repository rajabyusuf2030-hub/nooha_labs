'use client';

import React from 'react';
import { CheckCircle2, Zap, Layout, Lock, ShieldCheck, Cpu, Globe, Database, Activity, Layers, Users } from 'lucide-react';
import { Container, Section } from '@nooha/ui';
import { motion } from 'framer-motion';

export function FeaturesSection() {
  const highlights = [
    {
      title: 'Real Workflows',
      desc: 'We don’t build software just to add features. Every system is built around the way you actually work.',
      icon: <Activity size={20} />,
      color: 'text-nooha-blue',
      bg: 'bg-nooha-blue/10'
    },
    {
      title: 'Modular Design',
      desc: 'Systems can evolve and scale as requirements change, ensuring long-term institutional agility.',
      icon: <Layers size={20} />,
      color: 'text-nooha-cyan',
      bg: 'bg-nooha-cyan/10'
    },
    {
      title: 'Security First',
      desc: 'Enterprise-grade security and data sovereignty are considered throughout the entire architecture.',
      icon: <Lock size={20} />,
      color: 'text-nooha-blue',
      bg: 'bg-nooha-blue/10'
    },
    {
      title: 'Human-Centered',
      desc: 'Technology should remain understandable and useful, focusing on the people who operate it every day.',
      icon: <Users size={20} />,
      color: 'text-nooha-blue',
      bg: 'bg-nooha-blue/10'
    },
  ];

  return (
    <Section className="bg-nooha-midnight relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-caption mb-4 block">Institutional Value</span>
            <h2 className="text-h2 text-white mb-8 leading-tight">
              Why leading organizations <br />
              <span className="bg-gradient-to-r from-nooha-blue to-nooha-cyan bg-clip-text text-transparent">partner with Nooha Labs.</span>
            </h2>
            <p className="text-body mb-12 font-medium">
              We do not just write code. We engineer the digital foundations that power organizations
              for the next decade, ensuring stability, security, and elite user experiences.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-5 group"
                >
                  <div className={`shrink-0 h-10 w-10 rounded-xl ${h.bg} ${h.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/5`}>
                    {h.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2 group-hover:text-nooha-blue transition-colors leading-snug">{h.title}</h4>
                    <p className="text-zinc-500 text-xs leading-relaxed">{h.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-nooha-blue/5 rounded-full blur-[100px] animate-pulse" />

            <div className="relative aspect-square max-w-[500px] mx-auto rounded-[3.5rem] bg-nooha-slate/40 border border-white/5 p-1.5 shadow-2xl overflow-hidden group">
               <div className="w-full h-full rounded-[3.4rem] bg-nooha-midnight overflow-hidden flex flex-col items-center justify-center relative">
                  {/* Mock Interface Layers */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.05),_transparent)]" />

                  <div className="w-4/5 h-3/4 rounded-3xl border border-white/5 bg-nooha-slate/80 backdrop-blur-md shadow-2xl relative z-10 p-8 space-y-6 flex flex-col">
                     <div className="flex justify-between items-center mb-4">
                        <div className="flex gap-2">
                           <div className="w-2 h-2 rounded-full bg-nooha-blue shadow-[0_0_8px_rgba(37,99,235,0.5)]" />
                           <div className="w-2 h-2 rounded-full bg-zinc-800" />
                        </div>
                        <Cpu size={16} className="text-zinc-600" />
                     </div>

                     <div className="space-y-3">
                        <div className="h-2 w-3/4 bg-zinc-800 rounded-full animate-pulse" />
                        <div className="h-2 w-1/2 bg-zinc-800 rounded-full" />
                     </div>

                     <div className="flex-1 grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-zinc-900/50 border border-white/5 p-4 flex flex-col justify-end">
                           <div className="w-full h-1 bg-zinc-800 rounded-full mb-2" />
                           <div className="w-2/3 h-1 bg-zinc-800 rounded-full" />
                        </div>
                        <div className="rounded-2xl bg-nooha-blue/5 border border-nooha-blue/10 p-4 flex flex-col items-center justify-center gap-2">
                           <ShieldCheck size={24} className="text-nooha-blue opacity-50" />
                           <span className="text-[8px] font-black text-nooha-blue uppercase tracking-widest">Secure</span>
                        </div>
                     </div>

                     <div className="h-12 w-full bg-zinc-950 rounded-xl border border-white/5 flex items-center px-4 gap-3">
                        <div className="w-2 h-2 rounded-full bg-nooha-cyan" />
                        <div className="flex-1 h-1 bg-zinc-900 rounded-full" />
                     </div>
                  </div>

                  {/* Floating Orbitals */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute w-full h-full opacity-30"
                  >
                     <div className="absolute top-10 left-10 text-nooha-blue"><Globe size={24} /></div>
                     <div className="absolute bottom-20 right-20 text-nooha-cyan"><Database size={24} /></div>
                  </motion.div>
               </div>
            </div>

            {/* Metric Overlay */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 p-6 rounded-3xl bg-nooha-slate border border-white/5 shadow-2xl z-20"
            >
               <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-2">Platform Availability</p>
               <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-white tracking-tighter">99.9%</span>
                  <span className="text-[10px] text-nooha-blue font-bold">Uptime SLA</span>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
