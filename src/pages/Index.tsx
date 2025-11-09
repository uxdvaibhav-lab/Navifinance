import { useState } from "react";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import UPIScreen from "../components/screens/UPIScreen";
import LoanScreen from "../components/screens/LoanScreen";
import InvestmentScreen from "../components/screens/InvestmentScreen";
import HealthScreen from "../components/screens/HealthScreen";
import ProfileDrawer from "../components/ProfileDrawer";
import FundDetailScreen from "../components/screens/FundDetailScreen";
import InvestmentDetailScreen from "../components/screens/InvestmentDetailScreen";
import TransactionHistoryScreen from "../components/screens/TransactionHistoryScreen";
import ScanPayDetailScreen from "../components/screens/ScanPayDetailScreen";
import PaymentScreen from "../components/screens/PaymentScreen";
import BalanceScreen from "../components/screens/BalanceScreen";

const Index = () => {
  const [activeTab, setActiveTab] = useState("upi");
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [showFundDetail, setShowFundDetail] = useState(false);
  const [showInvestmentDetail, setShowInvestmentDetail] = useState(false);
  const [showTransactionHistory, setShowTransactionHistory] = useState(false);
  const [showScanPayDetail, setShowScanPayDetail] = useState(false);
  const [showPaymentScreen, setShowPaymentScreen] = useState(false);
  const [paymentMode, setPaymentMode] = useState<"mobile" | "upi">("mobile");
  const [showBalanceScreen, setShowBalanceScreen] = useState(false);

  const isDetailScreen = showFundDetail || showInvestmentDetail || showTransactionHistory || showScanPayDetail || showPaymentScreen || showBalanceScreen;

  const renderScreen = () => {
    // Handle UPI detail screens
    if (activeTab === "upi") {
      if (showTransactionHistory) {
        return <TransactionHistoryScreen onBack={() => setShowTransactionHistory(false)} />;
      }
      if (showScanPayDetail) {
        return <ScanPayDetailScreen onBack={() => setShowScanPayDetail(false)} />;
      }
      if (showPaymentScreen) {
        return <PaymentScreen onBack={() => setShowPaymentScreen(false)} defaultMode={paymentMode} />;
      }
      if (showBalanceScreen) {
        return <BalanceScreen onBack={() => setShowBalanceScreen(false)} onHistoryClick={() => {
          setShowBalanceScreen(false);
          setShowTransactionHistory(true);
        }} />;
      }
      return (
        <UPIScreen
          onHistoryClick={() => setShowTransactionHistory(true)}
          onScanPayClick={() => setShowScanPayDetail(true)}
          onBalanceClick={() => setShowBalanceScreen(true)}
          onMobilePayClick={() => {
            setPaymentMode("mobile");
            setShowPaymentScreen(true);
          }}
          onUPIIdPayClick={() => {
            setPaymentMode("upi");
            setShowPaymentScreen(true);
          }}
        />
      );
    }

    // Handle Investment detail screens
    if (activeTab === "investment") {
      if (showFundDetail) {
        return <FundDetailScreen onBack={() => setShowFundDetail(false)} />;
      }
      if (showInvestmentDetail) {
        return <InvestmentDetailScreen onBack={() => setShowInvestmentDetail(false)} />;
      }
      return (
        <InvestmentScreen
          onFundClick={() => setShowFundDetail(true)}
          onInvestmentClick={() => setShowInvestmentDetail(true)}
        />
      );
    }

    switch (activeTab) {
      case "loan":
        return <LoanScreen />;
      case "health":
        return <HealthScreen />;
      default:
        return <UPIScreen onHistoryClick={() => setShowTransactionHistory(true)} onScanPayClick={() => setShowScanPayDetail(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      {!isDetailScreen && <Header onProfileClick={() => setIsProfileOpen(true)} />}
      
      <main className="animate-in fade-in slide-in-from-bottom-2 duration-300">
        {renderScreen()}
      </main>
      
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      
      <ProfileDrawer 
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
    </div>
  );
};

export default Index;
