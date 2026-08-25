'use client';

import React from 'react';
import { Container, Section } from '@nooha/ui';
import { motion } from 'framer-motion';

export function PositioningStrip() {
  const points = ['Technology', 'Intelligence', 'Operations', 'Impact'];

  return (
    <Section padding="none" className="bg-nooha-midnight border-y border-nooha-border relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.02),_transparent_70%)] pointer-events-none" />

      <Container>
        <div className="py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mb-8">
              {points.map((point, i) => (
                <React.Fragment key={point}>
                  <span className="text-[11px] font-black uppercase tracking-[0.4em] text-nooha-blue">
                    {point}
                  </span>
                  {i < points.length - 1 && (
                    <div className="w-1 h-1 rounded-full bg-nooha-border" />
                  )}
                </React.Fragment>
              ))}
            </div>

            <p className="text-xl md:text-2xl font-bold text-white max-w-4xl leading-relaxed tracking-tight">
              From institutional platforms to intelligent digital tools, Nooha builds systems
              designed around the way <span className="text-nooha-blue italic">organizations actually work.</span>
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
