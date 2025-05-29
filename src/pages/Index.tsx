import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import StorySection from "../components/StorySection";
import ComicSection from "../components/ComicSection";
import DataVisualization from "../components/DataVisualization";
import StudyTables from "../components/StudyTables";
import FarmerStories from "../components/FarmerStories";
import ComparisonTables from "../components/ComparisonTables";
import Footer from "../components/Footer";
import ImageGallery from "../components/ImageGallery";
// ✅ Removed: import CallToAction

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cottonFarmingImages = [
    {
      src: "/lovable-uploads/a3b38de7-2635-4c3d-9e67-e0edd3b46bc1.png",
      alt: "Cotton harvest in yellow bag",
      caption: "Fresh Cotton Harvest Collection",
      description:
        "The golden harvest represents months of careful cultivation. These traditional yellow bags have been used for generations to collect and transport cotton, preserving the quality while maintaining the connection to ancestral farming practices. Each bag represents not just cotton, but the hopes and dreams of farming families across Madhya Pradesh.",
    },
    {
      src: "/lovable-uploads/81beaf41-ab67-4344-ab1c-8f3a00765441.png",
      alt: "Female farmer holding cotton",
      caption: "Women: The Heart of Cotton Farming",
      description:
        "Women farmers play an indispensable role in cotton cultivation, often handling the most delicate aspects of crop care. From seed selection to harvest, their expertise and attention to detail ensure quality produce. This image captures the pride and dedication of female farmers who contribute significantly to India's agricultural economy while balancing family responsibilities.",
    },
  ];

  const farmingPracticesImages = [
    {
      src: "/lovable-uploads/ce8ed620-aac1-43c1-9fa2-3e6e08592cca.png",
      alt: "Farmer spraying crops",
      caption: "Modern Farming Techniques in Action",
      description:
        "The adoption of scientific farming methods has transformed cotton cultivation in Madhya Pradesh. Here we see farmers implementing integrated pest management strategies, using precision application of treatments to protect crops while minimizing environmental impact. This represents the balance between traditional knowledge and modern agricultural science.",
    },
    {
      src: "/lovable-uploads/123cbbe2-ba76-4e0e-a815-cda678e02fb8.png",
      alt: "Farmers carrying cotton harvest",
      caption: "Community Collaboration in Cotton Harvesting",
      description:
        "Cotton harvesting is often a community effort, where neighbors and families come together during the crucial harvest season. This collaborative spirit has been the foundation of rural cotton communities for centuries. The image showcases how collective effort not only makes the work more efficient but also strengthens social bonds within farming communities.",
    },
  ];

  const organicFarmingImages = [
    {
      src: "/lovable-uploads/e41aa837-59cb-4b48-a9ed-01c20d8931db.png",
      alt: "Young woman in cotton field",
      caption: "The Future Generation of Cotton Farmers",
      description:
        "Young farmers are increasingly embracing sustainable and organic cotton farming practices. They bring fresh perspectives, combining traditional wisdom with innovative approaches to create more environmentally friendly farming systems. This new generation is key to ensuring the long-term sustainability of cotton farming while maintaining the cultural heritage of rural communities.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-foreground pt-28">
      <Header />

      <HeroSection scrollY={scrollY} />

      <StorySection
        title="The Cotton Revolution"
        subtitle="Transforming Lives in Madhya Pradesh"
        content="In the heart of India's cotton belt, farmers are discovering new ways to cultivate both prosperity and sustainability."
      />

      <ImageGallery
        images={cottonFarmingImages}
        title="🌾 Cotton Farming in Madhya Pradesh"
      />

      <ComicSection
        title="Organic vs Conventional: A Tale of Two Farms"
        type="farming-practices"
      />

      <ImageGallery
        images={farmingPracticesImages}
        title="👨‍🌾 Farming Practices Across the Region"
      />

      <DataVisualization />

      <StudyTables />

      <ComicSection title="Expectations vs Reality" type="farmer-expectations" />

      <FarmerStories />

      <ImageGallery
        images={organicFarmingImages}
        title="🌱 The Future of Cotton Farming"
      />

      <ComparisonTables />

      <ComicSection
        title="Women & Children: The Hidden Heroes"
        type="family-impact"
      />

      {/* ✅ CallToAction removed */}
      <Footer />
    </div>
  );
};

export default Index;
