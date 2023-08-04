"use client";

import {useRouter} from "next/navigation";
import React from "react";

function GoproductButton() {
  const router = useRouter();
  return <button onClick={() => router.push("/pants")}>뒤로가기</button>;
}

export default GoproductButton;
