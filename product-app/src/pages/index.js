import Head from "next/head";
import ProductList from "@/component/ProductList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Product App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductList />
    </>
  );
}
