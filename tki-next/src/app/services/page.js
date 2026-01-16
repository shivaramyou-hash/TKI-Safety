
import PageHeader from '@/components/layout/PageHeader';
import ServicesGrid from '@/components/sections/ServicesGrid';
import WhatWeDo from '@/components/sections/WhatWeDo';
import OurStory from '@/components/sections/OurStory';
import Testimonials from '@/components/sections/Testimonials';
import Faq from '@/components/sections/Faq';

export const metadata = {
  title: 'Services | TKI Safety - Factory & Industry HTML Template',
  description: 'Services by TKI Safety Factory & Industry',
}

export default function Services() {
  return (
    <>
      <PageHeader title={<>Our <span>services</span></>} activePage="our services" />
      <ServicesGrid />
      <WhatWeDo />
      <OurStory />
      <Testimonials />
      <Faq />
    </>
  );
}
