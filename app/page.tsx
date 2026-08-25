import { HomeFeature } from '@/features/home';
import { constructMetadata } from '@/config/seo';

export const metadata = constructMetadata({
  title: 'Nooha Labs — Engineering the Future of Institutional Infrastructure',
  description: 'High-scale ERP systems, intelligent AI assistants, and modern digital experiences designed for elite African institutions.',
});

export default function HomePage() {
  return <HomeFeature />;
}
