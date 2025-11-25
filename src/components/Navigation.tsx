"use client";

import { Menu, ShoppingCart, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/useCartStore";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { toggleCart, getTotalItems } = useCartStore();
  const totalItems = getTotalItems();

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Countries", href: "#countries" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/${href}`);
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border/50">
      <div className="max-w-container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logos/navy-blue-logo.png"
              alt="Navy Blue Logo"
              width={36}
              height={36}
            />
            <div>
              <h1 className="font-heading text-lg font-bold text-primary">
                Skybar Dış Ticaret
              </h1>
              <p className="font-body text-xs text-muted-foreground">
                International Trade Solutions
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => scrollToSection(item.href)}
                className="text-navy-blue hover:text-secondary transition-all duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <Link href="/products">
              <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-heading font-semibold shadow-md">
                View Products
              </Button>
            </Link>
            <button
              type="button"
              onClick={toggleCart}
              className="relative p-2 text-primary hover:text-secondary transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button & Cart */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={toggleCart}
              className="relative p-2 text-primary hover:text-secondary transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-primary"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border/50">
            <div className="space-y-3">
              <div className="flex flex-col gap-3 items-start">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => scrollToSection(item.href)}
                    className="text-navy-blue hover:text-secondary transition-all duration-300 font-medium relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                  </button>
                ))}
              </div>

              <Link href="/products">
                <Button className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-heading font-semibold mt-4">
                  View Products
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
