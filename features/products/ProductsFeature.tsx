'use client';

import React from 'react';
import { Container, Section, Card, CardHeader, CardTitle, CardDescription, CardFooter, Button, Badge, NoohaLogo, cn } from '@nooha/ui';
import { siteConfig } from '@/config/site';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Database, Brain, GraduationCap, Activity, Wallet, BarChart3, ShieldCheck, Globe, Info } from 'lucide-react';
import Link from 'next/link';

export function ProductsFeature() {
  const productImages: Record<string, string> = {
    'nooha-erp': '/assets/images/NOOHA-ERP-01.png',
    'rental-management-system': '/assets/images/NOOHA-PROD-01.jpg',
    'nooha-ai': '/assets/images/NOOHA-PROD-02.png',
  };

  const productIcons: Record<string, React.ReactNode> = {
    'nooha-erp': <Database className="text-nooha-blue" size={24} />,
    'rental-management-system': <Zap className="text-nooha-blue" size={24} />,
    'nooha-ai': <Brain className="text-nooha-blue" size={24} />,
  };

  return (
    <main className="pt-20">
      {/* Hero Experience */}
      <Section padding="xl" className="relative overflow-hidden bg-nooha-navy">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-nooha-blue/5 blur-[160px] rounded-full pointer-events-none" />

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mb-24"
          >
            <Badge variant="primary" className="mb-8 font-black tracking-[0.4em] px-5 py-2 uppercase">
              Nooha Products
            </Badge>
            <h1 className="text-4xl md:text-8xl font-black text-white mb-8 leading-[1.05] tracking-tighter">
              Technology built for the way <br />
              <span className="bg-gradient-to-r from-nooha-blue to-nooha-cyan bg-clip-text text-transparent italic">institutions operate.</span>
            </h1>
            <p className="text-body text-xl md:text-2xl max-w-2xl font-medium">
              We design and develop a connected ecosystem of digital systems that simplify complexity
              and provide absolute operational visibility.
            </p>
          </motion.div>

          {/* Ecosystem Visualization - Quadrant Pattern (Reference 1) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative max-w-5xl mx-auto mb-40 py-20"
          >
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.05),_transparent_70%)]" />

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                {[
                  { id: '01', title: 'Data Engines', desc: 'Proprietary kernels for high-velocity institutional records.', icon: <Database />, color: 'from-nooha-blue to-nooha-cyan' },
                  { id: '02', title: 'Neural Layers', desc: 'Context-aware intelligence for predictive analytics.', icon: <Brain />, color: 'from-nooha-violet to-nooha-blue' },
                  { id: '03', title: 'Sovereign Security', desc: 'Cryptographic tenant isolation and identity protocols.', icon: <ShieldCheck />, color: 'from-nooha-blue to-zinc-800' },
                  { id: '04', title: 'Modular Utility', desc: 'Extensible functional blocks for custom operations.', icon: <Zap />, color: 'from-nooha-green to-nooha-blue' },
                ].map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group"
                  >
                     <div className="bg-nooha-slate/40 border border-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] relative overflow-hidden h-full hover:border-nooha-blue/30 transition-all duration-500">
                        <div className={cn("absolute top-0 right-0 w-32 h-32 opacity-10 bg-gradient-to-br transition-opacity group-hover:opacity-20", item.color)} />

                        <div className="flex items-start justify-between mb-8">
                           <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-2xl bg-gradient-to-br", item.color)}>
                              {item.icon}
                           </div>
                           <span className="text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors italic">{item.id}</span>
                        </div>

                        <h4 className="text-2xl font-black text-white mb-4 tracking-tighter uppercase italic">{item.title}</h4>
                        <p className="text-nooha-muted font-medium leading-relaxed">{item.desc}</p>
                     </div>
                  </motion.div>
                ))}
             </div>

             {/* Central Hub Connector */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-nooha-midnight border-4 border-nooha-blue/20 flex flex-col items-center justify-center shadow-glow-blue z-20">
                   <NoohaLogo variant="compact" size="md" animate />
                   <p className="text-[8px] font-black text-white uppercase tracking-[0.4em] mt-3">NOOHA CORE</p>
                </div>
                <div className="absolute w-[600px] h-px bg-gradient-to-r from-transparent via-nooha-blue/20 to-transparent" />
                <div className="absolute h-[400px] w-px bg-gradient-to-b from-transparent via-nooha-blue/20 to-transparent" />
             </div>
          </motion.div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-40">
            {siteConfig.products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card variant="glass" isHoverable className="group bg-nooha-slate/40 border-nooha-border overflow-hidden rounded-[3rem] p-0 flex flex-col h-full">
                  <div className="h-80 relative overflow-hidden border-b border-white/5">
                    <img
                      src={productImages[product.id]}
                      alt={product.title}
                      className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nooha-midnight via-transparent to-transparent opacity-80" />

                    {/* Technical Metadata */}
                    <div className="absolute top-8 left-8 flex flex-col gap-2">
                       <span className="px-3 py-1 rounded-sm bg-nooha-midnight/90 border border-white/10 text-[8px] font-black text-white/40 uppercase tracking-[0.3em] backdrop-blur-md">
                          v1.0.4
                       </span>
                       <div className="flex items-center gap-2 px-3 py-1 rounded-sm bg-nooha-midnight/90 border border-nooha-blue/20 backdrop-blur-md">
                          <div className="w-1 h-1 rounded-full bg-nooha-blue animate-pulse" />
                          <span className="text-[8px] font-black text-nooha-blue uppercase tracking-[0.3em]">Operational</span>
                       </div>
                    </div>

                    <div className="absolute bottom-8 right-8 w-16 h-16 rounded-[1.5rem] bg-nooha-midnight/90 border border-nooha-blue/30 backdrop-blur-xl flex items-center justify-center text-nooha-blue shadow-2xl group-hover:scale-110 transition-transform">
                       {productIcons[product.id]}
                    </div>
                  </div>

                  <div className="p-12 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-10">
                      <Badge variant={product.badge === 'Flagship' ? 'primary' : 'outline'} className="px-4 py-1.5 rounded-lg border-white/10 uppercase tracking-widest font-black text-[10px]">
                        {product.badge || product.category}
                      </Badge>
                      <span className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.5em]">{product.category}</span>
                    </div>

                    <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter group-hover:text-nooha-blue transition-colors">
                       {product.title}
                    </h3>

                    <p className="text-nooha-muted text-lg leading-relaxed mb-12 font-medium">
                      {product.description}
                    </p>

                    {/* Features Detail - Revealed on Hover */}
                    <div className="mt-auto space-y-8">
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {product.features.map((f) => (
                            <div key={f} className="flex items-center gap-3 group/feat">
                               <ShieldCheck size={14} className="text-nooha-blue opacity-40 group-hover/feat:opacity-100 transition-opacity" />
                               <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest group-hover/feat:text-white transition-colors">{f}</span>
                            </div>
                          ))}
                       </div>

                       <div className="pt-10 border-t border-white/5 flex flex-wrap items-center justify-between gap-8">
                          <div className="flex items-center gap-6">
                             <Link href="/demo" className="text-[9px] font-black text-nooha-blue uppercase tracking-[0.4em] hover:text-white transition-colors flex items-center gap-2">
                                <Info size={12} /> Demo Available
                             </Link>
                             <Link href="/docs" className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.4em] hover:text-white transition-colors">
                                Documentation
                             </Link>
                          </div>

                          <div className="flex gap-4">
                             <Button
                                href={`/products/${product.id === 'nooha-erp' ? 'erp' : product.id === 'rental-management-system' ? 'rental' : 'ai'}`}
                                variant="premium"
                                className="h-16 px-10 group/btn"
                              >
                                Explore Product <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                             </Button>
                             <Button
                                variant="secondary"
                                href="/platform"
                                className="h-16 px-10"
                              >
                                View Platform
                             </Button>
                          </div>
                       </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            {/* Future Product Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
               <Card variant="glass" className="bg-nooha-slate/10 border-dashed border-white/10 h-full flex flex-col items-center justify-center p-20 text-center rounded-[3rem] group hover:border-nooha-blue/20 transition-all">
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-zinc-800 mb-8 group-hover:text-nooha-blue transition-colors">
                     <Globe size={32} strokeWidth={1} />
                  </div>
                  <h4 className="text-2xl font-bold text-zinc-700 mb-4 uppercase tracking-tighter">Proprietary Logistics Engine</h4>
                  <p className="text-zinc-800 font-medium mb-8 max-w-xs">Expanding the ecosystem with specialized fleet and asset telemetry solutions.</p>
                  <Badge variant="outline" className="text-[8px] border-zinc-800 text-zinc-800 uppercase tracking-[0.5em] font-black">Future Product</Badge>
               </Card>
            </motion.div>
          </div>
        </Container>
      </Section>

      <Section className="bg-nooha-navy border-t border-white/5 py-40">
         <Container>
            <div className="max-w-4xl mx-auto p-12 md:p-24 rounded-[5rem] bg-gradient-to-br from-nooha-slate to-nooha-midnight border border-nooha-border text-center relative overflow-hidden shadow-2xl">
               <div className="absolute inset-0 bg-noise opacity-[0.02]" />
               <h3 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight italic">Building the next institutional standard.</h3>
               <p className="text-nooha-muted text-xl mb-12 font-medium max-w-xl mx-auto">Our roadmap is driven by domain requirements and technical discipline. Every update adds value to the connected core.</p>
               <div className="flex flex-wrap justify-center gap-6">
                  <Button href="/contact" size="xl" variant="premium">Discuss Requirements</Button>
                  <Button href="/docs" variant="outline" size="xl" className="text-white border-white/10">Read Changelog</Button>
               </div>
            </div>
         </Container>
      </Section>
    </main>
  );
}
