import { ContactFeature } from '@/features/contact';
import { constructMetadata } from '@/config/seo';

export const metadata = constructMetadata({
  title: 'Contact Us',
  description: 'Reach out to Nooha Labs for project inquiries, strategy consultations, or product support.',
});

export default function ContactPage() {
  return <ContactFeature />;
}
