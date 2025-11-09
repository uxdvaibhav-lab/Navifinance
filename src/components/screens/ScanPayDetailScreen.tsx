import { ArrowLeft, ScanLine, QrCode, Camera, Upload, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface ScanPayDetailScreenProps {
  onBack: () => void;
}

export default function ScanPayDetailScreen({ onBack }: ScanPayDetailScreenProps) {
  const [showScanner, setShowScanner] = useState(false);
  const [scanning, setScanning] = useState(false);

  const handleScanQR = () => {
    setShowScanner(true);
    setScanning(true);
    
    // Simulate QR detection after 2 seconds
    setTimeout(() => {
      setScanning(false);
      setShowScanner(false);
      toast.success("QR Code detected! Redirecting to payment...");
    }, 2000);
  };

  const handleUploadQR = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        toast.loading("Processing QR code...");
        setTimeout(() => {
          toast.success("QR Code processed! Payment details extracted.");
        }, 1500);
      }
    };
    input.click();
  };

  const handleRecentScanClick = (merchant: string, amount: string) => {
    toast.success(`Opening payment for ${merchant} - ${amount}`);
  };

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

      {/* Scan Options */}
      <div className="bg-card rounded-2xl ring-1 ring-border card-padding section-spacing">
        <h1 className="text-2xl font-light tracking-tight text-foreground">Scan & Pay</h1>
        <p className="text-sm text-muted-foreground">Scan any UPI QR code to make instant payments</p>

        <div className="space-y-3 mt-6">
          {/* Scan QR */}
          <button onClick={handleScanQR} className="w-full flex items-center section-gap p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 ring-1 ring-primary/30 active:scale-[0.98] transition-transform">
            <div className="icon-2xl rounded-full bg-primary flex items-center justify-center">
              <ScanLine className="icon-md text-white" strokeWidth={1.5} />
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-base font-semibold text-foreground">Scan QR Code</h3>
              <p className="text-sm text-muted-foreground">Use camera to scan</p>
            </div>
          </button>

          {/* Upload QR */}
          <button onClick={handleUploadQR} className="w-full flex items-center section-gap p-4 rounded-xl bg-muted ring-1 ring-border active:scale-[0.98] transition-transform">
            <div className="icon-2xl rounded-full bg-foreground flex items-center justify-center">
              <Upload className="icon-md text-background" strokeWidth={1.5} />
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-base font-semibold text-foreground">Upload QR Code</h3>
              <p className="text-sm text-muted-foreground">Select from gallery</p>
            </div>
          </button>
        </div>
      </div>

      {/* My QR Code */}
      <div className="bg-card rounded-2xl ring-1 ring-border card-padding section-spacing">
        <h2 className="text-lg font-light tracking-tight text-foreground">Receive Payment</h2>
        
        <div className="flex flex-col items-center py-6">
          <div className="w-48 h-48 bg-muted rounded-2xl flex items-center justify-center mb-4">
            <QrCode className="w-32 h-32 text-muted-foreground" strokeWidth={1} />
          </div>
          <p className="text-sm text-muted-foreground text-center mb-4">
            Show this QR code to receive payments
          </p>
          <div className="flex card-gap">
            <Button variant="outline" className="icon-text-gap">
              <Camera className="icon-xs" strokeWidth={1.5} />
              Save
            </Button>
            <Button variant="outline" className="icon-text-gap">
              <Upload className="icon-xs" strokeWidth={1.5} />
              Share
            </Button>
          </div>
        </div>
      </div>

      {/* Recent Scans */}
      <div className="bg-card rounded-2xl ring-1 ring-border card-padding space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-light tracking-tight text-foreground">Recent Scans</h2>
          <button className="text-sm text-primary font-medium">View All</button>
        </div>
        
        <div className="space-y-2">
          {[
            { name: "Coffee Shop", time: "2 hours ago", amount: "₹250" },
            { name: "Grocery Store", time: "Yesterday", amount: "₹1,200" },
            { name: "Restaurant", time: "2 days ago", amount: "₹850" },
          ].map((scan, idx) => (
            <button
              key={idx}
              onClick={() => handleRecentScanClick(scan.name, scan.amount)}
              className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-muted active:scale-[0.98] transition-all"
            >
              <div className="flex items-center card-gap">
                <div className="icon-xl rounded-full bg-primary/10 flex items-center justify-center">
                  <History className="icon-sm text-primary" strokeWidth={1.5} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-foreground">{scan.name}</p>
                  <p className="text-xs text-muted-foreground">{scan.time}</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-foreground">{scan.amount}</p>
            </button>
          ))}
        </div>
      </div>

      {/* QR Scanner Modal */}
      <AlertDialog open={showScanner} onOpenChange={setShowScanner}>
        <AlertDialogContent className="max-w-sm">
          <AlertDialogHeader>
            <AlertDialogTitle>Scanning QR Code</AlertDialogTitle>
            <AlertDialogDescription asChild>
              <div className="section-spacing">
                <div className="relative aspect-square bg-neutral-900 rounded-lg overflow-hidden flex items-center justify-center">
                  {scanning ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-48 h-48 border-4 border-white/30 rounded-lg relative">
                        <div className="absolute inset-0 border-t-4 border-primary animate-pulse" />
                        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary/50 animate-pulse" />
                      </div>
                    </div>
                  ) : (
                    <div className="text-white text-center">
                      <Camera className="h-16 w-16 mx-auto mb-2 opacity-50" />
                      <p className="text-sm opacity-70">Position QR code within frame</p>
                    </div>
                  )}
                </div>
                {scanning && (
                  <p className="text-center text-sm text-muted-foreground">
                    Detecting QR code...
                  </p>
                )}
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
