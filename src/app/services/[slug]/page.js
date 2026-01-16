import { services } from '@/data/services';
import PageHeader from '@/components/layout/PageHeader';
import ServiceDetails from '@/components/sections/ServiceDetails';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} | TKI Safety`,
    description: service.description,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHeader 
        title={<>{service.title.split(' ')[0]} <span>{service.title.split(' ').slice(1).join(' ')}</span></>} 
        activePage={service.title.toLowerCase()} 
      />
      <ServiceDetails service={service} />
    </>
  );
}
