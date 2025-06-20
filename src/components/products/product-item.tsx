import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Product } from "@/app/types";

type Props = {
  product: Product;
};

export const ProductItem = ({ product }: Props) => {
  return (
    <Link
      key={product.id}
      href={`/products/${product.id}`}
      className="w-[300px] flex flex-col grow justify-between overflow-hidden rounded-md shadow hover:shadow-xl transition-all group bg-[#ffffff]"
    >
      <AspectRatio ratio={16 / 9}>
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-300 p-[10px]"
        />
      </AspectRatio>

      <div className="flex items-center justify-center  bg-[#58646f] text-white text-center px-[10px] py-[5px] h-[50px]">
        <h2 className="text-sm font-semibold line-clamp-2">{product.title}</h2>
      </div>
    </Link>
  );
};
