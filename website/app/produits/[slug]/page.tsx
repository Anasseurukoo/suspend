import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductPage from "../../../components/ProductPage";
import { getProductBySlug, products } from "../../../lib/products";

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  return product ? { title: `${product.name} · ${product.reference}`, description: product.description } : { title: "Monture" };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  return <ProductPage product={product} />;
}
