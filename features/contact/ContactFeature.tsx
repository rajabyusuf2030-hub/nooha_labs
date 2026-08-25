'use client';

import React, { useState } from 'react';
import { Container, Section, Card, Input, Button, Badge } from '@nooha/ui';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight, MessageSquare, Globe, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { useSearchParams } from 'next/navigation';
import { submitLead } from '@/firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';

export function ContactFeature() {
  const searchParams = useSearchParams();
  const defaultSubject = searchParams.get('subject') || 'Strategic Inquiry';
  const projectTypes = ['Institutional ERP', 'Custom AI Service', 'Digital Platform', 'Technical Consulting'];

  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Spam protection: check honeypot
    const formData = new FormData(e.currentTarget);
    const honeypot = formData.get('website_url') as string;
    if (honeypot) {
      setIsSubmitted(true);
      return;
    }

    setIsSubmitting(true);

    const data = {
      name: formData.get('fullName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      institution: formData.get('institution') as string,
      product: selectedType,
      requirements: formData.get('requirements') as string,
      source: 'Contact Page',
      status: 'inquiry_captured'
    };

    const result = await submitLead(data as any);

    setIsSubmitting(false);
    if (result.success) {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <main className="pt-20">
        <Section padding="xl" className="bg-nooha-midnight">
          <Container className="flex flex-col items-center justify-center text-center py-24">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-24 h-24 rounded-[2.5rem] bg-success/10 border border-success/20 flex items-center justify-center text-success mb-10 shadow-glow"
            >
              <CheckCircle2 size={40} />
            </motion.div>
            <h2 className="text-4xl font-black text-white mb-6 tracking-tight">Transmission Successful.</h2>
            <p className="text-zinc-400 text-lg max-w-md mx-auto mb-12 font-medium">
              Your inquiry has been logged in the Nooha control plane. Our strategy team will review your requirements and respond within **4 operational hours**.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" onClick={() => setIsSubmitted(false)} className="px-12 h-14">Send Another Message</Button>
              <Button variant="primary" href="/" className="px-12 h-14 shadow-2xl shadow-blue-900/20">Return Home</Button>
            </div>
          </Container>
        </Section>
      </main>
    );
  }

  return (
    <main className="pt-20">
      <Section padding="xl" className="relative overflow-hidden bg-nooha-midnight">
        <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-nooha-blue/5 blur-[120px] rounded-full pointer-events-none" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="primary" className="mb-8 font-black tracking-[0.2em] px-5 py-2">Global Operations</Badge>
              <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-8 leading-[1.05] tracking-tighter">
                Let's start a <br />
                <span className="bg-gradient-to-r from-nooha-blue to-nooha-cyan bg-clip-text text-transparent">Conversation.</span>
              </h1>
              <p className="text-zinc-400 text-xl leading-relaxed mb-16 font-medium max-w-lg">
                Have a high-scale project in mind? We are ready to discuss your requirements
                and how our logic engines can power your institution.
              </p>

              <div className="space-y-12">
                <ContactInfoItem
                  icon={<Mail size={18} strokeWidth={1.5} />}
                  label="Strategic Inquiries"
                  value={siteConfig.email}
                />
                <ContactInfoItem
                  icon={<Globe size={18} strokeWidth={1.5} />}
                  label="Regional Presence"
                  value={siteConfig.location}
                />

                <div className="pt-10 border-t border-white/5 space-y-8">
                   <div>
                      <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em] mb-6">Service Level Commitment</p>
                      <div className="grid grid-cols-2 gap-8">
                         <div className="space-y-1">
                            <p className="text-white font-bold text-lg">Under 4 Hours</p>
                            <p className="text-[10px] text-nooha-muted font-bold uppercase tracking-widest">SLA Response</p>
                         </div>
                         <div className="space-y-1">
                            <p className="text-white font-bold text-lg">99.99% Core</p>
                            <p className="text-[10px] text-nooha-muted font-bold uppercase tracking-widest">Uptime Record</p>
                         </div>
                      </div>
                   </div>

                   <div className="p-8 rounded-[2.5rem] bg-nooha-blue/5 border border-nooha-blue/10">
                      <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                         <ShieldCheck size={16} className="text-nooha-blue" />
                         Technical Privacy
                      </h4>
                      <p className="text-xs text-nooha-muted leading-relaxed font-medium">
                        Your transmission is encrypted via TLS 1.3 and logged for audit integrity. We maintain a zero-spam policy and do not share institutional data.
                      </p>
                   </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card variant="glass" className="p-10 md:p-14 bg-nooha-slate/40 border-white/5 shadow-2xl backdrop-blur-2xl">
                <form className="space-y-10" onSubmit={handleSubmit}>
                  {/* Honeypot field - hidden from users */}
                  <div className="hidden" aria-hidden="true">
                    <input type="text" name="website_url" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className="space-y-6">
                     <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em]">Select Project Intent</p>
                     <div className="flex flex-wrap gap-3">
                        {projectTypes.map(type => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setSelectedType(type)}
                            className={`px-5 py-2.5 rounded-sm border transition-all text-[10px] font-black uppercase tracking-widest ${
                              selectedType === type
                                ? 'border-nooha-blue bg-nooha-blue/10 text-white shadow-glow'
                                : 'border-white/5 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300'
                            }`}
                          >
                             {type}
                          </button>
                        ))}
                     </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <Input name="fullName" label="Full Name" placeholder="John Doe" required className="bg-nooha-midnight" />
                    <Input name="email" label="Official Email" placeholder="john@example.com" type="email" required className="bg-nooha-midnight" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <Input name="phone" label="Phone Number" placeholder="+254 XXX XXX XXX" required className="bg-nooha-midnight" />
                    <Input name="institution" label="Institution / Organization" placeholder="Institution Name" required className="bg-nooha-midnight" />
                  </div>

                  <div className="w-full">
                    <label className="mb-2 block text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 px-1">
                      Project Specifications
                    </label>
                    <textarea
                      name="requirements"
                      className="flex min-h-[160px] w-full rounded-sm border border-white/5 bg-nooha-midnight px-5 py-4 text-sm text-white placeholder:text-zinc-700 focus:border-nooha-blue/40 focus:outline-none focus:ring-0 transition-all font-medium"
                      placeholder="Describe the scale, challenges, and objectives of your project..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="xl"
                    isLoading={isSubmitting}
                    className="w-full h-16 shadow-2xl shadow-blue-900/30 font-black uppercase tracking-widest text-[11px]"
                  >
                    Transmit Inquiry <ArrowRight size={18} className="ml-2" />
                  </Button>

                  <div className="flex items-center justify-center gap-6 opacity-30">
                     <div className="flex items-center gap-2">
                        <ShieldCheck size={14} />
                        <span className="text-[9px] font-black uppercase tracking-widest">Secure TLS 1.3</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <MessageSquare size={14} />
                        <span className="text-[9px] font-black uppercase tracking-widest">End-to-End Logged</span>
                     </div>
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

function ContactInfoItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex gap-8 group">
      <div className="shrink-0 w-12 h-12 rounded-2xl bg-nooha-slate border border-white/5 flex items-center justify-center text-nooha-blue group-hover:border-nooha-blue/30 transition-all shadow-inner">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] mb-1">{label}</p>
        <p className="text-white font-bold text-lg tracking-tight">{value}</p>
      </div>
    </div>
  );
}
