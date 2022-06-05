import Head from "next/head";
import Home from "../Components/Home/Home";

export default function Index() {
  return (
    <>
      <Head>
        <title>Sreekumar Wedding Invitation </title>
        <meta name="description" content="Sreekumar Wedding Invitation" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&family=Inter:wght@400;700&family=Tangerine:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main>
        <Home />
      </main>
    </>
  );
}
