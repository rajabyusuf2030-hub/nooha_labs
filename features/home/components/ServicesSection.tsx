'use client';

import React from 'react';
import { Rocket, Globe, Sparkles, ShieldCheck, ArrowRight, Layout, Activity, Database, Cpu, Users, Layers, Brain } from 'lucide-react';
import { Container, Section, Badge, Button, cn } from '@nooha/ui';
import { motion } from 'framer-motion';

export function ServicesSection() {
  const capabilities = [
    {
      title: 'Digital Platforms',
      image: '/assets/images/NOOHA-PROD-03.png',
      desc: 'Build scalable platforms designed around real operational needs.',
      icon: <Layout size={18} />,
    },
    {
      title: 'Business Systems',
      image: '/assets/images/Education.jfif',
      desc: 'Connect workflows, information, and people into digital environments.',
      icon: <Activity size={18} />,
    },
    {
      title: 'Data & Intelligence',
      image: '/assets/images/NOOHA-PROD-01.jpg',
      desc: 'Turn operational data into insight through predictive models.',
      icon: <Brain size={18} />,
    },
    {
      title: 'Custom Technology',
      image: '/assets/images/NOOHA-PROD-02.png',
      desc: 'Build specialized solutions where existing tools are not enough.',
      icon: <Cpu size={18} />,
    },
  ];

  return (
    <Section id="capabilities" className="relative overflow-hidden bg-nooha-midnight py-40 border-y border-white/5">
      <div className="absolute inset-0 bg-grid-white opacity-[0.02] pointer-events-none" />

      <Container>
        <div className="text-center max-w-4xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="primary" className="mb-6 uppercase tracking-widest">Capability Portfolio</Badge>
            <h2 className="text-h2 text-white mb-8 leading-tight">
              From ideas to <br/> <span className="text-nooha-blue">intelligent systems.</span>
            </h2>
            <p className="text-body text-xl font-medium text-nooha-muted">
              We design and build software that connects people, processes, and information
              into systems that are easier to operate and easier to grow.
            </p>
          </motion.div>
        </div>

        <div className="relative min-h-[600px] flex items-center justify-center">
           {/* Central Graphic - person centered like reference 3 */}
           <div className="relative z-10 w-72 h-72 rounded-full border-4 border-nooha-blue/10 p-2 overflow-hidden shadow-2xl">
              <img
                src="/assets/images/NOOHA-EDU-02.jpg"
                alt="Engineering Laboratory"
                className="w-full h-full object-cover rounded-full opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-nooha-midnight via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-nooha-midnight/80 backdrop-blur-md px-6 py-3 rounded-full border border-nooha-blue/20">
                    <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">NOOHA LABS HUB</span>
                 </div>
              </div>
           </div>

           {/* Outer Radiating Capability Nodes with Real People images */}
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-5xl">
                 {capabilities.map((item, i) => {
                   // Position 4 items in a circle
                   const angles = [45, 135, 225, 315];
                   const radius = 300;
                   const x = Math.cos((angles[i] * Math.PI) / 180) * radius;
                   const y = Math.sin((angles[i] * Math.PI) / 180) * radius;

                   return (
                     <motion.div
                       key={item.title}
                       initial={{ opacity: 0, scale: 0.5 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.15 }}
                       className="absolute w-72 p-6 rounded-[2.5rem] bg-nooha-slate/40 border border-white/5 backdrop-blur-xl group hover:border-nooha-blue/30 transition-all duration-700 shadow-2xl"
                       style={{
                         left: `calc(50% + ${x}px)`,
                         top: `calc(50% + ${y}px)`,
                         transform: 'translate(-50%, -50%)',
                       }}
                     >
                        <div className="relative mb-6 overflow-hidden rounded-2xl aspect-video border border-white/10 group-hover:border-nooha-blue/40 transition-colors">
                           <img
                             src={item.image}
                             alt={item.title}
                             className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-nooha-midnight/60 via-transparent to-transparent" />
                           <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-nooha-blue/20 backdrop-blur-md flex items-center justify-center text-nooha-blue border border-nooha-blue/20">
                              {item.icon}
                           </div>
                        </div>
                        <h4 className="text-white font-bold mb-2 group-hover:text-nooha-blue transition-colors tracking-tight">{item.title}</h4>
                        <p className="text-[11px] text-nooha-muted leading-relaxed font-medium">{item.desc}</p>
                     </motion.div>
                   );
                 })}
              </div>
           </div>

           {/* Cyclic Connector Line */}
           <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-[600px] h-[600px] border border-nooha-blue/5 rounded-full pointer-events-none"
           />
        </div>

        <div className="mt-40 text-center">
           <Button href="/portfolio" variant="secondary" size="lg" className="px-12 group">
              View Detailed Capabilities <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
           </Button>
        </div>
      </Container>
    </Section>
  );
}
