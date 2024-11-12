import Advantages from "@/components/Advantages";
import BankConnected from "@/components/BankConnected";
import FinancialNeeds from "@/components/FinancialNeeds";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import OnlybankSupports from "@/components/OnlybankSupports";
import Statistics from "@/components/Statistics";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Statistics />
      <FinancialNeeds />
      <OnlybankSupports />
      <Advantages />
      <BankConnected />
      <Footer />
    </div>
  );
}
