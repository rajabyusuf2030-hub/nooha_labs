'use client';

import React from 'react';
import { Hero } from './components/Hero';
import { PositioningStrip } from './components/PositioningStrip';
import { ServicesSection } from './components/ServicesSection';
import { FlagshipErpSection } from './components/FlagshipErpSection';
import { HumanTransitionSection } from './components/HumanTransitionSection';
import { ProcessSection } from './components/ProcessSection';
import { TechnologyEcosystemSection } from './components/TechnologyEcosystemSection';
import { WhoWeServeSection } from './components/WhoWeServeSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FeaturesSection } from './components/FeaturesSection';
import { CTASection } from './components/CTASection';

import { CommercialJourneyStrip } from './components/CommercialJourneyStrip';
import { ModuleNetworkSection } from './components/ModuleNetworkSection';

export function HomeFeature() {
  return (
    <main>
      <Hero />
      <PositioningStrip />
      <ServicesSection />
      <ModuleNetworkSection />
      <FlagshipErpSection />
      <HumanTransitionSection />
      <ProcessSection />
      <TechnologyEcosystemSection />
      <WhoWeServeSection />
      <TestimonialsSection />
      <FeaturesSection />
      <CommercialJourneyStrip />
      <CTASection />
    </main>
  );
}
