import {getProducts} from "@/service/products";
import Link from "next/link";
import React from "react";

async function Pantspage() {
  const products = await getProducts();

  return (
    <>
      <h1>제품소개 페이지</h1>
      <ul>
        {products.map((product, idx) => (
          <li key={idx}>
            <Link href={`pants/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Pantspage;
