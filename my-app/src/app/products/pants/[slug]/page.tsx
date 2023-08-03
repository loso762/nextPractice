import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

function Pantspage({params}: Props) {
  return <div>{params.slug} detail!</div>;
}

export default Pantspage;
