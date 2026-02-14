import { notFound } from 'next/navigation';
import ProductDetail from '@/components/ProductDetail';
import { getProduct } from '@/lib/shopify';

export default async function ProductPage({ 
  params 
}: { 
  params: Promise<{ handle: string }> 
}) {
  const { handle } = await params;
  const product = await getProduct(handle);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
