import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Highlights from "@/components/Highlights";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import FindUs from "@/components/FindUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Highlights />
        <About />
        <Gallery />
        <FindUs />
      </main>
      <Footer />
    </>
  );
}
