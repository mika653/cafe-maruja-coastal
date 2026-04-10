import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import MenuPage from "@/components/MenuPage";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Menu | Cafe Maruja — All-Day Brunch & Cocktails in Boracay",
  description:
    "Browse our full menu of artisan brunch plates, tropical cocktails, smoothie bowls, and desserts. Fresh, local ingredients at Station 3, Boracay.",
};

export default function Menu() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <MenuPage />
      </main>
      <Footer />
    </>
  );
}
