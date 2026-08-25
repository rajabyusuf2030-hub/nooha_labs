'use client';

import React, { useState } from 'react';
import { Container, Section, Card, CardHeader, CardTitle, CardDescription, Badge, Button } from '@nooha/ui';
import { Clock, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { subscribeToNewsletter } from '@/firebase/firestore';
import { motion } from 'framer-motion';

export function BlogFeature() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    const result = await subscribeToNewsletter(email);
    setIsSubmitting(false);
    if (result.success) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  const posts = [
    {
      id: '1',
      title: 'The Future of Institutional ERP in East Africa',
      excerpt: 'How modern cloud platforms are replacing fragmented legacy systems in leading primary and secondary schools across the region.',
      category: 'Education',
      date: 'July 28, 2026',
      readTime: '6 min read',
      image: '/assets/images/enterprise-mockup.jpg',
      featured: true,
    },
    {
      id: '2',
      title: 'Statutory Compliance in Kenya: Automating SHIF and PAYE',
      excerpt: 'A deep dive into how Nooha ERP ensures zero-error payroll processing through background statutory logic and automated filing.',
      category: 'Technology',
      date: 'July 15, 2026',
      readTime: '8 min read',
      image: '/assets/images/analytics-laptop.jpg',
    },
    {
      id: '3',
      title: 'Why Nooha Labs is Investing in Predictive Student Health',
      excerpt: 'Moving beyond grades: How Nooha Insights uses attendance and behavioral telemetry to predict student risk and mental wellness.',
      category: 'Intelligence',
      date: 'June 30, 2026',
      readTime: '5 min read',
      image: '/assets/images/digital-analytics.jpg',
    },
  ];

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
              Engineering Notes
            </Badge>
            <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-8 leading-[1.1]">
              Nooha <span className="bg-gradient-to-r from-[#10B981] to-[#34D399] bg-clip-text text-transparent">Insights.</span>
            </h1>
            <p className="text-zinc-400 text-xl leading-relaxed font-medium">
              Technical industry analysis, and company updates from the
              Nooha Labs engineering and product teams.
            </p>
          </motion.div>

          <div className="mb-24">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
             >
                <Card variant="glass" className="bg-[#111827]/40 border-[#1E293B] group overflow-hidden p-0">
                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
                      <div className="h-64 lg:h-[450px] bg-zinc-900 relative overflow-hidden">
                         <img src={posts[0].image} alt={posts[0].title} className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" />
                         <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay" />
                      </div>
                      <div className="p-8 lg:p-20">
                         <Badge variant="primary" className="mb-8">Featured Insight</Badge>
                         <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-8 group-hover:text-emerald-500 transition-colors leading-tight">{posts[0].title}</h2>
                         <p className="text-zinc-400 text-lg leading-relaxed mb-10">{posts[0].excerpt}</p>
                         <div className="flex items-center justify-between">
                           <div className="flex items-center gap-4 text-zinc-500 text-xs font-black uppercase tracking-widest">
                              <Clock size={16} className="text-emerald-500" /> {posts[0].readTime}
                           </div>
                           <Button variant="outline" className="border-zinc-800 hover:bg-emerald-600 hover:text-white px-8 h-12">Read Full Article</Button>
                         </div>
                      </div>
                   </div>
                </Card>
             </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.filter(p => !p.featured).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="default" isHoverable className="flex flex-col group bg-[#111827] border-[#1E293B] overflow-hidden h-full">
                  <div className="h-56 relative overflow-hidden border-b border-[#1E293B]">
                     <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                  </div>
                  <CardHeader className="p-10 flex-1">
                    <div className="flex items-center justify-between mb-8">
                      <Badge variant="outline" className="border-emerald-500/20 text-emerald-400">{post.category}</Badge>
                      <div className="flex items-center gap-2 text-zinc-500 text-[10px] font-black uppercase tracking-widest">
                        <Clock size={14} className="text-emerald-500" /> {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold mb-6 group-hover:text-emerald-500 transition-colors leading-tight">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base text-zinc-400 leading-relaxed mb-10 line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2 text-xs font-bold text-zinc-600">
                        <Calendar size={14} /> {post.date}
                      </div>
                      <div className="text-emerald-600 font-black text-[10px] uppercase tracking-widest flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                        Read Story <ArrowRight size={14} />
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-[#090D16] border-t border-[#1E293B]">
        <Container>
           <div className="max-w-4xl mx-auto p-12 rounded-[3rem] bg-emerald-600 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.1),_transparent)]" />
              <div className="relative z-10 text-center md:text-left">
                 <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Stay ahead of the ecosystem.</h3>
                 <p className="text-emerald-100 text-sm">Get our monthly engineering notes and industry analysis.</p>
              </div>
              <div className="relative z-10 w-full md:w-auto">
                 {isSubscribed ? (
                   <div className="flex items-center gap-3 text-white font-bold animate-in fade-in slide-in-from-right-4">
                      <CheckCircle2 size={24} />
                      <span>Successfully Subscribed!</span>
                   </div>
                 ) : (
                   <form onSubmit={handleSubscribe} className="flex gap-3">
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-emerald-700/50 border border-emerald-400/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-emerald-200 focus:outline-none w-full md:w-64"
                        placeholder="Your Email"
                      />
                      <Button type="submit" disabled={isSubmitting} className="bg-white text-emerald-700 border-none hover:bg-zinc-100">
                        {isSubmitting ? '...' : 'Subscribe'}
                      </Button>
                   </form>
                 )}
              </div>
           </div>
        </Container>
      </Section>
    </main>
  );
}
