import {getProducts} from "@/service/products";
import Link from "next/link";
import React from "react";
import clothesImg from "../../../../public/images/1.jpeg";
import Image from "next/image";

async function Pantspage() {
  //throw new Error();
  const products = await getProducts();

  return (
    <>
      <h1>제품소개 페이지!</h1>
      <Image src={clothesImg} alt="clothes" width={400} height={400} />
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
