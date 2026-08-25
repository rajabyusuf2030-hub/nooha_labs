'use client';

import React from 'react';
import { ArrowUpRight, ArrowRight, Zap, Database, Brain } from 'lucide-react';
import { Container, Section, Badge, Card, CardHeader, CardTitle, CardDescription, CardFooter, Button } from '@nooha/ui';
import { siteConfig } from '@/config/site';
import { motion } from 'framer-motion';

export function ProjectsSection() {
  const productIcons: Record<string, React.ReactNode> = {
    'nooha-erp': <Database className="text-nooha-blue" size={48} strokeWidth={1} />,
    'rental-management-system': <Zap className="text-nooha-blue" size={48} strokeWidth={1} />,
    'nooha-ai': <Brain className="text-nooha-blue" size={48} strokeWidth={1} />,
  };

  const productImages: Record<string, string> = {
    'nooha-erp': '/assets/images/NOOHA-ERP-01.png',
    'rental-management-system': '/assets/images/NOOHA-PROD-01.jpg',
    'nooha-ai': '/assets/images/NOOHA-PROD-02.png',
  };

  return (
    <Section id="products" className="bg-nooha-midnight relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-nooha-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-caption mb-4 block">Product Ecosystem</span>
            <h2 className="text-h2 text-white mb-6">
              Purpose-built platforms for <br/> <span className="bg-gradient-to-r from-nooha-blue to-nooha-cyan bg-clip-text text-transparent">real-world operations.</span>
            </h2>
            <p className="text-body max-w-2xl font-medium">
              Our ecosystem products solve immediate domain challenges in education,
              logistics, and business intelligence with room for long-term institutional scale.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Button variant="secondary" href="/products" className="group">
              View Portfolio <ArrowUpRight size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {siteConfig.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card variant="glass" isHoverable className="flex flex-col h-full bg-nooha-slate/40 border-white/5 overflow-hidden group hover:border-nooha-blue/20 transition-all duration-500 p-0">
                <div className="h-56 w-full bg-nooha-midnight relative overflow-hidden flex items-center justify-center border-b border-white/5">
                  <img
                    src={productImages[product.id]}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                    alt={product.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nooha-midnight via-transparent to-transparent opacity-80" />

                  <div className="absolute top-6 right-6 w-10 h-10 rounded-md bg-nooha-midnight/80 border border-white/10 backdrop-blur-md flex items-center justify-center text-nooha-blue shadow-2xl">
                     {productIcons[product.id]}
                  </div>

                  <div className="absolute bottom-4 left-6 text-[8px] font-black text-zinc-500 uppercase tracking-[0.5em] select-none group-hover:text-nooha-blue transition-colors">
                    Nooha Core Engine
                  </div>
                </div>

                <CardHeader className="flex-1 px-8 pt-8 pb-4">
                  <div className="flex items-center justify-between mb-8">
                    <Badge variant={product.badge === 'Flagship' ? 'primary' : 'outline'} className="px-3 py-1">
                      {product.badge || product.category}
                    </Badge>
                    <span className="text-caption !text-zinc-600">{product.category}</span>
                  </div>
                  <CardTitle className="text-2xl font-bold mb-4 group-hover:text-nooha-blue transition-colors leading-tight">{product.title}</CardTitle>
                  <CardDescription className="text-sm text-nooha-muted leading-relaxed mb-10 group-hover:text-zinc-300 transition-colors line-clamp-3">
                    {product.description}
                  </CardDescription>
                  <ul className="space-y-4 mb-8">
                    {product.features.slice(0, 3).map((f) => (
                      <li key={f} className="text-[11px] font-bold text-nooha-muted flex items-center gap-3">
                        <div className="w-1 h-1 rounded-full bg-nooha-blue shadow-glow-blue" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardHeader>
                <CardFooter className="px-8 pb-8 pt-0">
                  <Button
                    href={product.href}
                    variant="primary"
                    className="w-full h-14 group/btn"
                  >
                    Explore Solution <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
