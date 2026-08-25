'use client';

import React from 'react';
import { Container, Section, Card } from '@nooha/ui';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Database, Zap, BarChart3, Link } from 'lucide-react';

export function TechnologyEcosystemSection() {
  const stacks = [
    { title: 'Modular Architecture', icon: <Cpu size={18} /> },
    { title: 'Data Sovereignty', icon: <Database size={18} /> },
    { title: 'Security First', icon: <ShieldCheck size={18} /> },
    { title: 'Automation', icon: <Zap size={18} /> },
    { title: 'Intelligent Analytics', icon: <BarChart3 size={18} /> },
    { title: 'Future Integrations', icon: <Link size={18} /> },
  ];

  return (
    <Section className="bg-nooha-midnight relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-nooha-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-caption mb-4 block">Institutional Infrastructure</span>
            <h2 className="text-h2 text-white mb-8">
              Built for today. <br/> <span className="text-nooha-blue">Designed to evolve.</span>
            </h2>
            <p className="text-body max-w-xl font-medium mb-12">
              Nooha's systems are designed with extensibility, security, data, and future integrations in mind—so organizations don't have to rebuild every time they grow.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stacks.map((item, i) => (
                <div key={item.title} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-nooha-blue/30 transition-all group">
                   <div className="text-nooha-blue opacity-50 group-hover:opacity-100 transition-opacity">
                      {item.icon}
                   </div>
                   <span className="text-xs font-black uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">{item.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
             <div className="absolute -inset-10 bg-nooha-blue/5 rounded-full blur-[100px] animate-pulse" />
             <div className="relative rounded-[3.5rem] border border-nooha-border bg-nooha-slate overflow-hidden shadow-elevated group">
                <img
                  src="/assets/images/NOOHA-PROD-02.png"
                  alt="Nooha Analytics Ecosystem"
                  className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nooha-midnight via-transparent to-transparent opacity-60" />
             </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
