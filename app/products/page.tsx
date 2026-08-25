import { ProductsFeature } from '@/features/products';
import { constructMetadata } from '@/config/seo';

export const metadata = constructMetadata({
  title: 'Our Products',
  description: 'Explore the Nooha ecosystem of products: Nooha ERP, Nooha Rental, and Nooha AI Assistant.',
});

export default function ProductsPage() {
  return <ProductsFeature />;
}
