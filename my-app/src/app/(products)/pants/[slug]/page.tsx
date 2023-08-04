import GoproductButton from "@/components/GoproductButton";
import {getProduct, getProducts} from "@/service/products";
import {redirect} from "next/navigation";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({params}: Props) {
  return {
    title: `제품 이름 : ${params.slug}`,
  };
}

async function Pantspage({params: {slug}}: Props) {
  const product = await getProduct(slug);

  if (!product) {
    redirect("/pants");
  }

  return (
    <>
      <GoproductButton />
      <div>{product.name} detail!</div>
    </>
  );
}

export default Pantspage;

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
