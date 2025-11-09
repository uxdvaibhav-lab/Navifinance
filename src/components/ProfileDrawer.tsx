import { X, User, QrCode, CreditCard, Coins, Settings, MessageCircle, ScrollText, FileText, Info, LogOut, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProfileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileDrawer({ isOpen, onClose }: ProfileDrawerProps) {
  if (!isOpen) return null;

  const menuSections = [
    {
      title: "Account",
      items: [
        { icon: User, label: "Profile details", sublabel: "+91 98765 43210" },
        { icon: QrCode, label: "My QR & UPI ID", sublabel: "view your payment details" },
      ],
    },
    {
      title: "Payment Methods",
      items: [
        { icon: CreditCard, label: "Bank accounts", sublabel: "2 linked" },
        { icon: CreditCard, label: "Credit line", sublabel: "Manage credit" },
        { icon: CreditCard, label: "RuPay card", sublabel: "Not linked" },
      ],
    },
    {
      title: "Rewards",
      items: [
        { icon: Coins, label: "Navi Coins", sublabel: "1,250 coins available" },
      ],
    },
    {
      title: "Settings",
      items: [
        { icon: Settings, label: "App settings" },
        { icon: MessageCircle, label: "Communication preferences" },
      ],
    },
    {
      title: "About",
      items: [
        { icon: FileText, label: "Privacy Policy" },
        { icon: ScrollText, label: "Terms & Conditions" },
        { icon: Info, label: "About Us" },
      ],
    },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 left-0 w-full max-w-sm bg-neutral-100 z-50 animate-in slide-in-from-left duration-300 overflow-y-auto">
        <div className="p-4 space-y-4">
          {/* Close button */}
          <button
            onClick={onClose}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-muted text-foreground active:scale-95 transition-all"
          >
            <X className="w-[18px] h-[18px]" strokeWidth={1.5} />
          </button>

          {/* Menu Sections */}
          {menuSections.map((section) => (
            <div key={section.title} className="space-y-2">
              <h3 className="text-xs font-medium text-neutral-500 uppercase tracking-wide px-2">
                {section.title}
              </h3>
              <div className="bg-white rounded-2xl ring-1 ring-neutral-200 overflow-hidden">
                {section.items.map((item, index) => (
                  <button
                    key={item.label}
                    className={`w-full flex items-center justify-between p-4 active:bg-neutral-50 transition-colors ${
                      index !== section.items.length - 1 ? "border-b border-neutral-200" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-neutral-500" strokeWidth={1.5} />
                      <div className="text-left">
                        <p className="text-sm font-medium text-neutral-900">{item.label}</p>
                        {item.sublabel && (
                          <p className="text-xs text-neutral-600">{item.sublabel}</p>
                        )}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-neutral-500" strokeWidth={1.5} />
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* Logout Button */}
          <button
            onClick={onClose}
            className="w-full bg-red-600 text-white rounded-xl px-4 py-3 text-sm font-medium flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
          >
            <LogOut className="w-5 h-5" strokeWidth={1.5} />
            Log out
          </button>
        </div>
      </div>
    </>
  );
}
