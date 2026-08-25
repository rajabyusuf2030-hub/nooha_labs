import { AiProductFeature } from '@/features/products';
import { constructMetadata } from '@/config/seo';

export const metadata = constructMetadata({
  title: 'Nooha AI Assistant',
  description: 'Context-aware intelligence for institutional leadership and business automation.',
});

export default function AiProductPage() {
  return <AiProductFeature />;
}
