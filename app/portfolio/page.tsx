import { PortfolioFeature } from '@/features/portfolio';
import { constructMetadata } from '@/config/seo';

export const metadata = constructMetadata({
  title: 'Portfolio',
  description: 'Explore the successful digital transformation projects delivered by Nooha Labs for educational and commercial institutions.',
});

export default function PortfolioPage() {
  return <PortfolioFeature />;
}
