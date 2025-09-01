import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Target, Users, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            About <span className="text-neon">AB's Glow</span> & <span className="text-electric">Gadget World</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Your trusted destination for premium gadgets, beauty products, and lifestyle essentials that truly add value to your everyday life.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="card-neon">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-neon-blue/20">
                    <Target className="h-8 w-8 text-neon-blue" />
                  </div>
                  <h2 className="text-3xl font-bold text-neon-blue">Our Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To provide authentic, high-quality products that enhance our customers' lifestyles while building lasting relationships through exceptional service and trust.
                </p>
              </CardContent>
            </Card>

            <Card className="card-neon">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-neon-pink/20">
                    <Sparkles className="h-8 w-8 text-neon-pink" />
                  </div>
                  <h2 className="text-3xl font-bold text-neon-pink">Our Vision</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To become Bangladesh's most trusted online destination for lifestyle products, where every purchase genuinely adds value to our customers' lives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our <span className="text-electric">Story</span>
          </h2>
          
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
            <p>
              AB's Glow & Gadget World started as a passion project on Facebook, born from the simple belief that everyone deserves access to quality products that enhance their daily lives. What began as a small social media shop has grown into a trusted community of thousands of satisfied customers across Bangladesh.
            </p>
            
            <p>
              We specialize in three key areas that we're passionate about: cutting-edge gadgets that simplify your tech life, premium beauty products that help you glow from within, and lifestyle essentials that add comfort and style to your everyday routine.
            </p>
            
            <p>
              Every product in our collection is carefully curated and tested to ensure it meets our high standards for quality, authenticity, and value. We believe that when you invest in the right products, you're investing in a better version of yourself.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose <span className="text-neon">Us</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-neon text-center">
              <CardContent className="p-8">
                <div className="p-4 rounded-full bg-neon-blue/20 w-fit mx-auto mb-6">
                  <Award className="h-12 w-12 text-neon-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Authentic Products</h3>
                <p className="text-muted-foreground">
                  100% genuine products sourced directly from trusted suppliers and brands.
                </p>
              </CardContent>
            </Card>

            <Card className="card-neon text-center">
              <CardContent className="p-8">
                <div className="p-4 rounded-full bg-neon-pink/20 w-fit mx-auto mb-6">
                  <Users className="h-12 w-12 text-neon-pink" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Customer First</h3>
                <p className="text-muted-foreground">
                  Dedicated support via WhatsApp, Messenger, and email for all your needs.
                </p>
              </CardContent>
            </Card>

            <Card className="card-neon text-center">
              <CardContent className="p-8">
                <div className="p-4 rounded-full bg-neon-purple/20 w-fit mx-auto mb-6">
                  <Sparkles className="h-12 w-12 text-neon-purple" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Value Addition</h3>
                <p className="text-muted-foreground">
                  Every product is chosen to genuinely enhance your lifestyle and daily experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;