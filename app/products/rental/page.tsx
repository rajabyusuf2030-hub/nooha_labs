import { RentalProductFeature } from '@/features/products';
import { constructMetadata } from '@/config/seo';

export const metadata = constructMetadata({
  title: 'Nooha Rental',
  description: 'Specialized inventory and logistics for construction materials and machinery rental.',
});

export default function RentalProductPage() {
  return <RentalProductFeature />;
}
