'use client';

import React from 'react';
import { Container, Section } from '@nooha/ui';
import { motion } from 'framer-motion';

export function TrustSection() {
  const logos = [
    { name: 'Logistics', tech: 'Fleet Telemetry' },
    { name: 'Education', tech: 'Institutional ERP' },
    { name: 'FinTech', tech: 'Predictive ROI' },
    { name: 'Enterprise', tech: 'Multi-Tenant' },
    { name: 'Government', tech: 'Data Sovereignty' },
  ];

  return (
    <Section padding="sm" className="bg-nooha-navy border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.02),_transparent_70%)] pointer-events-none" />

      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <p className="text-center text-caption mb-10">
            Engineering high-fidelity systems across sectors
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-20 gap-y-10 opacity-30 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0">
            {logos.map((logo, i) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-1 group cursor-default"
              >
                <span className="text-lg md:text-2xl font-black text-white italic tracking-tighter group-hover:text-nooha-blue transition-colors">
                  {logo.name}
                </span>
                <span className="text-[7px] font-black text-zinc-700 uppercase tracking-[0.2em] group-hover:text-zinc-500 transition-colors">
                   {logo.tech}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
