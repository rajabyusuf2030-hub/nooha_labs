'use client';

import React from 'react';
import { Container, Section, Badge, NoohaLogo, cn } from '@nooha/ui';
import { motion } from 'framer-motion';
import {
  Building2,
  Users,
  GraduationCap,
  Wallet,
  BarChart3,
  Activity,
  Database,
  Layout,
  Zap,
  Lock,
  Globe
} from 'lucide-react';

export function ModuleNetworkSection() {
  const modules = [
    { title: 'PRODUCTION', icon: <Activity />, color: 'border-nooha-green', pos: 'top-[10%] left-[20%]' },
    { title: 'RESOURCES', icon: <Database />, color: 'border-nooha-blue', pos: 'top-[10%] right-[20%]' },
    { title: 'PLANNING', icon: <Layout />, color: 'border-nooha-cyan', pos: 'top-[35%] right-[10%]' },
    { title: 'INVENTORY', icon: <Zap />, color: 'border-nooha-green', pos: 'bottom-[35%] right-[10%]' },
    { title: 'REPORTING', icon: <BarChart3 />, color: 'border-nooha-violet', pos: 'bottom-[10%] right-[20%]' },
    { title: 'CRM', icon: <Users />, color: 'border-nooha-blue', pos: 'bottom-[10%] left-[20%]' },
    { title: 'MARKETING', icon: <Globe />, color: 'border-nooha-cyan', pos: 'bottom-[35%] left-[10%]' },
    { title: 'FINANCE', icon: <Wallet />, color: 'border-nooha-blue', pos: 'top-[35%] left-[10%]' },
  ];

  return (
    <Section className="bg-nooha-midnight relative overflow-hidden py-40 border-t border-white/5">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-40">
           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Badge variant="primary" className="mb-6 uppercase tracking-widest">Interlocking Ecosystem</Badge>
              <h2 className="text-h2 text-white mb-8 tracking-tighter italic">Unified Modular Network.</h2>
              <p className="text-body text-xl font-medium text-nooha-muted">Nooha's architecture is a continuous loop of functional intelligence, where every module feeds into a shared institutional context.</p>
           </motion.div>
        </div>

        <div className="relative h-[800px] max-w-5xl mx-auto flex items-center justify-center">
           {/* The Diamond Frame (Reference 6) */}
           <div className="absolute w-full h-full border border-white/5 rotate-45 scale-[0.8] opacity-20 pointer-events-none" />
           <div className="absolute w-[80%] h-[80%] border border-nooha-blue/10 rotate-45 scale-[0.8] opacity-40 pointer-events-none" />

           {/* Central Core */}
           <div className="relative z-10 p-12 bg-nooha-midnight border border-white/10 rounded-[3rem] shadow-2xl flex flex-col items-center justify-center text-center w-80 h-80 group">
              <NoohaLogo variant="compact" size="xl" animate />
              <h3 className="text-5xl font-black text-white tracking-tighter mt-4">ERP</h3>
              <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em] mt-2">Institutional OS</p>
              <div className="absolute inset-0 bg-nooha-blue/5 rounded-[3rem] animate-pulse" />
           </div>

           {/* Module Diamond Nodes */}
           {modules.map((m, i) => (
             <motion.div
               key={m.title}
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.05 }}
               className={cn("absolute w-48 p-6 group cursor-pointer", m.pos)}
             >
                <div className={cn(
                   "aspect-square rounded-[2rem] bg-nooha-slate border-t-4 shadow-2xl flex flex-col items-center justify-center transition-all duration-500 hover:-translate-y-4 hover:shadow-glow-blue",
                   m.color
                )}>
                   <div className="text-zinc-500 group-hover:text-white transition-colors mb-4">{m.icon}</div>
                   <h4 className="text-[10px] font-black text-white uppercase tracking-widest text-center">{m.title}</h4>
                </div>

                {/* Connection Line to Center */}
                <div className="absolute top-1/2 left-1/2 w-32 h-px bg-gradient-to-r from-nooha-blue/20 to-transparent -z-10 hidden lg:block" />
             </motion.div>
           ))}
        </div>
      </Container>
    </Section>
  );
}
