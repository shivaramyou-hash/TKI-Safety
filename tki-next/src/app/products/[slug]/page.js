
import PageHeader from '@/components/layout/PageHeader';
import PostDetails from '@/components/sections/PostDetails';
import blogData from '@/data/blog';
import productsData from '@/data/products';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const blogSlugs = blogData.map((post) => ({ slug: post.slug }));
  const productSlugs = productsData.map((prod) => ({ slug: prod.slug }));
  return [...blogSlugs, ...productSlugs];
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;

  // Search in products first
  let data = productsData.find((prod) => prod.slug === slug);
  let type = 'product';

  // If not in products, check blog
  if (!data) {
    data = blogData.find((post) => post.slug === slug);
    type = 'blog';
  }

  if (!data) {
    notFound();
  }

  const headerTitle = type === 'product' ? <>Product <span>details</span></> : <>Latest <span>post</span></>;
  const activePage = type === 'product' ? 'product detail' : 'blog detail';

  return (
    <>
      <PageHeader title={headerTitle} activePage={activePage} />
      <PostDetails data={data} />
    </>
  );
}
