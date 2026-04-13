import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Departments from "@/components/Departments";
import Doctors from "@/components/Doctors";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Departments />
        <Doctors />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}
