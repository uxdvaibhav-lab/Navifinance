import { Heart, Building2, Clock, Users, Shield, MessageCircle, ChevronRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HealthScreen() {
  const hospitals = ["Apollo", "Fortis", "Max Healthcare", "Manipal"];
  const benefits = [
    { icon: Building2, label: "13,000+ cashless hospitals" },
    { icon: Clock, label: "20 mins claim approval" },
    { icon: Users, label: "4 Lakh+ customers" },
  ];

  return (
    <div className="px-4 pt-4 pb-24 section-spacing">
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-slide-up {
            animation: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
      
      {/* Main Offer */}
      <div 
        className="bg-gradient-to-br from-primary to-primary-structural rounded-2xl ring-1 ring-primary/50 card-padding text-white animate-fade-slide-up opacity-0"
        style={{ animationDelay: '0ms' }}
      >
        <div className="section-spacing">
          <Heart className="icon-2xl" strokeWidth={1.5} />
          <div>
            <h2 className="gradient-heading">Pay ₹0 hospital bills</h2>
            <p className="gradient-supporting mt-2">6 years of securing lives</p>
          </div>
          <Button className="w-full bg-white text-primary hover:bg-white/95">
            Check price
          </Button>
        </div>
      </div>

      {/* Coverage Highlights */}
      <div className="grid grid-cols-3 card-gap">
        {benefits.map((benefit, index) => (
          <div 
            key={benefit.label} 
            className="bg-card rounded-2xl ring-1 ring-border p-4 flex flex-col items-center text-center icon-text-gap animate-fade-slide-up opacity-0"
            style={{ animationDelay: `${50 + index * 30}ms` }}
          >
            <benefit.icon className="icon-lg text-primary" strokeWidth={1.5} />
            <p className="text-xs font-medium leading-tight text-foreground">{benefit.label}</p>
          </div>
        ))}
      </div>

      {/* Hospital Locator */}
      <div 
        className="bg-card rounded-2xl ring-1 ring-border card-padding section-spacing animate-fade-slide-up opacity-0"
        style={{ animationDelay: '140ms' }}
      >
        <h3 className="text-base font-semibold text-foreground">Hospitals near you</h3>
        <div className="flex flex-wrap icon-text-gap">
          {hospitals.map((hospital) => (
            <span
              key={hospital}
              className="px-4 py-2 rounded-full bg-muted ring-1 ring-border text-xs font-medium text-foreground"
            >
              {hospital}
            </span>
          ))}
          <span className="px-4 py-2 rounded-full bg-muted ring-1 ring-border text-xs font-medium text-foreground">
            +12,000 more
          </span>
        </div>
        <Button variant="outline" className="w-full icon-text-gap">
          <span>View all hospitals</span>
          <ChevronRight className="icon-xs" strokeWidth={1.5} />
        </Button>
      </div>

      {/* Why Choose Navi */}
      <div 
        className="bg-card rounded-2xl ring-1 ring-border card-padding section-spacing animate-fade-slide-up opacity-0"
        style={{ animationDelay: '190ms' }}
      >
        <h2 className="text-lg font-light tracking-tight text-foreground">Why choose Navi Health?</h2>
        <div className="space-y-3">
          {[
            "12K+ covered hospitals",
            "Comprehensive Navi coverage",
            "Expert claim support 24/7",
          ].map((feature) => (
            <div key={feature} className="flex items-center card-gap">
              <CheckCircle className="icon-sm text-primary flex-shrink-0" strokeWidth={1.5} />
              <span className="text-sm font-medium text-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Health Score Quiz */}
      <div 
        className="bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl ring-1 ring-primary/30 card-padding space-y-3 animate-fade-slide-up opacity-0"
        style={{ animationDelay: '240ms' }}
      >
        <h3 className="text-base font-semibold text-foreground">Check your health score</h3>
        <p className="text-sm text-muted-foreground">Take a 2 min quiz</p>
        <Button variant="outline" className="w-full icon-text-gap">
          <span>Start quiz</span>
          <ChevronRight className="icon-sm ml-auto" strokeWidth={1.5} />
        </Button>
      </div>

      {/* Support */}
      <div 
        className="bg-card rounded-2xl ring-1 ring-border card-padding space-y-3 animate-fade-slide-up opacity-0"
        style={{ animationDelay: '290ms' }}
      >
        <h3 className="text-base font-semibold text-foreground">Need help?</h3>
        <p className="text-sm text-muted-foreground">
          Chat with Nisha from Health Insurance support
        </p>
        <Button variant="outline" className="w-full icon-text-gap">
          <MessageCircle className="icon-sm" strokeWidth={1.5} />
          <span>Chat now</span>
        </Button>
      </div>
    </div>
  );
}
