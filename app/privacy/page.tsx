import React from 'react';
import { Section, Container, Badge } from '@nooha/ui';
import { constructMetadata } from '@/config/seo';
import * as motion from 'framer-motion/client';

export const metadata = constructMetadata({
  title: 'Privacy Policy',
  description: 'Privacy Policy and data protection standards for Nooha Labs.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <Section className="pt-32 pb-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent" />

      <Container className="max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="outline" className="mb-6 border-emerald-500/20 text-emerald-400 font-black tracking-[0.2em]">Legal Architecture</Badge>
          <h1 className="text-4xl md:text-7xl font-extrabold text-white tracking-tighter">Privacy Policy</h1>
          <p className="mt-4 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">Last updated: July 30, 2024</p>
        </motion.div>

        <div className="mt-16 space-y-16 text-zinc-400 leading-relaxed font-medium">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="p-10 rounded-[2.5rem] bg-[#111827]/40 border border-[#1E293B] shadow-inner"
          >
            <p className="text-zinc-200 text-lg leading-relaxed">
              At **Nooha Labs Ltd** ("Nooha Labs"), we prioritize user data privacy, high-fidelity security, and operational transparency across all our platforms, software applications, and digital ecosystems.
            </p>
          </motion.div>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tight">1. Information We Collect</h2>
            <p className="text-zinc-500">
              We collect information provided directly by users when submitting contact forms, requesting institutional strategy consultations, or utilizing our software portals (such as the Nooha ERP or Building Materials Rental Platform). This includes names, institutional emails, contact phone numbers, and operational requirements.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tight">2. Use of Data</h2>
            <p className="text-zinc-500">
              Collected data is utilized strictly to provide enterprise-grade digital services, manage client engagements, respond to strategic inquiries, and ensure application telemetry performance. We do **not** sell user data to third-party advertising brokers or data mining entities.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tight">3. Firebase & Infrastructure Security</h2>
            <p className="text-zinc-500">
              Our applications leverage encrypted cloud services, TLS 1.3 encryption, and strict Firestore database security rules to safeguard user records. We employ multi-region backups and continuous security audits to maintain the integrity of institutional data.
            </p>
          </section>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-16 border-t border-[#1E293B]"
          >
             <h4 className="text-white font-black text-xl mb-4 tracking-tight">Contact Legal</h4>
             <p className="text-sm mb-8 text-zinc-500">For inquiries regarding data processing, GDPR/local compliance, or specific data protection queries, please contact our legal team:</p>
             <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#111827] border border-[#1E293B] font-mono text-emerald-500 text-sm hover:border-emerald-500/40 transition-colors">
                legal@noohalabs.com
             </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
