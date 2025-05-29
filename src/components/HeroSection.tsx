import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  scrollY: number;
}

const HeroSection = ({ scrollY }: HeroSectionProps) => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-[#236A74] text-white overflow-hidden">
      {/* Parallax Background Layer */}
      <div
        className="absolute inset-0 bg-[#236A74]"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Empowering Cotton Farmers
          <span className="block text-[#D4AF37]">Through Data & Impact</span>
        </h1>
        <p className="text-lg md:text-xl text-[#C0C0C0] mb-4">
          Social and Economic Impact Assessment of Cotton Farming in Madhya Pradesh
        </p>
        <p className="text-sm md:text-base text-[#A0AEC0] mb-12">
          A collaborative study by Outline India and American Institutes for Research
        </p>
        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 text-[#D4AF37] mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
