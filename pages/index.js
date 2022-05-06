import Head from "next/head";
import Home from "../Components/Home/Home";

export default function Index() {
  return (
    <>
      <Head>
        <title>Sreekumar Wedding Invitation </title>
        <meta name="description" content="Sreekumar Wedding Invitation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Home />
      </main>
    </>
  );
}
