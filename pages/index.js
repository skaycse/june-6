import Head from "next/head";
import Home from "../Components/Home/Home";

export default function Index() {
  return (
    <>
      <Head>
        <title>Sreekumar's Wedding Invitaion </title>
        <meta name="description" content="Sreekumar's Wedding Invitaion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Home />
      </main>
    </>
  );
}
