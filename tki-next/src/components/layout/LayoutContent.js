'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Preloader from '@/components/layout/Preloader';

export default function LayoutContent({ children }) {
  const pathname = usePathname();
  const isAdminRequest = pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRequest && <Preloader />}
      {!isAdminRequest && <Header />}
      {children}
      {!isAdminRequest && <Footer />}
    </>
  );
}
