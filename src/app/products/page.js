import PageHeader from '@/components/layout/PageHeader';
import ProductListing from '@/components/sections/ProductListing';

export const metadata = {
  title: 'Products | TKI Safety - Factory & Industry HTML Template',
  description: 'View all TKI Safety products and specialized equipment.',
}

export default async function ProductsPage({ searchParams }) {
  const { type } = await searchParams;

  return (
    <>
      <PageHeader title={<>Our <span>Products</span></>} activePage="products" />
      <ProductListing filterType={type} />
    </>
  );
}
