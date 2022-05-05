import Head from "next/head";
import Home from "../Components/Home/Home";

export default function Index() {
  return (
    <>
      <Head>
        <title>Wedding Invitation</title>
        <meta name="description" content="Wedding invitation home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Home />
      </main>
    </>
  );
}
