import React from "react";
import { useRouter } from "next/router";

const Slug = () => {
  const router = useRouter();
  const { Slug } = router.query;
  return <div>slug : {Slug}</div>;
};

export default Slug;
