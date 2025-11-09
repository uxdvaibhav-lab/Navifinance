import { ArrowLeft, TrendingUp, Coins, LineChart, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InvestmentDetailScreenProps {
  onBack: () => void;
}

export default function InvestmentDetailScreen({ onBack }: InvestmentDetailScreenProps) {
  const investments = [
    { type: "Mutual Funds", amount: 28500, percentage: 54.5, color: "from-primary to-primary/80", icon: TrendingUp },
    { type: "Stocks", amount: 15200, percentage: 29.1, color: "from-primary/70 to-primary/50", icon: LineChart },
    { type: "Gold", amount: 6800, percentage: 13.0, color: "from-warning to-warning/80", icon: Coins },
    { type: "Others", amount: 1818.88, percentage: 3.4, color: "from-muted-foreground to-muted-foreground/80", icon: Wallet },
  ];

  const total = 52318.88;

  return (
    <div className="px-4 pt-4 pb-24 section-spacing">
      {/* Header */}
      <button
        onClick={onBack}
        className="flex items-center icon-text-gap text-foreground active:scale-95 transition-transform"
      >
        <ArrowLeft className="icon-sm" strokeWidth={1.5} />
        <span className="text-sm font-medium">Back</span>
      </button>

      {/* Total Investment */}
      <div className="bg-gradient-to-br from-primary to-primary-structural rounded-2xl ring-1 ring-primary/50 p-6 text-white">
        <p className="gradient-label mb-2">Total Investment Value</p>
        <h1 className="text-4xl font-light tracking-tight text-white">₹{total.toLocaleString('en-IN')}</h1>
        <div className="flex items-center icon-text-gap mt-3">
          <TrendingUp className="icon-xs" strokeWidth={1.5} />
          <span className="text-sm">+12.3% overall returns</span>
        </div>
      </div>

      {/* Investment Breakdown */}
      <div className="bg-card rounded-2xl ring-1 ring-border card-padding section-spacing">
        <h2 className="text-lg font-light tracking-tight text-foreground">Investment Breakdown</h2>
        
        {/* Visual breakdown */}
        <div className="h-3 rounded-full overflow-hidden flex">
          {investments.map((inv, idx) => (
            <div
              key={inv.type}
              className={`bg-gradient-to-r ${inv.color} transition-all hover:opacity-80`}
              style={{ width: `${inv.percentage}%` }}
            />
          ))}
        </div>

        {/* Category cards */}
        <div className="space-y-3 mt-4">
          {investments.map((inv) => {
            const Icon = inv.icon;
            return (
              <div
                key={inv.type}
                className="flex items-center justify-between p-4 rounded-xl bg-muted ring-1 ring-border"
              >
                <div className="flex items-center card-gap">
                  <div className={`icon-xl rounded-full bg-gradient-to-br ${inv.color} flex items-center justify-center`}>
                    <Icon className="icon-sm text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{inv.type}</p>
                    <p className="text-xs text-muted-foreground">{inv.percentage.toFixed(1)}% of portfolio</p>
                  </div>
                </div>
                <p className="text-base font-semibold text-foreground">
                  ₹{inv.amount.toLocaleString('en-IN')}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 card-gap">
        <Button variant="outline" className="h-auto py-4 flex flex-col items-center icon-text-gap rounded-xl">
          <TrendingUp className="icon-sm" strokeWidth={1.5} />
          <span className="text-sm font-medium">Add Investment</span>
        </Button>
        <Button variant="outline" className="h-auto py-4 flex flex-col items-center icon-text-gap rounded-xl">
          <LineChart className="icon-sm" strokeWidth={1.5} />
          <span className="text-sm font-medium">View Reports</span>
        </Button>
      </div>
    </div>
  );
}
