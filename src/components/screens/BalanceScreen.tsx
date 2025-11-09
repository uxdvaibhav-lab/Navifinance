import { ArrowLeft, Plus, TrendingUp, ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface BalanceScreenProps {
  onBack: () => void;
  onHistoryClick: () => void;
}

const BalanceScreen = ({ onBack, onHistoryClick }: BalanceScreenProps) => {
  const balance = 2847.50;
  
  const weeklySpending = [
    { day: "Mon", amount: 450 },
    { day: "Tue", amount: 320 },
    { day: "Wed", amount: 580 },
    { day: "Thu", amount: 210 },
    { day: "Fri", amount: 690 },
    { day: "Sat", amount: 420 },
    { day: "Sun", amount: 380 },
  ];

  const maxSpending = Math.max(...weeklySpending.map(d => d.amount));

  const recentTransactions = [
    { name: "Swiggy", amount: -420, time: "2 hours ago", type: "debit" },
    { name: "Salary Credit", amount: 50000, time: "Yesterday", type: "credit" },
    { name: "Amazon", amount: -1299, time: "Yesterday", type: "debit" },
    { name: "Uber", amount: -180, time: "2 days ago", type: "debit" },
    { name: "Refund", amount: 499, time: "3 days ago", type: "credit" },
  ];

  const handleAddMoney = () => {
    toast.success("Add money to UPI Lite feature coming soon!");
  };

  return (
    <div className="min-h-screen bg-background pb-6">
      <div className="px-4 pt-4 space-y-6">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={onBack}
          className="flex items-center icon-text-gap -ml-3"
        >
          <ArrowLeft className="icon-sm" strokeWidth={1.5} />
          <span className="text-sm font-medium">Back</span>
        </Button>

        {/* Balance Card */}
        <div className="bg-gradient-to-br from-primary to-primary-structural rounded-2xl ring-1 ring-primary/50 p-6 text-white">
          <p className="gradient-label mb-2">Available Balance</p>
          <h1 className="text-4xl font-light tracking-tight text-white">₹{balance.toFixed(2)}</h1>
          <Button onClick={handleAddMoney} size="sm" className="mt-4 icon-text-gap w-full bg-white text-primary hover:bg-white/95">
            <Plus className="icon-xs" />
            Add Money
          </Button>
        </div>
        {/* Weekly Spending Chart */}
        <div className="bg-card rounded-xl p-5 border border-border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-medium text-foreground">Weekly Spending</h2>
            <TrendingUp className="icon-sm text-muted-foreground" />
          </div>
          
          <div className="flex items-end justify-between h-32 icon-text-gap">
            {weeklySpending.map((day, index) => (
              <div key={index} className="flex-1 flex flex-col items-center icon-text-gap">
                <div className="w-full bg-muted rounded-t-lg relative overflow-hidden">
                  <div
                    className="bg-gradient-to-t from-primary to-primary/70 rounded-t-lg transition-all duration-500"
                    style={{
                      height: `${(day.amount / maxSpending) * 100}px`,
                    }}
                  />
                </div>
                <span className="text-xs text-muted-foreground">{day.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm uppercase tracking-wide font-medium text-muted-foreground">Recent Transactions</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onHistoryClick}
            >
              View All
            </Button>
          </div>
          
          <div className="space-y-2">
            {recentTransactions.map((transaction, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-5 flex items-center card-gap border border-border animate-fade-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`icon-xl rounded-full flex items-center justify-center ${
                  transaction.type === "credit" ? "bg-success/5" : "bg-destructive/5"
                }`}>
                  {transaction.type === "credit" ? (
                    <ArrowDownLeft className="icon-sm text-success" />
                  ) : (
                    <ArrowUpRight className="icon-sm text-destructive" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-foreground">{transaction.name}</div>
                  <div className="text-sm text-muted-foreground">{transaction.time}</div>
                </div>
                <div className={`font-semibold ${
                  transaction.type === "credit" ? "text-success" : "text-destructive"
                }`}>
                  {transaction.type === "credit" ? "+" : "-"}₹{Math.abs(transaction.amount)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceScreen;
