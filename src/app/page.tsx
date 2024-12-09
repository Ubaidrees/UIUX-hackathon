// app/page.tsx
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Footer from '../../components/footer';  // Adjusted import path for the footer
export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}


