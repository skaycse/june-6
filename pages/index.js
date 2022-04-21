import Head from "next/head";
import Home from "../Components/Home/Home";
import Footer from "../Components/Footer/Footer";

export default function Index() {
  return (
    <div className={""}>
      <Head>
        <title>Wedding Invitation</title>
        <meta name="description" content="Wedding invitation website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={""}>
        <Home />
        <Footer />
      </main>
    </div>
  );
}
