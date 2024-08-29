import HomeComponent from "@/components/home/home-component";
import SectionDivider from "@/components/home/section-divider";
import About from "@/components/about/about";


export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HomeComponent/>
      <SectionDivider />
      <About/>
    </main>
  );
}
