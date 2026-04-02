import Hero from "@/components/home/Hero";
import AIQueryBar from "@/components/home/AIQueryBar";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import TechStackStrip from "@/components/home/TechStackStrip";

export default function Home() {
  return (
    <div className="px-6 md:px-12 lg:px-24">
      <Hero />
      <AIQueryBar />
      <FeaturedProjects />
      <TechStackStrip />
    </div>
  );
}