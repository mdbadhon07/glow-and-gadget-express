import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Clock, MapPin } from "lucide-react";

const Contact = () => {
  const whatsappNumber = "+8801522127665";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace('+', '')}`;

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Get in <span className="text-neon">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're here to help! Reach out to us through any of the channels below and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* WhatsApp */}
            <Card className="card-neon">
              <CardContent className="p-8 text-center">
                <div className="p-4 rounded-full bg-green-500/20 w-fit mx-auto mb-6">
                  <MessageCircle className="h-12 w-12 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">WhatsApp</h3>
                <p className="text-muted-foreground mb-6">
                  Chat with us directly for instant support and quick responses.
                </p>
                <p className="text-lg font-semibold mb-6">{whatsappNumber}</p>
                <Button 
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                  onClick={() => window.open(whatsappLink, '_blank')}
                >
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Messenger */}
            <Card className="card-neon">
              <CardContent className="p-8 text-center">
                <div className="p-4 rounded-full bg-blue-500/20 w-fit mx-auto mb-6">
                  <MessageCircle className="h-12 w-12 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Facebook Messenger</h3>
                <p className="text-muted-foreground mb-6">
                  Message us on Facebook for personalized assistance and product inquiries.
                </p>
                <Button 
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                  onClick={() => window.open('https://m.me/abglowgadgetworld', '_blank')}
                >
                  Message Us
                </Button>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="card-neon">
              <CardContent className="p-8 text-center">
                <div className="p-4 rounded-full bg-neon-pink/20 w-fit mx-auto mb-6">
                  <Mail className="h-12 w-12 text-neon-pink" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Email</h3>
                <p className="text-muted-foreground mb-6">
                  Send us detailed inquiries and we'll respond within 24 hours.
                </p>
                <p className="text-lg font-semibold mb-6">info@abglow.com</p>
                <Button 
                  className="w-full btn-neon"
                  onClick={() => window.open('mailto:info@abglow.com', '_blank')}
                >
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Hours & Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Business Hours */}
            <Card className="card-neon">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-neon-blue/20">
                    <Clock className="h-8 w-8 text-neon-blue" />
                  </div>
                  <h2 className="text-3xl font-bold">Business Hours</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border/50">
                    <span className="font-medium">Saturday - Thursday</span>
                    <span className="text-neon-blue">9:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border/50">
                    <span className="font-medium">Friday</span>
                    <span className="text-neon-blue">2:00 PM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium">Response Time</span>
                    <span className="text-neon-pink">Within 2 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location & Additional Info */}
            <Card className="card-neon">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-neon-pink/20">
                    <MapPin className="h-8 w-8 text-neon-pink" />
                  </div>
                  <h2 className="text-3xl font-bold">Service Area</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Delivery Coverage</h4>
                    <p className="text-muted-foreground">
                      We deliver nationwide across Bangladesh with express delivery available in Dhaka, Chittagong, and Sylhet.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Payment Methods</h4>
                    <p className="text-muted-foreground">
                      Cash on Delivery, bKash, Nagad, Rocket, and Bank Transfer accepted.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Return Policy</h4>
                    <p className="text-muted-foreground">
                      7-day return policy for defective items with easy replacement process.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Quick <span className="text-electric">Contact</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Have a question? We'd love to hear from you!
            </p>
          </div>

          <Card className="card-neon">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Button 
                  size="lg" 
                  className="btn-hero py-6"
                  onClick={() => window.open(whatsappLink, '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Now
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('https://m.me/abglowgadgetworld', '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Facebook Message
                </Button>
                
                <Button 
                  size="lg" 
                  className="btn-neon py-6"
                  onClick={() => window.open('mailto:info@abglow.com', '_blank')}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;