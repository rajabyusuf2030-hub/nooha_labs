'use client';

import React, { useState } from 'react';
import { Container, Section, Badge, Button, Card, Input } from '@nooha/ui';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Zap, Brain, Calendar, ArrowRight, CheckCircle2, MonitorPlay, MessageSquare } from 'lucide-react';
import { submitLead } from '@/firebase/firestore';

export function DemoFeature() {
  const [selectedProduct, setSelectedProduct] = useState('Nooha ERP');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const products = [
    { id: 'nooha-erp', name: 'Nooha ERP', icon: Database, desc: 'Education & Schools' },
    { id: 'nooha-rental', name: 'Nooha Rental', icon: Zap, desc: 'Logistics & Assets' },
    { id: 'nooha-ai', name: 'Nooha AI', icon: Brain, desc: 'Business Intelligence' },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      institution: formData.get('institution'),
      product: selectedProduct,
      source: 'Demo Request',
      status: 'demo_requested'
    };

    const result = await submitLead(data as any);
    if (result.success) {
      setIsSubmitted(true);
    }
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <main className="pt-20">
        <Section padding="xl">
          <Container className="flex flex-col items-center justify-center text-center py-20">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-24 h-24 rounded-[2.5rem] bg-success/10 border border-success/20 flex items-center justify-center text-success mb-10 shadow-glow"
            >
              <CheckCircle2 size={40} />
            </motion.div>
            <h2 className="text-4xl font-black text-white mb-6 tracking-tight">Demo Request Queued</h2>
            <p className="text-zinc-400 text-lg max-w-md mx-auto mb-12 font-medium">
              We have registered your interest in **{selectedProduct}**. A product specialist will contact you to coordinate a professional walkthrough.
            </p>
            <Button variant="outline" href="/" className="px-12 h-14">Return to Ecosystem</Button>
          </Container>
        </Section>
      </main>
    );
  }

  return (
    <main className="pt-20">
      <Section padding="xl" className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-nooha-blue/5 blur-[120px] rounded-full pointer-events-none" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="primary" className="mb-8 font-black tracking-[0.2em] px-5 py-2">Product Walkthrough</Badge>
              <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-8 leading-[1.1] tracking-tighter">Experience <br/> the Engine.</h1>
              <p className="text-zinc-400 text-xl leading-relaxed mb-12 font-medium">
                Request a professional demonstration of our high-scale platforms tailored to your specific organizational context.
              </p>

              <div className="space-y-8">
                 <div className="flex gap-6 items-center group">
                    <div className="w-12 h-12 rounded-xl bg-nooha-slate border border-white/5 flex items-center justify-center text-nooha-blue group-hover:border-nooha-blue/30 transition-all">
                       <MonitorPlay size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                       <h4 className="text-white font-bold">Guided Walkthrough</h4>
                       <p className="text-zinc-500 text-sm">Deep dive into logic and features.</p>
                    </div>
                 </div>
                 <div className="flex gap-6 items-center group">
                    <div className="w-12 h-12 rounded-xl bg-nooha-slate border border-white/5 flex items-center justify-center text-nooha-blue group-hover:border-nooha-blue/30 transition-all">
                       <MessageSquare size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                       <h4 className="text-white font-bold">Strategy Consultation</h4>
                       <p className="text-zinc-500 text-sm">Aligning technology with objectives.</p>
                    </div>
                 </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card variant="glass" className="p-10 md:p-14 bg-nooha-slate/40 border-white/5">
                <form onSubmit={handleSubmit} className="space-y-10">
                   <div className="space-y-4">
                      <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em]">Select System</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                         {products.map(p => (
                           <button
                             key={p.id}
                             type="button"
                             onClick={() => setSelectedProduct(p.name)}
                             className={`p-4 rounded-xl border flex flex-col items-center gap-3 transition-all duration-300 ${selectedProduct === p.name ? 'bg-nooha-blue/10 border-nooha-blue shadow-glow' : 'bg-nooha-midnight border-white/5 text-zinc-500 hover:border-zinc-700'}`}
                           >
                              <p.icon size={20} className={selectedProduct === p.name ? 'text-nooha-blue' : 'opacity-40'} />
                              <div className="text-center">
                                 <p className={`text-[10px] font-black uppercase tracking-widest ${selectedProduct === p.name ? 'text-white' : ''}`}>{p.name}</p>
                                 <p className="text-[8px] font-bold opacity-40 mt-1">{p.desc}</p>
                              </div>
                           </button>
                         ))}
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input name="fullName" label="Full Name" placeholder="John Doe" required className="bg-nooha-midnight" />
                      <Input name="email" label="Official Email" placeholder="john@institution.com" type="email" required className="bg-nooha-midnight" />
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input name="phone" label="Phone Number" placeholder="+254 XXX XXX XXX" required className="bg-nooha-midnight" />
                      <Input name="institution" label="Institution / Organization" placeholder="Example Ltd" required className="bg-nooha-midnight" />
                   </div>

                   <Button
                     type="submit"
                     size="xl"
                     isLoading={isSubmitting}
                     className="w-full h-16 shadow-2xl shadow-blue-900/30"
                   >
                     Schedule Walkthrough <ArrowRight size={18} className="ml-2" />
                   </Button>

                   <div className="flex items-center justify-center gap-3 opacity-40">
                      <Calendar size={14} className="text-nooha-blue" />
                      <span className="text-[9px] font-black uppercase tracking-widest">SLA: 24h Coordination</span>
                   </div>
                </form>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
