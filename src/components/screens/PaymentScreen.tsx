import { useState } from "react";
import { ArrowLeft, User, CreditCard } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../../components/ui/alert-dialog";

interface PaymentScreenProps {
  onBack: () => void;
  defaultMode?: "mobile" | "upi";
}

const PaymentScreen = ({ onBack, defaultMode = "mobile" }: PaymentScreenProps) => {
  const [mode, setMode] = useState<"mobile" | "upi">(defaultMode);
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const validateMobile = (mobile: string) => {
    return /^[6-9]\d{9}$/.test(mobile);
  };

  const validateUPI = (upi: string) => {
    return /^[\w.-]+@[\w.-]+$/.test(upi);
  };

  const handlePayment = () => {
    if (!recipient || !amount) {
      toast.error("Please fill all fields");
      return;
    }

    if (mode === "mobile" && !validateMobile(recipient)) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    if (mode === "upi" && !validateUPI(recipient)) {
      toast.error("Please enter a valid UPI ID (e.g., user@bank)");
      return;
    }

    const amountNum = parseFloat(amount);
    if (isNaN(amountNum) || amountNum <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }

    setShowConfirmation(true);
  };

  const confirmPayment = () => {
    setShowConfirmation(false);
    toast.success(`Payment of ₹${amount} initiated successfully!`);
    setTimeout(() => {
      onBack();
    }, 2000);
  };

  const recentContacts = [
    { name: "Priya Sharma", id: "9876543210", avatar: "👤" },
    { name: "Rajesh Kumar", id: "9765432109", avatar: "👤" },
    { name: "Amit Patel", id: "9654321098", avatar: "👤" },
  ];

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
      <div className="px-4 pt-4 pb-4">
        <div className="mb-4">
          <button
            onClick={onBack}
            className="flex items-center icon-text-gap text-foreground active:scale-95 transition-transform"
          >
            <ArrowLeft className="icon-sm" strokeWidth={1.5} />
            <span className="text-sm font-medium">Back</span>
          </button>
        </div>

        {/* Mode Toggle */}
        <div className="flex icon-text-gap mt-4">
          <Button
            variant="outline"
            onClick={() => setMode("mobile")}
            className={`flex-1 icon-text-gap ${mode === "mobile" ? "border-primary" : ""}`}
          >
            <User className="icon-xs" />
            Mobile Number
          </Button>
          <Button
            variant="outline"
            onClick={() => setMode("upi")}
            className={`flex-1 icon-text-gap ${mode === "upi" ? "border-primary" : ""}`}
          >
            <CreditCard className="icon-xs" />
            UPI ID
          </Button>
        </div>
      </div>

      <div className="px-4 section-spacing mt-6">
        {/* Input Section */}
        <div className="bg-card rounded-xl p-4 shadow-sm border border-border section-spacing">
          <div className="space-y-2">
            <Label htmlFor="recipient">
              {mode === "mobile" ? "Mobile Number" : "UPI ID"}
            </Label>
            <Input
              id="recipient"
              placeholder={
                mode === "mobile" ? "Enter 10-digit mobile number" : "Enter UPI ID (e.g., user@bank)"
              }
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              maxLength={mode === "mobile" ? 10 : 50}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">Amount (₹)</Label>
            <Input
              id="amount"
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <Button onClick={handlePayment} className="w-full">
            Pay ₹{amount || "0"}
          </Button>
        </div>

        {/* Recent Contacts */}
        {mode === "mobile" && (
          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-muted-foreground">Recent Contacts</h2>
            <div className="space-y-2">
              {recentContacts.map((contact, index) => (
                <button
                  key={index}
                  onClick={() => setRecipient(contact.id)}
                  className="w-full bg-card rounded-xl p-4 flex items-center card-gap hover:bg-muted transition-colors border border-border"
                >
                  <div className="icon-xl bg-primary/10 rounded-full flex items-center justify-center text-xl">
                    {contact.avatar}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-medium text-foreground">{contact.name}</div>
                    <div className="text-sm text-muted-foreground">{contact.id}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Confirmation Dialog */}
      <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Payment</AlertDialogTitle>
            <AlertDialogDescription>
              <div className="space-y-2 py-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">To:</span>
                  <span className="font-medium text-foreground">{recipient}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Amount:</span>
                  <span className="font-medium text-foreground text-lg">₹{amount}</span>
                </div>
              </div>
              Proceed with this payment?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmPayment}>Confirm & Pay</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default PaymentScreen;
