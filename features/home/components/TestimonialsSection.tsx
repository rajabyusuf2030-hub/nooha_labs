'use client';

import React from 'react';
import { Quote, CheckCircle2 } from 'lucide-react';
import { Container, Section, Card } from '@nooha/ui';
import { motion } from 'framer-motion';

export function TestimonialsSection() {
  const useCases = [
    {
      context: "Educational Institution",
      outcome: "Transformed management of 1,200+ students through automated Lipa Na M-Pesa reconciliation and centralized academic records.",
      metrics: ["Zero manual entry leakage", "120 staff hours saved/mo"],
    },
    {
      context: "Logistics Enterprise",
      outcome: "Deployed a multi-tenant telemetry dashboard for heavy equipment rental, integrating GPS tracking with financial ledgers.",
      metrics: ["Real-time asset visibility", "Automated contract logic"],
    },
    {
      context: "Financial Service",
      outcome: "Engineered a predictive risk assessment engine that processes institutional loan applications through custom AI workflows.",
      metrics: ["99.9% system availability", "Instant risk profiling"],
    },
  ];

  return (
    <Section className="bg-nooha-navy relative overflow-hidden py-40">
      <div className="absolute inset-0 bg-noise opacity-[0.01] pointer-events-none" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <span className="text-caption mb-4 block">Proven Utility</span>
          <h2 className="text-h2 text-white mb-8 leading-tight tracking-tighter">
            High-fidelity logic for <br/> <span className="text-nooha-blue opacity-80">diverse operational environments.</span>
          </h2>
          <p className="text-body text-xl font-medium">
            Instead of generic promises, we build demonstrable technical solutions for
            institutions that demand precision and security.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((item, i) => (
            <motion.div
              key={item.context}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card variant="glass" className="relative group hover:border-nooha-blue/20 transition-all duration-500 h-full p-10 rounded-[2.5rem]">
                <div className="flex items-center gap-3 mb-8">
                   <div className="w-1.5 h-1.5 rounded-full bg-nooha-blue shadow-glow-blue" />
                   <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">{item.context}</span>
                </div>

                <p className="text-zinc-400 italic mb-12 relative z-10 leading-relaxed text-lg font-medium">
                  &ldquo;{item.outcome}&rdquo;
                </p>

                <div className="pt-8 border-t border-white/5 space-y-4">
                   {item.metrics.map(m => (
                     <div key={m} className="flex items-center gap-3 text-[9px] font-black text-nooha-blue uppercase tracking-widest">
                        <CheckCircle2 size={12} />
                        {m}
                     </div>
                   ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
