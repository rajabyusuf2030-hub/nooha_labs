import { DemoFeature } from '@/features/demo';
import { constructMetadata } from '@/config/seo';

export const metadata = constructMetadata({
  title: 'Request a Demo — Nooha Labs',
  description: 'Schedule a professional walkthrough of the Nooha ecosystem products.',
  path: '/demo',
});

export default function DemoPage() {
  return <DemoFeature />;
}
