import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Smartphone, Heart } from "lucide-react";
import beautyProducts from "@/assets/beauty-products.jpg";
import gadgetPhone from "@/assets/gadget-phone.jpg";
import lifestyleItems from "@/assets/lifestyle-items.jpg";

const categories = [
  {
    title: "Beauty",
    description: "Glow up with our premium beauty collection",
    image: beautyProducts,
    icon: Sparkles,
    color: "text-neon-pink"
  },
  {
    title: "Gadgets", 
    description: "Latest tech gadgets for modern life",
    image: gadgetPhone,
    icon: Smartphone,
    color: "text-neon-blue"
  },
  {
    title: "Lifestyle",
    description: "Elevate your everyday essentials",
    image: lifestyleItems,
    icon: Heart,
    color: "text-neon-purple"
  }
];

const FeaturedCategories = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-neon">Featured</span> Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collections designed to enhance your lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={category.title} className="card-neon group cursor-pointer overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <category.icon className={`h-8 w-8 ${category.color} mb-2`} />
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Explore {category.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;