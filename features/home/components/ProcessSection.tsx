'use client';

import React, { useState } from 'react';
import { Container, Section, Card, cn, Badge } from '@nooha/ui';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, PenTool, Code2, Rocket, RefreshCw, ArrowRight, UserCheck, Microscope, Database, Activity } from 'lucide-react';

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const processDetails = [
    {
      step: '01',
      title: 'Logic Audit',
      icon: <Search size={24} />,
      image: '/assets/images/NOOHA-PROD-01.jpg',
      detail: 'We dive into the institutional logic, mapping users, entities, and data flows before a single line of code is written.',
      tags: ['Domain Discovery', 'User Mapping', 'Technical Strategy'],
    },
    {
      step: '02',
      title: 'System Design',
      icon: <PenTool size={24} />,
      image: '/assets/images/NOOHA-PROD-03.png',
      detail: 'Requirements are transformed into high-fidelity interactive blueprints and scalable system architectures.',
      tags: ['Multi-tenant Modeling', 'UX Logic', 'API Contracts'],
    },
    {
      step: '03',
      title: 'Elite Build',
      icon: <Code2 size={24} />,
      image: '/assets/images/NOOHA-PROD-02.png',
      detail: 'Development follows terminal quality gates, using type-safe logic and modular institutional kernels.',
      tags: ['Next.js / Flutter', 'Type-safety', 'Automated QA'],
    },
    {
      step: '04',
      title: 'Deployment',
      icon: <Rocket size={24} />,
      image: '/assets/images/NOOHA-EDU-03.jpg',
      detail: 'We guide the migration and activation process, ensuring institutional data integrity and operational continuity.',
      tags: ['Cloud Provisioning', 'Data Integrity', 'Onboarding'],
    },
    {
      step: '05',
      title: 'Evolution',
      icon: <RefreshCw size={24} />,
      image: '/assets/images/Education.jfif',
      detail: 'Systems evolve through real-time telemetry and user feedback, maintaining their value as the institution grows.',
      tags: ['Neural Feedback', 'Feature Scaling', 'Maintenance'],
    },
  ];

  return (
    <Section className="bg-nooha-navy relative overflow-hidden border-y border-white/5 py-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(37,99,235,0.03),_transparent_70%)] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          {/* Left: Interactive Navigation (Interlocking logic like reference 2) */}
          <div className="lg:col-span-5">
            <Badge variant="primary" className="mb-4 uppercase tracking-widest">Engineering Lifecycle</Badge>
            <h2 className="text-h2 text-white mb-8 leading-tight">
              A disciplined path from <br/><span className="text-nooha-blue">logic to operation.</span>
            </h2>
            <p className="text-body mb-16 max-w-xl font-medium text-nooha-muted">
              Every Nooha project follows a precise technical lifecycle designed to ensure the delivery of
              production-ready institutional ecosystems.
            </p>

            <div className="space-y-3">
              {processDetails.map((item, index) => (
                <button
                  key={item.step}
                  onClick={() => setActiveStep(index)}
                  className={cn(
                    "w-full flex items-center gap-8 p-6 rounded-2xl border transition-all text-left group relative overflow-hidden",
                    activeStep === index
                      ? "bg-nooha-blue/10 border-nooha-blue shadow-glow-blue"
                      : "bg-white/5 border-white/5 hover:border-white/10"
                  )}
                >
                  <span className={cn(
                    "text-xl font-black italic transition-colors",
                    activeStep === index ? "text-nooha-blue" : "text-zinc-800 group-hover:text-zinc-600"
                  )}>
                    {item.step}
                  </span>
                  <div className="flex-1">
                    <h4 className={cn(
                      "text-lg font-bold transition-colors uppercase tracking-tight",
                      activeStep === index ? "text-white" : "text-zinc-500 group-hover:text-zinc-300"
                    )}>
                      {item.title}
                    </h4>
                  </div>
                  {activeStep === index && (
                    <motion.div layoutId="arrow" className="text-nooha-blue">
                       <ArrowRight size={20} />
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Detail Panel with Human Imagery */}
          <div className="lg:col-span-7 flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5, ease: [0.21, 0.45, 0.32, 0.9] }}
                className="w-full h-full"
              >
                <Card variant="glass" className="bg-nooha-slate/40 border-nooha-border overflow-hidden rounded-[3rem] h-full flex flex-col p-0">
                   <div className="h-80 relative overflow-hidden">
                      <img
                        src={processDetails[activeStep].image}
                        alt={processDetails[activeStep].title}
                        className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 transition-all duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-nooha-midnight via-nooha-midnight/40 to-transparent" />

                      {/* Technical Detail Overlays */}
                      <div className="absolute bottom-10 left-10">
                         <div className="w-16 h-16 rounded-2xl bg-nooha-blue/20 backdrop-blur-xl border border-nooha-blue/30 flex items-center justify-center text-nooha-blue shadow-2xl mb-4">
                            {processDetails[activeStep].icon}
                         </div>
                         <h3 className="text-4xl font-black text-white tracking-tighter uppercase italic">
                            {processDetails[activeStep].title}
                         </h3>
                      </div>
                   </div>

                   <div className="p-12 md:p-16 flex-1 flex flex-col">
                      <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed mb-12 font-medium">
                         {processDetails[activeStep].detail}
                      </p>

                      <div className="mt-auto pt-10 border-t border-white/5 flex flex-wrap gap-4">
                         {processDetails[activeStep].tags.map(tag => (
                           <span key={tag} className="px-6 py-2.5 rounded-xl bg-nooha-midnight border border-white/10 text-[10px] font-black text-zinc-500 uppercase tracking-widest transition-colors hover:text-nooha-blue hover:border-nooha-blue/20">
                              {tag}
                           </span>
                         ))}
                      </div>
                   </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </Section>
  );
}
