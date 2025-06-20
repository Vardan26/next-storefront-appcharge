import { Product } from "@/app/types";
import { Title } from "@/components/title";
import { getProductById, getAllProducts } from "@/lib/api";
import Image from "next/image";
import { notFound } from "next/navigation";

type Params = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product: Product) => ({ id: product.id.toString() }));
}

export async function generateMetadata({ params }: Params) {
  const { id } = await params;

  const product = await getProductById(id);
  if (!product) return {};

  return {
    title: `${product.title}`,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [`/og/products/${product.id}`],
    },
  };
}

export default async function ProductPage({ params }: Params) {
  const { id } = await params;

  const product = await getProductById(id);

  if (!product) return notFound();

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="p-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="w-full">
          <Image
            src={product.image}
            alt={product.title}
            width={600}
            height={600}
            className="w-full h-auto max-h-[500px] object-contain bg-white rounded-lg shadow"
          />
        </div>

        <div className="text-white">
          <Title title={product.title} />
          <p className="mt-2 text-sm   capitalize">{product.category}</p>

          <p className="mt-4 text-lg  leading-relaxed">{product.description}</p>

          <div className="mt-6">
            <span className="text-2xl font-semibold ">${product.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
