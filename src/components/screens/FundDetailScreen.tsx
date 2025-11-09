import { ArrowLeft, TrendingUp, Users, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface FundDetailScreenProps {
  onBack: () => void;
}

export default function FundDetailScreen({ onBack }: FundDetailScreenProps) {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const performanceData = [
    { month: "Jan", value: 100 },
    { month: "Feb", value: 105 },
    { month: "Mar", value: 103 },
    { month: "Apr", value: 110 },
    { month: "May", value: 115 },
    { month: "Jun", value: 118 },
  ];

  const maxValue = Math.max(...performanceData.map(d => d.value));
  const minValue = Math.min(...performanceData.map(d => d.value));

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

      {/* Fund Header */}
      <div className="bg-card rounded-2xl ring-1 ring-border card-padding">
        <h1 className="text-2xl font-light tracking-tight text-foreground mb-2">
          Navi Nifty 50 Index Fund
        </h1>
        <div className="flex items-center section-gap mb-4">
          <div>
            <p className="text-xs text-muted-foreground">Fund Size</p>
            <p className="text-sm font-semibold text-foreground">₹1,234 Cr</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Returns (1Y)</p>
            <p className="text-sm font-semibold text-success">+18.2%</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Investors</p>
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3" strokeWidth={1.5} />
              <p className="text-sm font-semibold text-foreground">1.2L</p>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-card rounded-2xl ring-1 ring-border card-padding animate-fade-slide-up opacity-0" style={{ animationDelay: "100ms" }}>
        <h2 className="text-lg font-light tracking-tight text-foreground mb-4">
          Performance (6 Months)
        </h2>
        <div className="relative h-48">
          <svg className="w-full h-full" viewBox="0 0 300 150">
            {/* Grid lines */}
            {[0, 1, 2, 3, 4].map((i) => (
              <line
                key={i}
                x1="0"
                y1={30 * i}
                x2="300"
                y2={30 * i}
                stroke="hsl(var(--border))"
                strokeWidth="1"
              />
            ))}

            {/* Performance line */}
            <polyline
              points={performanceData
                .map((d, i) => {
                  const x = (i / (performanceData.length - 1)) * 280 + 10;
                  const y = 140 - ((d.value - minValue) / (maxValue - minValue)) * 120;
                  return `${x},${y}`;
                })
                .join(" ")}
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-fade-slide-up opacity-0"
              style={{ animationDelay: "300ms" }}
            />

            {/* Data points */}
            {performanceData.map((d, i) => {
              const x = (i / (performanceData.length - 1)) * 280 + 10;
              const y = 140 - ((d.value - minValue) / (maxValue - minValue)) * 120;
              return (
                <g key={i}>
                  <circle
                    cx={x}
                    cy={y}
                    r={hoveredPoint === i ? "6" : "4"}
                    fill="hsl(var(--card))"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    className="transition-all cursor-pointer"
                    onMouseEnter={() => setHoveredPoint(i)}
                    onMouseLeave={() => setHoveredPoint(null)}
                  />
                  {hoveredPoint === i && (
                    <g>
                      <rect
                        x={x - 25}
                        y={y - 35}
                        width="50"
                        height="25"
                        rx="4"
                        fill="hsl(var(--foreground))"
                        className="animate-scale-in"
                      />
                      <text
                        x={x}
                        y={y - 23}
                        textAnchor="middle"
                        fill="hsl(var(--background))"
                        fontSize="10"
                        fontWeight="600"
                      >
                        {d.month}
                      </text>
                      <text
                        x={x}
                        y={y - 13}
                        textAnchor="middle"
                        fill="hsl(var(--background))"
                        fontSize="10"
                      >
                        ₹{d.value}
                      </text>
                    </g>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
        <div className="flex justify-between mt-2 px-2">
          {performanceData.map((d) => (
            <p key={d.month} className="text-xs text-muted-foreground">
              {d.month}
            </p>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div className="bg-card rounded-2xl ring-1 ring-border card-padding space-y-3">
        <h2 className="text-lg font-light tracking-tight text-foreground">Key Features</h2>
        <div className="space-y-3">
          {[
            { label: "Expense Ratio", value: "0.06%" },
            { label: "Min Investment", value: "₹100" },
            { label: "Exit Load", value: "Nil" },
            { label: "Risk", value: "Moderate" },
          ].map((item) => (
            <div key={item.label} className="flex justify-between py-2">
              <span className="text-sm text-muted-foreground">{item.label}</span>
              <span className="text-sm font-semibold text-foreground">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Button className="w-full rounded-xl py-6 text-base">
        Invest Now
      </Button>
    </div>
  );
}
