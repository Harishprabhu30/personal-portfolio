import Hero from "@/components/home/Hero";
import AIQueryBar from "@/components/home/AIQueryBar";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import TechStackStrip from "@/components/home/TechStackStrip";

export default function Home() {
  return (
    <div className="px-6 md:px-12 lg:px-24">
      <div className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />
        <Hero />
      </div>

      <AIQueryBar />
      <FeaturedProjects />
      <TechStackStrip />
    </div>
  );
}