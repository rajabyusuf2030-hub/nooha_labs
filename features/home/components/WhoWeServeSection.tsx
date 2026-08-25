'use client';

import React from 'react';
import { Container, Section, Card, Badge } from '@nooha/ui';
import { motion } from 'framer-motion';
import { GraduationCap, Building2, Landmark, Rocket, ArrowRight } from 'lucide-react';

export function WhoWeServeSection() {
  const sectors = [
    {
      title: 'K-12 & Higher Ed',
      image: '/assets/images/NOOHA-EDU-02.jpg',
      desc: 'Institutions seeking to modernize administration and academic delivery through elite digital frameworks.',
      icon: <GraduationCap size={20} />,
    },
    {
      title: 'Commercial Fleet',
      image: '/assets/images/NOOHA-PROD-01.jpg',
      desc: 'Organizations looking to synchronize high-frequency logistics with financial and telemetry layers.',
      icon: <Rocket size={20} />,
    },
    {
      title: 'Institutional Ops',
      image: '/assets/images/NOOHA-PROD-03.png',
      desc: 'Entities managing complex multi-tenant workflows and high-volume sovereign information systems.',
      icon: <Landmark size={20} />,
    },
    {
      title: 'Digital Ventures',
      image: '/assets/images/Education.jfif',
      desc: 'Startups and innovators building new operations that require terminal-grade technical foundations.',
      icon: <Building2 size={20} />,
    },
  ];

  return (
    <Section className="bg-nooha-navy relative overflow-hidden py-40 border-t border-white/5">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <Badge variant="primary" className="mb-6 uppercase tracking-widest">Sector Focus</Badge>
            <h2 className="text-h2 text-white mb-8 tracking-tighter italic">Who we build for.</h2>
            <p className="text-body text-xl font-medium text-nooha-muted">
              Nooha Labs engineers systems for organizations that demand precision, scalability, and
              high-fidelity technical execution across their entire operational footprint.
            </p>
          </motion.div>

          <div className="flex items-center gap-4 text-[10px] font-black text-zinc-700 uppercase tracking-[0.4em]">
             <div className="w-12 h-px bg-zinc-800" />
             <span>Domain Expertise</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <Card variant="glass" className="h-full overflow-hidden p-0 rounded-[3rem] border border-white/5 hover:border-nooha-blue/30 transition-all duration-700 shadow-2xl flex flex-col">
                <div className="relative h-64 overflow-hidden border-b border-white/5">
                   <img
                     src={s.image}
                     alt={s.title}
                     className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-nooha-midnight via-nooha-midnight/40 to-transparent" />

                   <div className="absolute bottom-6 left-6 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-nooha-blue/20 backdrop-blur-md border border-nooha-blue/30 flex items-center justify-center text-nooha-blue shadow-2xl">
                         {s.icon}
                      </div>
                      <h4 className="text-xl font-bold text-white tracking-tight">{s.title}</h4>
                   </div>
                </div>

                <div className="p-10 flex-1">
                   <p className="text-sm text-nooha-muted leading-relaxed font-medium mb-10 group-hover:text-zinc-300 transition-colors">
                     {s.desc}
                   </p>

                   <div className="pt-8 border-t border-white/5 flex items-center justify-between text-nooha-blue opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      <span className="text-[10px] font-black uppercase tracking-widest italic">View Strategic Path</span>
                      <ArrowRight size={16} />
                   </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
