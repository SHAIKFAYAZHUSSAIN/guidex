import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Demo from "@/components/sections/Demo";
import Vision from "@/components/sections/Vision";
import Team from "@/components/sections/Team";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 w-full border-x-8 border-black mx-auto bg-white" style={{ maxWidth: "1600px" }}>
        <Hero />
        <Problem />
        <Solution />
        <Demo />
        <Vision />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
