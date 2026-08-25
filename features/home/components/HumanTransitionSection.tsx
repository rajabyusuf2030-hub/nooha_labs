'use client';

import React from 'react';
import { Container, Section } from '@nooha/ui';
import { motion } from 'framer-motion';

export function HumanTransitionSection() {
  return (
    <Section className="bg-nooha-navy relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="relative aspect-[4/3] rounded-[3.5rem] overflow-hidden border border-white/5 shadow-elevated group">
              <img
                src="/assets/images/NOOHA-EDU-02.jpg"
                alt="Students Collaborating"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nooha-midnight via-transparent to-transparent opacity-60" />
            </div>

            {/* Decorative element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-nooha-blue/10 blur-[80px] rounded-full pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="text-caption mb-4 block">The Human Centric Approach</span>
            <h2 className="text-h2 text-white mb-8 leading-tight">
              Technology should work for people—not the other way around.
            </h2>
            <p className="text-body max-w-xl font-medium">
              At Nooha, we don't build software just to add features. We design systems around real users, real workflows, and the real-world constraints of your institution.
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
