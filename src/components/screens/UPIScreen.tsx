import { QrCode, Smartphone, History, Wallet, ScanLine, UserCircle, Send, ArrowLeftRight, Shield, ChevronRight } from "lucide-react";
import { Button } from "../../components/ui/button";

interface UPIScreenProps {
  onHistoryClick?: () => void;
  onScanPayClick?: () => void;
  onBalanceClick?: () => void;
  onMobilePayClick?: () => void;
  onUPIIdPayClick?: () => void;
}

export default function UPIScreen({ onHistoryClick, onScanPayClick, onBalanceClick, onMobilePayClick, onUPIIdPayClick }: UPIScreenProps) {
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
      
      {/* Quick payment options */}
      <div 
        className="bg-card rounded-2xl ring-1 ring-border p-4 animate-fade-slide-up opacity-0"
        style={{ animationDelay: '0ms' }}
      >
        <h4 className="text-sm font-medium uppercase tracking-wide text-muted-foreground mb-3">Quick payment options</h4>
        <div className="grid grid-cols-2 card-gap">
          <button onClick={onMobilePayClick} className="h-auto py-4 flex flex-col items-center icon-text-gap rounded-xl bg-muted ring-1 ring-border active:scale-[0.98] transition-all hover:ring-primary hover:shadow-sm cursor-pointer">
            <Smartphone className="icon-sm text-foreground" strokeWidth={1.5} />
            <span className="text-sm font-medium text-foreground">Mobile number</span>
          </button>
          <button onClick={onUPIIdPayClick} className="h-auto py-4 flex flex-col items-center icon-text-gap rounded-xl bg-muted ring-1 ring-border active:scale-[0.98] transition-all hover:ring-primary hover:shadow-sm cursor-pointer">
            <UserCircle className="icon-sm text-foreground" strokeWidth={1.5} />
            <span className="text-sm font-medium text-foreground">UPI ID</span>
          </button>
          <button onClick={onHistoryClick} className="h-auto py-4 flex flex-col items-center icon-text-gap rounded-xl bg-muted ring-1 ring-border active:scale-[0.98] transition-all hover:ring-primary hover:shadow-sm cursor-pointer">
            <History className="icon-sm text-foreground" strokeWidth={1.5} />
            <span className="text-sm font-medium text-foreground">History</span>
          </button>
          <button onClick={onBalanceClick} className="h-auto py-4 flex flex-col items-center icon-text-gap rounded-xl bg-muted ring-1 ring-border active:scale-[0.98] transition-all hover:ring-primary hover:shadow-sm cursor-pointer">
            <Wallet className="icon-sm text-foreground" strokeWidth={1.5} />
            <span className="text-sm font-medium text-foreground">UPI Lite</span>
          </button>
          <button onClick={onScanPayClick} className="col-span-2 h-auto py-4 flex flex-col items-center icon-text-gap rounded-xl bg-muted ring-1 ring-border active:scale-[0.98] transition-all hover:ring-primary hover:shadow-sm cursor-pointer">
            <ScanLine className="icon-sm text-foreground" strokeWidth={1.5} />
            <span className="text-sm font-medium text-foreground">Scan & Pay</span>
          </button>
          <button onClick={onBalanceClick} className="col-span-2 h-auto py-4 flex flex-col items-center icon-text-gap rounded-xl bg-muted ring-1 ring-border active:scale-[0.98] transition-all hover:ring-primary hover:shadow-sm cursor-pointer">
            <Wallet className="icon-sm text-foreground" strokeWidth={1.5} />
            <span className="text-sm font-medium text-foreground">Balance</span>
          </button>
        </div>
      </div>

      {/* Personal UPI */}
      <div 
        className="bg-card rounded-2xl ring-1 ring-border p-4 animate-fade-slide-up opacity-0"
        style={{ animationDelay: '50ms' }}
      >
        <h4 className="text-sm font-medium uppercase tracking-wide text-muted-foreground mb-3">Personal UPI</h4>
        <div className="space-y-2">
          <button className="w-full flex items-center justify-between py-3 px-4 rounded-xl bg-muted ring-1 ring-border active:scale-[0.98] transition-all hover:ring-primary hover:shadow-sm cursor-pointer">
            <div className="flex items-center card-gap">
              <QrCode className="icon-sm text-foreground" strokeWidth={1.5} />
              <span className="text-sm font-medium text-foreground">My QR code</span>
            </div>
            <ChevronRight className="icon-xs text-muted-foreground" strokeWidth={1.5} />
          </button>
          <button className="w-full flex items-center justify-between py-3 px-4 rounded-xl bg-muted ring-1 ring-border active:scale-[0.98] transition-all hover:ring-primary hover:shadow-sm cursor-pointer">
            <div className="flex items-center card-gap">
              <UserCircle className="icon-sm text-foreground" strokeWidth={1.5} />
              <span className="text-sm font-medium text-foreground">Get my UPI ID</span>
            </div>
            <ChevronRight className="icon-xs text-muted-foreground" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Secondary Options */}
      <div 
        className="bg-card rounded-2xl ring-1 ring-border p-4 animate-fade-slide-up opacity-0"
        style={{ animationDelay: '150ms' }}
      >
        <h4 className="text-sm font-medium uppercase tracking-wide text-muted-foreground mb-3">Secondary Options</h4>
        <div className="space-y-2">
          {[
            { icon: Send, label: "Payment request" },
            { icon: ArrowLeftRight, label: "Self transfer" },
            { icon: Shield, label: "Manage autopay" },
            { icon: QrCode, label: "UPI number" },
            { icon: UserCircle, label: "Blocked users" },
          ].map((option) => (
            <button
              key={option.label}
              className="w-full flex items-center justify-between py-3 px-4 rounded-xl bg-muted ring-1 ring-border active:scale-[0.98] transition-all hover:ring-primary hover:shadow-sm cursor-pointer"
            >
              <div className="flex items-center card-gap">
                <option.icon className="icon-sm text-foreground" strokeWidth={1.5} />
                <span className="text-sm font-medium text-foreground">{option.label}</span>
              </div>
              <ChevronRight className="icon-xs text-muted-foreground" strokeWidth={1.5} />
            </button>
          ))}
        </div>
      </div>

      {/* Banner */}
      <div 
        className="bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl ring-1 ring-primary/30 card-padding animate-fade-slide-up opacity-0"
        style={{ animationDelay: '200ms' }}
        role="region"
        aria-label="Promotional offer"
      >
        <h3 className="text-base font-semibold text-foreground">Setup account & win</h3>
        <p className="text-2xl font-light tracking-tight text-foreground mt-1">Up to 2,500 Navi coins</p>
        <Button className="w-full mt-4 hover:scale-[1.02] transition-transform">
          Setup now
        </Button>
      </div>
    </div>
  );
}
