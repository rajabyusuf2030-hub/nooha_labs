import { ServicesFeature } from '@/features/services';
import { constructMetadata } from '@/config/seo';

export const metadata = constructMetadata({
  title: 'Our Services',
  description: 'Explore Nooha Labs engineering services: Product Engineering, AI Solutions, Web Experiences, and Cloud Infrastructure.',
});

export default function ServicesPage() {
  return <ServicesFeature />;
}
