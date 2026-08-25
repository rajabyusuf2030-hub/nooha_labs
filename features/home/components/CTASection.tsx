'use client';

import React from 'react';
import { Container, Section, Button } from '@nooha/ui';
import { motion } from 'framer-motion';
import { ArrowRight, FileDown } from 'lucide-react';

export function CTASection() {
  return (
    <Section padding="xl" className="bg-nooha-navy relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-large bg-nooha-blue px-8 py-24 md:px-24 text-center shadow-elevated"
        >
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] border-[60px] border-white/5 rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] border-[30px] border-white/5 rounded-full pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1),_transparent)] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[10px] font-black text-white/60 uppercase tracking-[0.6em] mb-10 block"
            >
              Strategic Engagement
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-7xl font-black text-white mb-8 leading-[1.05] tracking-tighter"
            >
              Ready to engineer your <br/> next digital frontier?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-white/80 text-xl mb-12 leading-relaxed font-medium"
            >
              Whether you need a high-scale institutional ERP, a specialized logistics portal,
              or bespoke AI automation, Nooha Labs provides the elite architecture you require.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <Button
                variant="secondary"
                size="xl"
                href="/contact"
                className="bg-nooha-navy text-white border-none hover:bg-black px-12 group shadow-2xl"
              >
                Start a Project <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                href="/portfolio"
                className="text-white border-white/20 hover:bg-white/10 hover:border-white px-12 backdrop-blur-md"
              >
                View Selected Work
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-20 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-10 text-[10px] font-black text-white/40 uppercase tracking-[0.4em]"
            >
               <span>Global Delivery</span>
               <span>Cloud Native</span>
               <span>ISO 27001 Standard</span>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
