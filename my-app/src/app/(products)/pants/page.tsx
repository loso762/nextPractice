import Link from "next/link";
import React from "react";

const products = [`long_pants`, "short_pants", "jeans"];

function Pantspage() {
  return (
    <>
      <h1>제품소개 페이지</h1>
      <ul>
        {products.map((product, idx) => (
          <li key={idx}>
            <Link href={`pants/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Pantspage;
