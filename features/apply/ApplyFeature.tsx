'use client';

import React, { useState } from 'react';
import { Container, Section, Badge, Button, Card, Input, NoohaLogo, cn } from '@nooha/ui';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  Building2,
  Users,
  GraduationCap,
  ClipboardCheck,
  ArrowRight,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Database,
  Zap,
  Lock,
  Search,
  Layers,
  FileText,
  CreditCard,
  Settings,
  ArrowLeft
} from 'lucide-react';
import { submitLead } from '@/firebase/firestore';

type Step = 1 | 2 | 3 | 4 | 5 | 6 | 'success';

export function ApplyFeature() {
  const [step, setStep] = useState<Step>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [appId, setAppId] = useState('');

  const [formData, setFormData] = useState({
    institutionName: '',
    institutionType: 'Primary / Secondary',
    location: '',
    size: '100 - 500',
    applicantName: '',
    applicantPosition: '',
    email: '',
    phone: '',
    requirements: '',
    selectedModules: ['Students', 'Academics', 'Attendance'],
  });

  const nextStep = () => setStep((prev) => (prev === 'success' ? 'success' : (prev + 1) as Step));
  const prevStep = () => setStep((prev) => (prev === 'success' ? 'success' : (prev - 1) as Step));

  const toggleModule = (mod: string) => {
    setFormData(prev => ({
      ...prev,
      selectedModules: prev.selectedModules.includes(mod)
        ? prev.selectedModules.filter(m => m !== mod)
        : [...prev.selectedModules, mod]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = await submitLead({
      ...formData,
      product: 'Nooha ERP',
      source: 'Institutional Application',
      status: 'pending_verification'
    } as any);

    if (result.success) {
      setAppId('NHA-' + Math.random().toString(36).substring(2, 8).toUpperCase());
      setStep('success');
    }
    setIsSubmitting(false);
  };

  const steps = [
    { id: 1, title: 'Institution', icon: Building2 },
    { id: 2, title: 'Contact', icon: Users },
    { id: 3, title: 'Requirements', icon: FileText },
    { id: 4, title: 'Modules', icon: Layers },
    { id: 5, title: 'Review', icon: Search },
    { id: 6, title: 'Submit', icon: ShieldCheck },
  ];

  return (
    <main className="pt-20 bg-nooha-navy min-h-screen">
      <Section padding="xl" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-nooha-blue/5 blur-[120px] rounded-full pointer-events-none" />

        <Container>
          <div className="max-w-4xl mx-auto">
            {step !== 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-20 text-center"
              >
                <Badge variant="primary" className="mb-6 px-5 py-2 uppercase font-black tracking-widest text-[9px]">Onboarding Engine</Badge>
                <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter">Bring Nooha to <br/> your <span className="text-nooha-blue italic">institution.</span></h1>
                <p className="text-nooha-muted text-xl max-w-2xl mx-auto font-medium">Tell us about your institution and requirements. We'll guide you through the next technical steps.</p>

                {/* Progress Tracker */}
                <div className="mt-16 flex items-center justify-center gap-2">
                  {steps.map((s, i) => (
                    <React.Fragment key={s.id}>
                      <div className="flex flex-col items-center gap-3">
                         <div className={cn(
                            "w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-500",
                            step >= s.id ? 'bg-nooha-blue border-nooha-blue text-white shadow-glow-blue' : 'bg-nooha-slate border-white/5 text-zinc-700'
                         )}>
                            <s.icon size={18} />
                         </div>
                      </div>
                      {i < steps.length - 1 && <div className={cn("w-6 h-px bg-zinc-900 transition-colors duration-500", step > s.id && "bg-nooha-blue")} />}
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>
            )}

            <div className="relative">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <Card variant="glass" className="p-12 md:p-16 rounded-[3rem]">
                       <h3 className="text-2xl font-bold text-white mb-12 flex items-center gap-4">
                          <span className="w-10 h-10 rounded-xl bg-nooha-blue/10 flex items-center justify-center text-nooha-blue text-sm font-black italic">01</span>
                          Institution Identity
                       </h3>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <Input
                            label="Institution Name"
                            placeholder="e.g. Greenwood Academy"
                            value={formData.institutionName}
                            onChange={e => setFormData({...formData, institutionName: e.target.value})}
                          />
                          <div className="space-y-2">
                             <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest px-1">Type</label>
                             <select
                               value={formData.institutionType}
                               onChange={e => setFormData({...formData, institutionType: e.target.value})}
                               className="w-full h-14 bg-nooha-midnight border border-white/5 rounded-sm px-5 text-sm text-white focus:outline-none focus:border-nooha-blue/40 transition-all appearance-none font-medium"
                             >
                                <option>Primary / Secondary</option>
                                <option>University / College</option>
                                <option>Technical Hub</option>
                             </select>
                          </div>
                          <Input
                            label="Physical Location"
                            placeholder="City, Country"
                            value={formData.location}
                            onChange={e => setFormData({...formData, location: e.target.value})}
                          />
                          <div className="space-y-2">
                             <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest px-1">Size (Learners)</label>
                             <select
                               value={formData.size}
                               onChange={e => setFormData({...formData, size: e.target.value})}
                               className="w-full h-14 bg-nooha-midnight border border-white/5 rounded-sm px-5 text-sm text-white focus:outline-none focus:border-nooha-blue/40 transition-all appearance-none font-medium"
                             >
                                <option>1 - 100</option>
                                <option>100 - 500</option>
                                <option>500 - 2000</option>
                                <option>2000+</option>
                             </select>
                          </div>
                       </div>
                       <div className="mt-16 flex justify-end">
                          <Button variant="premium" size="xl" onClick={nextStep}>Next Operation <ArrowRight size={20} className="ml-3" /></Button>
                       </div>
                    </Card>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <Card variant="glass" className="p-12 md:p-16 rounded-[3rem]">
                       <h3 className="text-2xl font-bold text-white mb-12 flex items-center gap-4">
                          <span className="w-10 h-10 rounded-xl bg-nooha-blue/10 flex items-center justify-center text-nooha-blue text-sm font-black italic">02</span>
                          Contact Credentials
                       </h3>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <Input label="Applicant Name" placeholder="John Doe" value={formData.applicantName} onChange={e => setFormData({...formData, applicantName: e.target.value})} />
                          <Input label="Official Position" placeholder="Director / Administrator" value={formData.applicantPosition} onChange={e => setFormData({...formData, applicantPosition: e.target.value})} />
                          <Input label="Official Email" placeholder="admin@school.com" type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                          <Input label="Phone Number" placeholder="+254 XXX XXX XXX" type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                       </div>
                       <div className="mt-16 flex justify-between">
                          <Button variant="secondary" size="xl" onClick={prevStep}><ArrowLeft size={18} className="mr-3" /> Back</Button>
                          <Button variant="premium" size="xl" onClick={nextStep}>Technical Requirements <ArrowRight size={20} className="ml-3" /></Button>
                       </div>
                    </Card>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <Card variant="glass" className="p-12 md:p-16 rounded-[3rem]">
                       <h3 className="text-2xl font-bold text-white mb-12 flex items-center gap-4">
                          <span className="w-10 h-10 rounded-xl bg-nooha-blue/10 flex items-center justify-center text-nooha-blue text-sm font-black italic">03</span>
                          Technical Requirements
                       </h3>
                       <div className="space-y-4">
                          <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest px-1">What are you looking to accomplish with Nooha?</label>
                          <textarea
                            className="w-full h-48 bg-nooha-midnight border border-white/5 rounded-sm p-6 text-sm text-white focus:outline-none focus:border-nooha-blue/40 transition-all resize-none font-medium"
                            placeholder="Describe your current manual workflows, operational pain points, or specific platform expectations..."
                            value={formData.requirements}
                            onChange={e => setFormData({...formData, requirements: e.target.value})}
                          />
                       </div>
                       <div className="mt-16 flex justify-between">
                          <Button variant="secondary" size="xl" onClick={prevStep}><ArrowLeft size={18} className="mr-3" /> Back</Button>
                          <Button variant="premium" size="xl" onClick={nextStep}>Select Modules <ArrowRight size={20} className="ml-3" /></Button>
                       </div>
                    </Card>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div key="s4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <Card variant="glass" className="p-12 md:p-16 rounded-[3rem]">
                       <h3 className="text-2xl font-bold text-white mb-12 flex items-center gap-4">
                          <span className="w-10 h-10 rounded-xl bg-nooha-blue/10 flex items-center justify-center text-nooha-blue text-sm font-black italic">04</span>
                          Modular Selection
                       </h3>
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {['Students', 'Academics', 'Attendance', 'Finance', 'Reporting', 'Staff Management'].map(mod => (
                            <button
                              key={mod}
                              onClick={() => toggleModule(mod)}
                              className={cn(
                                "p-6 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between group",
                                formData.selectedModules.includes(mod) ? "bg-nooha-blue border-nooha-blue shadow-glow-blue" : "bg-nooha-midnight border-white/5 hover:border-white/20"
                              )}
                            >
                               <span className={cn("text-xs font-black uppercase tracking-widest", formData.selectedModules.includes(mod) ? "text-white" : "text-zinc-600")}>{mod}</span>
                               <div className={cn("w-6 h-6 rounded-full border flex items-center justify-center transition-all", formData.selectedModules.includes(mod) ? "bg-white border-white text-nooha-blue" : "border-white/10 text-transparent")}>
                                  <CheckCircle2 size={14} />
                               </div>
                            </button>
                          ))}
                       </div>
                       <div className="mt-16 flex justify-between">
                          <Button variant="secondary" size="xl" onClick={prevStep}><ArrowLeft size={18} className="mr-3" /> Back</Button>
                          <Button variant="premium" size="xl" onClick={nextStep}>Final Review <ArrowRight size={20} className="ml-3" /></Button>
                       </div>
                    </Card>
                  </motion.div>
                )}

                {step === 5 && (
                  <motion.div key="s5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <Card variant="glass" className="p-12 md:p-16 rounded-[3rem]">
                       <h3 className="text-2xl font-bold text-white mb-12 flex items-center gap-4">
                          <span className="w-10 h-10 rounded-xl bg-nooha-blue/10 flex items-center justify-center text-nooha-blue text-sm font-black italic">05</span>
                          Application Review
                       </h3>
                       <div className="space-y-10">
                          <div className="grid grid-cols-2 gap-8">
                             <div className="space-y-2">
                                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Institution</p>
                                <p className="text-white font-bold">{formData.institutionName || 'Not specified'}</p>
                             </div>
                             <div className="space-y-2">
                                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Contact</p>
                                <p className="text-white font-bold">{formData.applicantName || 'Not specified'}</p>
                             </div>
                          </div>
                          <div className="space-y-4">
                             <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Selected Core Modules</p>
                             <div className="flex flex-wrap gap-2">
                                {formData.selectedModules.map(m => <Badge key={m} variant="secondary" className="bg-white/5 border-white/10 text-white uppercase text-[8px]">{m}</Badge>)}
                             </div>
                          </div>
                       </div>
                       <div className="mt-16 flex justify-between">
                          <Button variant="secondary" size="xl" onClick={prevStep}><ArrowLeft size={18} className="mr-3" /> Edit</Button>
                          <Button variant="premium" size="xl" onClick={nextStep}>Verify & Submit <ArrowRight size={20} className="ml-3" /></Button>
                       </div>
                    </Card>
                  </motion.div>
                )}

                {step === 6 && (
                  <motion.div key="s6" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <Card variant="glass" className="p-12 md:p-24 rounded-[4rem] text-center">
                       <div className="w-20 h-20 rounded-[2rem] bg-nooha-blue/10 border border-nooha-blue/20 flex items-center justify-center text-nooha-blue mx-auto mb-10 shadow-glow-blue animate-pulse">
                          <ShieldCheck size={32} />
                       </div>
                       <h3 className="text-3xl font-black text-white mb-6 tracking-tighter uppercase italic">Secure Transmission</h3>
                       <p className="text-nooha-muted text-lg font-medium mb-12 max-w-md mx-auto">Your institutional application will be encrypted and dispatched to our verification kernel.</p>
                       <form onSubmit={handleSubmit}>
                          <Button
                            type="submit"
                            size="xl"
                            variant="premium"
                            isLoading={isSubmitting}
                            className="px-16 h-20 shadow-2xl shadow-blue-900/30"
                          >
                             Submit Final Application <Zap size={20} className="ml-3" />
                          </Button>
                       </form>
                    </Card>
                  </motion.div>
                )}

                {step === 'success' && (
                  <motion.div key="success" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                    <Card variant="glass" className="p-12 md:p-32 rounded-[5rem] text-center border-nooha-blue/20 shadow-glow-blue relative overflow-hidden">
                       <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
                       <div className="relative z-10">
                          <div className="w-28 h-28 rounded-[2.5rem] bg-success/10 border border-success/20 flex items-center justify-center text-success mx-auto mb-12 shadow-glow">
                             <CheckCircle2 size={56} strokeWidth={1.5} />
                          </div>
                          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter italic uppercase">Application Received.</h2>

                          <div className="p-10 rounded-[3rem] bg-nooha-midnight border border-white/5 mb-16 w-full max-w-sm mx-auto shadow-2xl">
                             <p className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.5em] mb-3">System Reference</p>
                             <p className="text-3xl font-black text-nooha-blue tracking-[0.2em] italic">{appId}</p>
                          </div>

                          <div className="space-y-6 mb-16 max-w-lg mx-auto text-left border-l-2 border-nooha-blue/20 pl-10">
                             <div className="space-y-2">
                                <p className="text-white font-bold">1. Technical Verification</p>
                                <p className="text-sm text-nooha-muted font-medium">Domain audit and applicant credential validation.</p>
                             </div>
                             <div className="space-y-2">
                                <p className="text-white font-bold">2. Strategic Alignment</p>
                                <p className="text-sm text-nooha-muted font-medium">Coordinate a technical roadmap walkthrough.</p>
                             </div>
                             <div className="space-y-2">
                                <p className="text-white font-bold">3. Sandbox Provisioning</p>
                                <p className="text-sm text-nooha-muted font-medium">Access to a private institution-specific demonstration.</p>
                             </div>
                          </div>

                          <Button variant="premium" size="lg" href="/" className="px-16 h-16">Return to Ecosystem</Button>
                       </div>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
