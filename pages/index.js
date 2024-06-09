import Head from "next/head";
import Nav from "../src/components/Nav";
import Hero from "../src/components/Hero";
import Ribbon from "../src/components/Ribbon";
import Features from "../src/components/Features";
import Advantages from "../src/components/Advantages";
import FAQ from "../src/components/FAQ";
import AdSection from "../src/components/AdSection";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Batch assignment</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Nav />
      <Hero />
      <Ribbon />
      <Features />
      <Advantages />
      <FAQ />
      <AdSection />
      <Footer />
    </div>
  );
}
