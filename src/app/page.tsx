import { getAllProducts } from "@/lib/api";
import { ProductItem } from "@/components/products/product-item";
import { Title } from "@/components/title";

export default async function Home() {
  const products = await getAllProducts();

  return (
    <div>
      <div className="px-[40px] pt-[60px] pb-[20px] text-center">
        <Title title="Explore Our Products" />
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] justify-items-center gap-5 px-[40px] pb-[60px] font-[family-name:var(--font-geist-sans)]">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
