import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Premium Wireless Earbuds",
    price: 2999,
    originalPrice: 3999,
    image: "/placeholder.svg",
    rating: 4.8,
    category: "Gadgets",
    isNew: true
  },
  {
    id: 2,
    name: "Glow Face Serum",
    price: 1499,
    originalPrice: 1999,
    image: "/placeholder.svg", 
    rating: 4.9,
    category: "Beauty",
    isBestseller: true
  },
  {
    id: 3,
    name: "Smart Fitness Tracker",
    price: 4999,
    originalPrice: 6999,
    image: "/placeholder.svg",
    rating: 4.7,
    category: "Lifestyle"
  },
  {
    id: 4,
    name: "Luxury Perfume Set",
    price: 3499,
    originalPrice: 4999,
    image: "/placeholder.svg",
    rating: 4.8,
    category: "Beauty",
    isBestseller: true
  },
  {
    id: 5,
    name: "Phone Camera Lens Kit",
    price: 1999,
    originalPrice: 2999,
    image: "/placeholder.svg",
    rating: 4.6,
    category: "Gadgets"
  },
  {
    id: 6,
    name: "Wellness Journal",
    price: 899,
    originalPrice: 1299,
    image: "/placeholder.svg",
    rating: 4.9,
    category: "Lifestyle",
    isNew: true
  }
];

const ProductGrid = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-electric">Trending</span> Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked items that our customers love most
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={product.id} className="card-neon group overflow-hidden hover-scale card-stagger">
              <div className="relative">
                <div className="h-64 bg-muted/50 flex items-center justify-center">
                  <span className="text-muted-foreground">Product Image</span>
                </div>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isNew && (
                    <Badge className="bg-neon-blue text-background">New</Badge>
                  )}
                  {product.isBestseller && (
                    <Badge className="bg-neon-pink text-background">Bestseller</Badge>
                  )}
                </div>

                {/* Quick add to cart */}
                <Button 
                  size="icon"
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity btn-neon hover-scale"
                >
                  <ShoppingCart className="h-4 w-4" />
                </Button>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.rating})</span>
                </div>

                <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-primary">
                    ৳{product.price}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    ৳{product.originalPrice}
                  </span>
                  <Badge variant="outline" className="text-xs border-secondary text-secondary">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </Badge>
                </div>

                <Button className="w-full btn-neon hover-scale">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;