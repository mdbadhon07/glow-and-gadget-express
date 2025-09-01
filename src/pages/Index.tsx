import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedCategories from "@/components/FeaturedCategories";
import ProductGrid from "@/components/ProductGrid";
import SpecialOffers from "@/components/SpecialOffers";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedCategories />
      <ProductGrid />
      <SpecialOffers />
      <Testimonials />
    </div>
  );
};

export default Index;
