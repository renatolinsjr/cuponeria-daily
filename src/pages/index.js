import Head from "next/head";

import Avatar from "@components/Avatar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Avatar />
    </>
  );
}
