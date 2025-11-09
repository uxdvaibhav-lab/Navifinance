import { ArrowLeft, ArrowUpRight, ArrowDownLeft, Filter, Search } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { useState } from "react";

interface TransactionHistoryScreenProps {
  onBack: () => void;
}

export default function TransactionHistoryScreen({ onBack }: TransactionHistoryScreenProps) {
  const [filter, setFilter] = useState<"all" | "sent" | "received">("all");

  const transactions = [
    {
      id: 1,
      type: "sent",
      name: "Coffee Shop",
      date: "Today, 2:30 PM",
      amount: 250,
      status: "completed",
    },
    {
      id: 2,
      type: "received",
      name: "John Doe",
      date: "Today, 11:15 AM",
      amount: 500,
      status: "completed",
    },
    {
      id: 3,
      type: "sent",
      name: "Grocery Store",
      date: "Yesterday, 6:45 PM",
      amount: 1200,
      status: "completed",
    },
    {
      id: 4,
      type: "sent",
      name: "Restaurant",
      date: "Yesterday, 1:20 PM",
      amount: 850,
      status: "completed",
    },
    {
      id: 5,
      type: "received",
      name: "Sarah Smith",
      date: "2 days ago",
      amount: 2000,
      status: "completed",
    },
    {
      id: 6,
      type: "sent",
      name: "Online Shopping",
      date: "3 days ago",
      amount: 3500,
      status: "pending",
    },
  ];

  const filteredTransactions = transactions.filter(
    (t) => filter === "all" || t.type === filter
  );

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

      {/* Title & Search */}
      <div className="space-y-3">
        <h1 className="text-2xl font-light tracking-tight text-foreground">Transaction History</h1>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 icon-xs text-muted-foreground" strokeWidth={1.5} />
          <Input
            placeholder="Search transactions..."
            className="pl-10 rounded-xl bg-card ring-1 ring-border"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="flex icon-text-gap">
        {[
          { id: "all", label: "All" },
          { id: "sent", label: "Sent" },
          { id: "received", label: "Received" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setFilter(item.id as typeof filter)}
            className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap active:scale-95 transition-all ${
              filter === item.id
                ? "bg-primary text-primary-foreground"
                : "bg-card ring-1 ring-border text-foreground hover:bg-muted"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Transactions List */}
      <div className="space-y-3">
        {filteredTransactions.map((transaction) => (
          <div
            key={transaction.id}
            className="bg-card rounded-2xl ring-1 ring-border p-4 active:scale-[0.98] transition-transform hover:ring-primary"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center card-gap">
                <div
                  className={`icon-xl rounded-full flex items-center justify-center ${
                    transaction.type === "sent"
                      ? "bg-destructive/10"
                      : "bg-success/10"
                  }`}
                >
                  {transaction.type === "sent" ? (
                    <ArrowUpRight className="icon-sm text-destructive" strokeWidth={1.5} />
                  ) : (
                    <ArrowDownLeft className="icon-sm text-success" strokeWidth={1.5} />
                  )}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {transaction.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{transaction.date}</p>
                  {transaction.status === "pending" && (
                    <p className="text-xs text-warning font-medium mt-1">Pending</p>
                  )}
                </div>
              </div>
              <p
                className={`text-base font-semibold ${
                  transaction.type === "sent"
                    ? "text-destructive"
                    : "text-success"
                }`}
              >
                {transaction.type === "sent" ? "-" : "+"}₹
                {transaction.amount.toLocaleString("en-IN")}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Export Button */}
      <Button variant="outline" className="w-full rounded-xl py-3 icon-text-gap">
        <Filter className="icon-xs" strokeWidth={1.5} />
        Export Statement
      </Button>
    </div>
  );
}
