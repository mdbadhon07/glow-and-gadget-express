import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedCategories from "@/components/FeaturedCategories";
import ProductGrid from "@/components/ProductGrid";
import SpecialOffers from "@/components/SpecialOffers";
import Testimonials from "@/components/Testimonials";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <div className="page-section">
          <HeroSection />
        </div>
        <div className="page-section">
          <FeaturedCategories />
        </div>
        <div className="page-section">
          <ProductGrid />
        </div>
        <div className="page-section">
          <SpecialOffers />
        </div>
        <div className="page-section">
          <Testimonials />
        </div>
      </div>
    </PageTransition>
  );
};

export default Index;
