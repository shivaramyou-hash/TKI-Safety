
import PageHeader from '@/components/layout/PageHeader';
import AboutUs from '@/components/sections/AboutUs';
import MissionVision from '@/components/sections/MissionVision';
import History from '@/components/sections/History';
import WhatWeDo from '@/components/sections/WhatWeDo';
import Features from '@/components/sections/Features';
import Process from '@/components/sections/Process';
import Team from '@/components/sections/Team';
import Testimonials from '@/components/sections/Testimonials';
import Faq from '@/components/sections/Faq';

export const metadata = {
  title: 'About Us | Toplax - Factory & Industry HTML Template',
  description: 'About Toplax Factory & Industry',
}

export default function About() {
  return (
    <>
      <PageHeader title={<>About <span>us</span></>} activePage="about us" />
      <AboutUs />
      <MissionVision />
      <History />
      <WhatWeDo />
      <Features />
      <Process />
      <Team />
      <Testimonials />
      <Faq />
    </>
  );
}
