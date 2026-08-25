'use client';

import React from 'react';
import { Container, Section, Badge, Button, Card, NoohaLogo } from '@nooha/ui';
import { Sparkles, Brain, MessageSquare, Database, ArrowRight, Activity, Cpu, ShieldCheck, Zap, Lock } from 'lucide-react';
import { AiInteractivePreview } from './components/AiInteractivePreview';
import { motion } from 'framer-motion';

export function AiProductFeature() {
  const capabilities = [
    { title: 'Predictive Insights', desc: 'Forecast institutional performance trends and financial outcomes using historical telemetry.', icon: <Brain size={24} /> },
    { title: 'Contextual Chat', desc: 'Natural language interface for deep, multi-module retrieval from your private institutional data.', icon: <MessageSquare size={24} /> },
    { title: 'Automated Logic', desc: 'AI-driven task prioritization and complex operational approval routing workflows.', icon: <Sparkles size={24} /> },
    { title: 'Intelligence Core', desc: 'Consolidate institutional knowledge into a private, searchable, and secure neural layer.', icon: <Database size={24} /> },
  ];

  return (
    <main className="pt-20">
      {/* 01. Product Hero */}
      <Section padding="xl" className="relative min-h-[90vh] flex items-center overflow-hidden bg-nooha-navy">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-nooha-violet/5 blur-[120px] rounded-full pointer-events-none" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="primary" className="mb-8 font-black tracking-[0.4em] px-5 py-2 uppercase border-nooha-violet/30 text-nooha-violet bg-nooha-violet/5">
                <Sparkles size={12} className="mr-2 inline" />
                INTELLIGENCE LAYER
              </Badge>
              <h1 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[1.05]">
                Nooha AI: Contextual <br />
                <span className="bg-gradient-to-r from-nooha-violet via-nooha-blue to-nooha-violet bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(124,58,237,0.3)]">Intelligence.</span>
              </h1>
              <p className="text-body text-xl mb-12 font-medium">
                A context-aware assistant designed to provide leaders with unprecedented
                clarity through predictive modeling and private natural language querying.
              </p>
              <div className="flex flex-wrap gap-5">
                <Button variant="premium" size="xl" href="/contact?subject=AI%20Waitlist%20Request" className="group shadow-glow-violet">
                  Join Private Waitlist <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="secondary" size="xl" href="#capabilities" className="px-12">
                  System Architecture
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative group"
            >
               <div className="absolute -inset-10 bg-nooha-violet/5 rounded-full blur-[100px] animate-pulse" />
               <div className="relative rounded-[2.5rem] border border-nooha-violet/20 bg-nooha-slate aspect-square flex items-center justify-center overflow-hidden shadow-elevated">

                  {/* Product Visual */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src="/assets/images/NOOHA-PROD-02.png"
                      alt="Nooha AI Predictive Analytics"
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nooha-midnight/60 via-transparent to-transparent pointer-events-none" />
                  </div>

                  <div className="relative z-10 flex flex-col items-center">
                     <motion.div
                        animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="w-24 h-24 bg-nooha-violet/10 rounded-3xl border border-nooha-violet/30 flex items-center justify-center text-nooha-violet mb-8 backdrop-blur-xl shadow-2xl"
                      >
                        <Brain size={48} strokeWidth={1} />
                     </motion.div>
                     <div className="px-5 py-2 rounded-full bg-nooha-midnight/80 border border-nooha-violet/20 backdrop-blur-md">
                        <span className="text-white font-black tracking-[0.4em] uppercase text-[9px]">Neural Core Active</span>
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>

          <div className="mt-32">
            <AiInteractivePreview />
          </div>
        </Container>
      </Section>

      {/* 02. Architecture & Capabilities */}
      <Section id="capabilities" className="bg-nooha-midnight relative overflow-hidden border-t border-white/5 py-40">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-nooha-violet/20 to-transparent" />
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-32">
             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="text-caption mb-4 block uppercase tracking-[0.4em]">Multi-Agent Integration</span>
                <h2 className="text-h2 text-white mb-8 tracking-tighter">Engineered for Data Sovereignty.</h2>
                <p className="text-body text-xl font-medium text-nooha-muted">Nooha AI operates within your institution's secure context, ensuring that proprietary intelligence never leaves your technical boundaries.</p>
             </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-40">
             {capabilities.map((item, i) => (
               <motion.div
                 key={item.title}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
               >
                 <Card variant="glass" className="p-12 bg-nooha-slate/20 border-nooha-border group hover:border-nooha-violet/30 transition-all duration-500 h-full rounded-[3rem]">
                    <div className="w-14 h-14 rounded-2xl bg-nooha-violet/5 border border-nooha-violet/10 flex items-center justify-center text-nooha-violet mb-10 group-hover:scale-110 transition-transform shadow-inner">
                       {item.icon}
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-6 group-hover:text-nooha-violet transition-colors tracking-tight">{item.title}</h4>
                    <p className="text-sm text-nooha-muted leading-relaxed font-medium">
                       {item.desc}
                    </p>
                 </Card>
               </motion.div>
             ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { title: 'ERP Data Sync', desc: 'Securely indexes your existing student and financial records.', icon: <Database /> },
               { title: 'Logic Hardening', desc: 'Technical guardrails preventing model hallucination and leakage.', icon: <Lock /> },
               { title: 'Actionable Alerts', desc: 'Proactive operational triggers pushed directly to leaders.', icon: <Zap /> },
             ].map(f => (
               <div key={f.title} className="flex gap-6 group">
                  <div className="text-nooha-violet opacity-40 group-hover:opacity-100 transition-opacity">{f.icon}</div>
                  <div>
                     <h4 className="text-white font-bold tracking-tight mb-1">{f.title}</h4>
                     <p className="text-xs text-nooha-muted leading-relaxed font-medium">{f.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </Container>
      </Section>

      {/* 03. Terminal CTA */}
      <Section className="bg-nooha-navy py-40">
         <Container>
            <div className="max-w-4xl mx-auto p-12 md:p-32 rounded-[5rem] border border-nooha-border bg-gradient-to-br from-nooha-slate to-nooha-midnight text-center relative overflow-hidden shadow-2xl">
               <div className="absolute inset-0 bg-noise opacity-[0.02]" />
               <div className="relative z-10">
                  <h3 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">Ready for automated <br/> institutional clarity?</h3>
                  <p className="text-nooha-muted text-xl mb-12 font-medium max-w-xl mx-auto leading-relaxed">Join the private beta for Nooha AI and help shape the future of intelligent institutional governance.</p>
                  <div className="flex flex-wrap justify-center gap-6">
                     <Button variant="premium" size="xl" href="/contact">Join the Waitlist</Button>
                     <Button variant="outline" size="xl" className="text-white border-white/20 hover:bg-white/10 px-12">System Technicals</Button>
                  </div>
               </div>
            </div>
         </Container>
      </Section>
    </main>
  );
}
