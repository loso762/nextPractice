import {Metadata} from "next";
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

function Pantspage({params}: Props) {
  return <div>{params.slug} detail!</div>;
}

export default Pantspage;

export function generateStaticParams() {
  const products = ["shortPants", "longPants"];
  return products.map((product) => ({
    slug: product,
  }));
}
