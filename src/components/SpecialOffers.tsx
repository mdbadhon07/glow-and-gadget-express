import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Gift, Zap } from "lucide-react";

const SpecialOffers = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-neon">Special</span> Offers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Limited time deals you don't want to miss
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 299 Taka Offer */}
          <Card className="card-neon overflow-hidden relative">
            <div className="absolute top-4 right-4">
              <Badge className="bg-neon-pink text-background animate-pulse-neon">
                LIMITED TIME
              </Badge>
            </div>
            
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-neon-pink/20">
                  <Gift className="h-8 w-8 text-neon-pink" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-neon-pink">৳299 Special</h3>
                  <p className="text-muted-foreground">Grab amazing products</p>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-neon-blue" />
                  <span>Selected beauty essentials</span>
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-neon-blue" />
                  <span>Trending gadget accessories</span>
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-neon-blue" />
                  <span>Lifestyle upgrade items</span>
                </li>
              </ul>

              <Button className="w-full btn-hero text-lg py-6">
                Shop ৳299 Deals
              </Button>
            </CardContent>
          </Card>

          {/* Flash Sale */}
          <Card className="card-neon overflow-hidden relative">
            <div className="absolute top-4 right-4">
              <Badge className="bg-neon-blue text-background animate-pulse-neon">
                FLASH SALE
              </Badge>
            </div>
            
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-neon-blue/20">
                  <Clock className="h-8 w-8 text-neon-blue" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-neon-blue">Flash Sale</h3>
                  <p className="text-muted-foreground">Up to 70% off</p>
                </div>
              </div>

              {/* Countdown Timer */}
              <div className="grid grid-cols-4 gap-2 mb-6">
                {[
                  { label: 'Days', value: '12' },
                  { label: 'Hours', value: '08' },
                  { label: 'Mins', value: '45' },
                  { label: 'Secs', value: '23' }
                ].map((time) => (
                  <div key={time.label} className="text-center p-3 rounded-lg bg-muted/50">
                    <div className="text-2xl font-bold text-neon-blue">{time.value}</div>
                    <div className="text-xs text-muted-foreground uppercase">{time.label}</div>
                  </div>
                ))}
              </div>

              <Button className="w-full btn-neon text-lg py-6">
                Shop Flash Sale
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;