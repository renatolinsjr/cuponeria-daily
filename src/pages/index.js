import Head from "next/head";

import Avatar from "@components/Avatar";

import data from '../mockData/mockedAvatars';

import { HomeWrapper } from './_styled'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cuponeria Daily</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeWrapper>
        {data.map(({status, id}) => (
          <Avatar key={id} status={status} />
        ))}
      </HomeWrapper>
    </>
  );
}
