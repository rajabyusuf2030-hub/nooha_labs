'use client';

import React from 'react';
import { Container, Section, Card, CardHeader, CardTitle, CardDescription, Badge, Button, NoohaLogo } from '@nooha/ui';
import { ArrowUpRight, ArrowRight, Activity, Zap, ShieldCheck } from 'lucide-react';
import { CaseStudyTemplate } from './components/CaseStudyTemplate';
import { motion } from 'framer-motion';

export function PortfolioFeature() {
  const projects = [
    {
      title: 'SiteLogistics Pro',
      client: 'Kasarani Rentals Ltd',
      category: 'Logistics',
      impact: 'Real-time inventory tracking for 500+ pieces of heavy machinery with GPS integration.',
      image: '/assets/images/NOOHA-PROD-01.jpg',
      tags: ['Next.js', 'Tailwind', 'PostgreSQL'],
    },
    {
      title: 'FinIntelligence Hub',
      client: 'Stellar FinTech',
      category: 'Finance',
      impact: 'Real-time predictive analytics engine for institutional loan default risk management.',
      image: '/assets/images/NOOHA-PROD-02.png',
      tags: ['AI/ML', 'React', 'GCP'],
    },
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
            className="max-w-3xl mb-24"
          >
            <Badge variant="primary" className="mb-8 px-5 py-2 uppercase">
              Proven Institutional Impact
            </Badge>
            <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
              High-fidelity systems <br />
              <span className="bg-gradient-to-r from-nooha-blue to-nooha-cyan bg-clip-text text-transparent italic">deployed at scale.</span>
            </h1>
            <p className="text-body text-xl max-w-2xl font-medium">
              Explore our track record of delivering high-scale systems, automated financial
              frameworks, and bespoke digital solutions across diverse industries.
            </p>
          </motion.div>

          {/* Featured Deployment */}
          <div className="mb-40">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
             >
                <span className="text-caption mb-12 block uppercase tracking-[0.4em]">Flagship Deployment</span>
                <div className="relative group overflow-hidden rounded-[4rem] border border-nooha-border bg-nooha-slate mb-16 shadow-2xl">
                   <div className="h-64 md:h-[600px] w-full relative">
                      <img
                         src="/assets/images/NOOHA-ERP-01.png"
                         alt="Case Study: Greenwood Academy Deployment"
                         className="w-full h-full object-cover opacity-80 transition-all duration-1000 group-hover:scale-[1.02] group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-nooha-midnight via-nooha-midnight/20 to-transparent" />

                      <div className="absolute bottom-12 left-12 z-10">
                         <div className="px-8 py-4 rounded-3xl bg-nooha-blue/90 backdrop-blur-xl border border-nooha-blue/20 shadow-2xl">
                            <p className="text-[10px] font-black text-white uppercase tracking-[0.4em] mb-1 opacity-60">System Status</p>
                            <h4 className="text-white font-black text-2xl tracking-tighter">Greenwood Academy — Active</h4>
                         </div>
                      </div>
                   </div>
                </div>
             </motion.div>

             <CaseStudyTemplate
                title="Greenwood Academy ERP"
                client="Greenwood Schools"
                challenge="Greenwood Academy was managing 1,200 students using manual spreadsheets and paper records, leading to constant operational fragmentation and revenue leakage."
                solution="We deployed a multi-tenant Nooha ERP instance with automated Lipa Na M-Pesa reconciliation, a parent portal for real-time tracking, and central academic governance."
                results={[
                  "Zero manual entry for fee payments.",
                  "Real-time visibility for administrators.",
                  "Increased fee collection efficiency by 40%.",
                  "Automated statutory compliance logic."
                ]}
                metrics={[
                  { label: "Annual Revenue Recovered", value: "KES 6.8M" },
                  { label: "Reconciliation Speed", value: "< 1 Sec" },
                  { label: "Staff Hours Saved / Month", value: "120 Hrs" }
                ]}
             />
          </div>

          {/* Technical Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-32 border-t border-white/5">
            {projects.map((p, index) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="glass" isHoverable className="group bg-nooha-slate/40 border-nooha-border overflow-hidden flex flex-col h-full rounded-[3rem]">
                  <div className="h-80 relative overflow-hidden border-b border-nooha-border">
                     <img src={p.image} alt={p.title} className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                     <div className="absolute inset-0 bg-gradient-to-t from-nooha-midnight to-transparent" />
                  </div>
                  <div className="p-12 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                      <Badge variant="outline" className="px-4 py-1.5 rounded-lg uppercase tracking-widest text-[9px] font-black">{p.category}</Badge>
                      <div className="w-12 h-12 rounded-2xl bg-nooha-navy border border-nooha-border flex items-center justify-center group-hover:text-nooha-blue transition-colors shadow-inner">
                         <ArrowUpRight size={24} />
                      </div>
                    </div>
                    <CardTitle className="text-3xl font-bold mb-3 group-hover:text-nooha-blue transition-colors tracking-tight">{p.title}</CardTitle>
                    <p className="text-[10px] font-black text-nooha-blue uppercase tracking-[0.4em] mb-10">{p.client}</p>
                    <CardDescription className="text-lg text-nooha-muted leading-relaxed mb-12 font-medium">
                      {p.impact}
                    </CardDescription>
                    <div className="mt-auto flex flex-wrap gap-3">
                      {p.tags.map(tag => (
                        <span key={tag} className="px-4 py-1.5 bg-nooha-midnight border border-white/5 rounded-full text-[9px] font-black text-white/30 uppercase tracking-widest group-hover:text-nooha-blue transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-40 p-12 md:p-32 rounded-[5rem] border border-nooha-border bg-gradient-to-br from-nooha-slate to-nooha-midnight text-center relative overflow-hidden shadow-2xl"
          >
             <div className="absolute inset-0 bg-noise opacity-[0.02]" />
             <h3 className="text-3xl md:text-6xl font-black text-white mb-10 tracking-tighter leading-tight italic">Have a high-scale project <br/> in the laboratory?</h3>
             <p className="text-nooha-muted text-xl md:text-2xl mb-16 max-w-3xl mx-auto font-medium">We adapt our engineering model to match your institutional velocity. From rapid prototypes to multi-year platform maintenance.</p>
             <div className="flex flex-wrap justify-center gap-6">
                <Button href="/contact" size="xl" variant="premium">Start a Conversation</Button>
                <Button href="/products" size="xl" variant="outline" className="text-white border-white/20">Explore Products</Button>
             </div>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}
