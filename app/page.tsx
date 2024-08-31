import HomeComponent from "@/components/home/home-component";
import SectionDivider from "@/components/home/section-divider";
import About from "@/components/about/about";
import Services from "@/components/services/services";
import Gallery from "@/components/gallery/gallery";
import Testimonials from "@/components/testimonials/testimonials";
import Contact from "@/components/contact/contact";


export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HomeComponent/>
      <SectionDivider />
      <About/>
      <Services/>
      <Gallery/>
      <Testimonials/>
      <Contact/>
    </main>
  );
}
