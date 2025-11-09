import { TrendingUp, BadgeIndianRupee, QrCode, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navItems = [
  { id: "investment", label: "Investment", icon: TrendingUp },
  { id: "loan", label: "Loan", icon: BadgeIndianRupee },
  { id: "upi", label: "UPI", icon: QrCode },
  { id: "health", label: "Health", icon: Heart },
];

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const activeIndex = navItems.findIndex((item) => item.id === activeTab);

  return (
    <div className="fixed bottom-3 left-4 right-4 z-50">
      <nav className="rounded-2xl bg-card ring-1 ring-border shadow-sm px-3 py-3">
        <div className="grid grid-cols-4 gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className="flex flex-col items-center justify-center gap-1 py-2 active:scale-95 transition-all hover:bg-muted rounded-xl"
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon
                  className={cn(
                    "icon-sm transition-colors duration-200",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                  strokeWidth={isActive ? 2 : 1.5}
                />
                <span
                  className={cn(
                    "text-xs transition-colors duration-200",
                    isActive ? "font-semibold text-foreground" : "font-medium text-muted-foreground"
                  )}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
