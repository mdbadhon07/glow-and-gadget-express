import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Fatima Rahman",
    location: "Dhaka",
    rating: 5,
    text: "Amazing quality products and super fast delivery! The beauty products really made me glow ✨",
    initials: "FR"
  },
  {
    name: "Ahmed Hassan",
    location: "Chittagong", 
    rating: 5,
    text: "Best gadget shop on Facebook! Got my wireless earbuds and they're incredible. Highly recommend!",
    initials: "AH"
  },
  {
    name: "Nusrat Jahan",
    location: "Sylhet",
    rating: 5,
    text: "Love shopping here! Every purchase really does add value to my lifestyle. Customer service is top-notch.",
    initials: "NJ"
  },
  {
    name: "Rafi Khan",
    location: "Rajshahi",
    rating: 5,
    text: "Great prices, authentic products, and quick WhatsApp support. My go-to online shop now!",
    initials: "RK"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            What Our <span className="text-electric">Customers</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real reviews from happy customers across Bangladesh
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-neon h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <Quote className="h-8 w-8 text-neon-pink mb-4 opacity-60" />
                
                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 border-2 border-neon-blue/30">
                    <AvatarFallback className="bg-gradient-neon text-background font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;