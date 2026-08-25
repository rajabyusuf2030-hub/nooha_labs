'use client';

import React from 'react';
import { ArrowRight, Sparkles, Database, ShieldCheck, Activity, BarChart3, Users } from 'lucide-react';
import { Button, Badge, Container, Section } from '@nooha/ui';
import { motion } from 'framer-motion';
import { HeroBackground } from './HeroBackground';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.45, 0.32, 0.9],
      },
    },
  };

  return (
    <Section padding="xl" className="relative min-h-[95vh] flex items-center pt-32 lg:pt-0 overflow-hidden">
      <HeroBackground />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left relative z-10"
          >
            <motion.div variants={itemVariants}>
              <Badge variant="primary" className="mb-8 font-black tracking-[0.4em] px-5 py-2">
                INTELLIGENT DIGITAL SYSTEMS
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-display text-white mb-8"
            >
              We build technology <br />
              <span className="bg-gradient-to-r from-nooha-blue via-nooha-cyan to-nooha-blue bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                that moves organizations forward.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-4 max-w-xl text-body font-medium"
            >
              Nooha Labs designs and develops intelligent digital systems that help organizations
              simplify operations, understand their data, and build better experiences.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-wrap items-center gap-6"
            >
              <Button size="xl" variant="premium" href="/products" className="group">
                Explore what we build <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="secondary" size="xl" href="/contact">
                Talk to Nooha
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-6"
            >
               <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-nooha-green shadow-glow-green animate-pulse" />
                  <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em]">Infrastructure ready</span>
               </div>
               <div className="flex gap-8 items-center border-l border-white/5 pl-10 opacity-40 hover:opacity-100 transition-opacity">
                  <span className="text-zinc-400 text-xs font-black tracking-widest uppercase">Next.js 15</span>
                  <span className="text-zinc-400 text-xs font-black tracking-widest uppercase">Flutter 3.27</span>
                  <span className="text-zinc-400 text-xs font-black tracking-widest uppercase">GCP / Firebase</span>
               </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-16 flex items-center gap-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
               <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.3em]">Built with</span>
               <div className="flex gap-6 items-center">
                  <div className="h-5 w-px bg-zinc-800" />
                  <span className="text-zinc-400 text-xs font-bold tracking-tighter">NEXT.JS</span>
                  <span className="text-zinc-400 text-xs font-bold tracking-tighter">FLUTTER</span>
                  <span className="text-zinc-400 text-xs font-bold tracking-tighter">FIREBASE</span>
               </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.21, 0.45, 0.32, 0.9] }}
            className="relative z-10 lg:translate-x-10"
          >
            <div className="absolute -inset-10 bg-nooha-green/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-nooha-green/20 to-nooha-cyan/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

              {/* High-Fidelity Ecosystem Mockup (Image 1) */}
              <div className="relative rounded-[2.5rem] border border-white/5 bg-nooha-navy overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.9)] backdrop-blur-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                <img
                  src="/assets/images/NOOHA-PROD-03.png"
                  alt="Nooha Labs Ecosystem"
                  className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                />

                {/* Subtle Interactive Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-nooha-navy/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Element 1: AI Insight */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 p-6 rounded-[2.5rem] bg-nooha-midnight/95 border border-nooha-border shadow-2xl backdrop-blur-2xl group-hover:scale-110 transition-transform z-20"
              >
                 <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-nooha-green/10 flex items-center justify-center text-nooha-green shadow-inner border border-nooha-green/20">
                      <Sparkles size={28} />
                    </div>
                    <div>
                      <p className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.3em] mb-1">Neural Core Active</p>
                      <p className="text-white text-lg font-black tracking-tight">+31.2% <span className="text-zinc-500 font-medium text-xs">Prediction Accuracy</span></p>
                    </div>
                 </div>
              </motion.div>

              {/* Floating Element 2: Secure Identity */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-12 -left-12 p-5 rounded-3xl bg-[#090D16]/90 border border-[#1E293B] shadow-2xl backdrop-blur-md hidden xl:block z-20"
              >
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                      <ShieldCheck size={20} className="text-blue-500" />
                    </div>
                    <div>
                       <p className="text-[9px] text-zinc-600 font-black uppercase tracking-widest">Security Protocol</p>
                       <span className="text-[11px] text-zinc-300 font-bold uppercase tracking-widest">AES-256 Encrypted</span>
                    </div>
                 </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
