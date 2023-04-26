import Head from "next/head";
import Navbar from "./components/Navbar";
import Description from "./components/Description";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10">
        <section className=" min-h-screen">
          <Navbar />
          <Description />
        </section>
      </main>
    </div>
  );
}
