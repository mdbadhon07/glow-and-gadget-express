import { ShoppingCart, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="text-2xl font-bold text-neon bg-gradient-neon bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105">
              AB's Glow & Gadget World
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`nav-link ${isActiveRoute('/') ? 'active text-neon-blue' : 'text-foreground'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${isActiveRoute('/about') ? 'active text-neon-blue' : 'text-foreground'}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${isActiveRoute('/contact') ? 'active text-neon-blue' : 'text-foreground'}`}
            >
              Contact
            </Link>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden sm:flex hover-scale">
              <Search className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="relative hover-scale">
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-secondary text-secondary-foreground animate-pulse">
                0
              </Badge>
            </Button>

            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden hover-scale"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/40 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`nav-link text-center ${isActiveRoute('/') ? 'active text-neon-blue' : 'text-foreground'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`nav-link text-center ${isActiveRoute('/about') ? 'active text-neon-blue' : 'text-foreground'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`nav-link text-center ${isActiveRoute('/contact') ? 'active text-neon-blue' : 'text-foreground'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;