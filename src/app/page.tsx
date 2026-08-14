import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MissionVision from "@/components/MissionVision";
import Departments from "@/components/Departments";
import Doctors from "@/components/Doctors";
import Testimonials from "@/components/Testimonials";
import LocationMap from "@/components/LocationMap";
import Footer from "@/components/Footer";
import InitialPopupModal from "@/components/InitialPopupModal";

export default function Home() {
  return (
    <>
      <InitialPopupModal />
      <Navbar />
      <main>
        <Hero />
        <About />
        <MissionVision />
        <Departments />
        <Doctors />
        <Testimonials />
        <LocationMap />
        <Footer />
      </main>
    </>
  );
}
