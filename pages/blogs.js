import React from "react";
import Head from "next/head";
import { Blog } from "@/sections";

const blogs = () => {
  return (
    <>
      <Head>
        <title>Blog - 7Creative</title>
      </Head>
      <Blog />
    </>
  );
};

export default blogs;
