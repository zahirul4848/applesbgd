import Intro from "@/components/home/intro";
import ThemeSwitch from "@/components/theme-switch";


export default function Home() {
  return (
    <main className="flex flex-col items-center mx-4">
      <Intro/>    
      <ThemeSwitch/>        
    </main>
  );
}
