import { TrendingUp, Users, ChevronRight, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InvestmentScreenProps {
  onFundClick: () => void;
  onInvestmentClick: () => void;
}

export default function InvestmentScreen({ onFundClick, onInvestmentClick }: InvestmentScreenProps) {
  const funds = [
    { name: "Navi Nifty 50 Index Fund", size: "₹1,234 Cr", returns: "+18.2%", investors: "1.2L" },
    { name: "Navi Flexi Cap Fund", size: "₹892 Cr", returns: "+22.5%", investors: "89K" },
    { name: "Navi ELSS Tax Saver Fund", size: "₹2,145 Cr", returns: "+20.1%", investors: "2.1L" },
  ];

  const categories = ["Debt", "Multi cap", "Mid cap", "Large cap", "Industrial"];

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
      
      {/* Investment Summary */}
      <button
        onClick={onInvestmentClick}
        className="w-full bg-gradient-to-br from-primary to-primary-structural rounded-2xl ring-1 ring-primary/50 p-6 text-white text-left active:scale-[0.98] transition-all animate-fade-slide-up opacity-0 hover:shadow-lg cursor-pointer"
        style={{ animationDelay: '0ms' }}
      >
        <p className="gradient-label mb-2">My investments</p>
        <h1 className="text-4xl font-light tracking-tight text-white">₹52,318.88</h1>
        <div className="flex items-center icon-text-gap mt-3">
          <TrendingUp className="icon-xs" strokeWidth={1.5} />
          <span className="text-sm">+12.3% overall returns</span>
        </div>
      </button>

      {/* Category Filters */}
      <div className="flex icon-text-gap overflow-x-auto py-2 scrollbar-hide">
        {categories.map((cat, index) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap active:scale-95 transition-all ${
              index === 0 
                ? "bg-primary text-primary-foreground shadow-sm" 
                : "bg-card ring-1 ring-border text-foreground hover:bg-muted hover:ring-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Funds */}
      <div className="space-y-3">
        <h2 className="text-lg font-light tracking-tight text-foreground">Featured Mutual Funds</h2>
        {funds.map((fund, index) => (
          <button
            key={fund.name}
            onClick={fund.name === "Navi Nifty 50 Index Fund" ? onFundClick : undefined}
            className="w-full bg-card rounded-2xl ring-1 ring-border card-padding text-left active:scale-[0.98] transition-all animate-fade-slide-up opacity-0 hover:ring-primary hover:shadow-sm cursor-pointer"
            style={{ animationDelay: `${50 + index * 50}ms` }}
          >
            <h3 className="text-base font-medium text-foreground mb-4">{fund.name}</h3>
            <div className="grid grid-cols-3 section-gap">
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-wide text-muted-foreground/70 font-medium">Fund Size</p>
                <p className="text-sm font-medium text-foreground">{fund.size}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-wide text-muted-foreground/70 font-medium">Returns</p>
                <p className="text-sm font-medium text-success">{fund.returns}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-wide text-muted-foreground/70 font-medium">Investors</p>
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3" strokeWidth={1.5} />
                  <p className="text-sm font-medium text-foreground">{fund.investors}</p>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Promotional Banner */}
      <div 
        className="bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl ring-1 ring-primary/30 card-padding animate-fade-slide-up opacity-0"
        style={{ animationDelay: '250ms' }}
        role="region"
        aria-label="Promotional offer"
      >
        <h3 className="text-base font-semibold text-foreground">Setup account & win</h3>
        <p className="text-2xl font-light tracking-tight text-foreground mt-1">Up to 2,500 Navi coins</p>
        <Button className="w-full mt-4 bg-white text-primary hover:bg-white/95 hover:scale-[1.02] transition-transform">
          Setup now
        </Button>
      </div>
    </div>
  );
}
