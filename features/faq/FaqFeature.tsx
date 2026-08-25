'use client';

import React, { useState } from 'react';
import { Container, Section, Card, Button, Badge } from '@nooha/ui';
import { ChevronDown, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function FaqFeature() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      category: "Platform & Security",
      q: "How secure is Nooha ERP data?",
      a: "We use military-grade encryption and strict tenant isolation. Every school's data lives in its own logical partition, and we perform daily midnight backups across multi-region infrastructure."
    },
    {
      category: "Operations",
      q: "Does the system work offline?",
      a: "Nooha ERP is a cloud-first platform, but our attendance and exam entry modules are optimized for low-bandwidth environments and support caching for intermittent connectivity."
    },
    {
      category: "Finance",
      q: "What is Lipa Na M-Pesa automated reconciliation?",
      a: "It means when a parent pays fees via your Paybill, the system automatically detects the transaction, maps it to the correct student using their business ID, and clears their balance in real-time."
    },
    {
      category: "Implementation",
      q: "How long does it take to deploy for a new school?",
      a: "A standard deployment takes 2-3 weeks. This includes data migration from your legacy system, staff training workshops, and cloud environment configuration."
    },
    {
      category: "Operations",
      q: "Can I manage multiple school campuses?",
      a: "Yes. Nooha ERP supports multi-campus consolidation, allowing a single board of directors to see aggregated financial and academic reports across all locations."
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="pt-20">
      <Section padding="xl" className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mb-24"
          >
            <Badge variant="primary" className="mb-8 border-emerald-500/20 bg-emerald-500/10 text-emerald-400 px-4 py-1.5 rounded-full font-bold tracking-wide">
              Help Center
            </Badge>
            <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-8 leading-[1.1]">
              Frequently Asked <br/> <span className="bg-gradient-to-r from-[#10B981] to-[#34D399] bg-clip-text text-transparent">Questions.</span>
            </h1>
            <p className="text-zinc-400 text-xl leading-relaxed mb-12 max-w-2xl font-medium">
              Find detailed answers to common questions about our platform,
              security architecture, and institutional implementation process.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative max-w-xl group"
            >
               <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-emerald-500 transition-colors" size={20} />
               <input
                  type="text"
                  placeholder="Search questions, categories, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#111827] border border-[#1E293B] rounded-[2rem] py-6 pl-16 pr-6 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition-all shadow-2xl group-hover:border-zinc-700"
               />
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
             <div className="lg:col-span-2 space-y-4">
                <AnimatePresence mode="popLayout">
                  {filteredFaqs.length > 0 ? filteredFaqs.map((faq, i) => (
                    <motion.div
                      key={faq.q}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="group"
                    >
                      <button
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        className={`w-full flex items-center justify-between p-10 rounded-[2.5rem] border transition-all ${openIndex === i ? 'bg-[#111827] border-emerald-500/30' : 'bg-transparent border-[#1E293B] hover:border-zinc-700'}`}
                      >
                        <div className="text-left">
                          <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em] mb-3 block">{faq.category}</span>
                          <h4 className={`text-xl font-bold transition-colors ${openIndex === i ? 'text-white' : 'text-zinc-300'}`}>{faq.q}</h4>
                        </div>
                        <div className={`w-10 h-10 rounded-full border border-[#1E293B] flex items-center justify-center transition-all ${openIndex === i ? 'bg-emerald-500 border-emerald-500 text-white' : 'text-zinc-500 group-hover:border-zinc-700 group-hover:text-zinc-300'}`}>
                           <ChevronDown size={20} className={`transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                         <div className="p-10 pt-0 text-zinc-400 leading-relaxed text-lg font-medium">
                            {faq.a}
                         </div>
                      </div>
                    </motion.div>
                  )) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center py-32 border border-dashed border-[#1E293B] rounded-[4rem]"
                    >
                       <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">No matching questions found for &quot;{searchQuery}&quot;</p>
                    </motion.div>
                  )}
                </AnimatePresence>
             </div>

             <div className="space-y-8">
                <Card variant="glass" className="bg-[#111827]/40 border-[#1E293B] p-8">
                   <h4 className="text-white font-bold mb-6">Need more help?</h4>
                   <p className="text-sm text-zinc-500 leading-relaxed mb-8">
                      Can't find the answer you're looking for? Reach out to our technical support team directly.
                   </p>
                   <Button href="/contact" className="w-full bg-emerald-600 hover:bg-emerald-700">Contact Support</Button>
                </Card>

                <div className="p-8 rounded-3xl border border-[#1E293B] bg-gradient-to-br from-emerald-500/5 to-transparent">
                   <h4 className="text-white font-bold mb-4 text-sm">Download Docs</h4>
                   <p className="text-xs text-zinc-500 mb-6">Full technical documentation for developers and school administrators.</p>
                   <Button variant="outline" className="w-full border-zinc-800 text-xs">Technical Manuals</Button>
                </div>
             </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
