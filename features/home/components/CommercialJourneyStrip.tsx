'use client';

import React from 'react';
import { Container, Section } from '@nooha/ui';
import { motion } from 'framer-motion';
import { FileText, ShieldCheck, Layers, CreditCard, Key, Settings } from 'lucide-react';

export function CommercialJourneyStrip() {
  const steps = [
    { icon: <FileText size={18} />, label: 'Apply' },
    { icon: <ShieldCheck size={18} />, label: 'Verify' },
    { icon: <Layers size={18} />, label: 'Select' },
    { icon: <CreditCard size={18} />, label: 'Subscribe' },
    { icon: <Key size={18} />, label: 'License' },
    { icon: <Settings size={18} />, label: 'Operate' },
  ];

  return (
    <Section padding="none" className="bg-nooha-midnight border-y border-white/5 overflow-hidden">
      <Container>
        <div className="py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xs">
              <span className="text-caption mb-2 block opacity-60">Commercial Flow</span>
              <h4 className="text-xl font-bold text-white tracking-tight">Transparent path from first contact to deployment.</h4>
            </div>

            <div className="flex-1 flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-8">
              {steps.map((step, i) => (
                <div key={step.label} className="flex flex-col items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-nooha-blue/5 border border-white/5 flex items-center justify-center text-zinc-700 group-hover:text-nooha-blue group-hover:border-nooha-blue/30 transition-all shadow-inner">
                    {step.icon}
                  </div>
                  <div className="flex items-center gap-3">
                     <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">{step.label}</span>
                     {i < steps.length - 1 && (
                       <div className="hidden lg:block w-4 h-px bg-zinc-800" />
                     )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
