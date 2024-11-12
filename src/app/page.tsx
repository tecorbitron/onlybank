import Advantages from "@/components/Advantages";
import BankConnected from "@/components/BankConnected";
import FinancialNeeds from "@/components/FinancialNeeds";
import HeroSection from "@/components/HeroSection";
import OnlybankSupports from "@/components/OnlybankSupports";
import Statistics from "@/components/Statistics";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Statistics />
      <FinancialNeeds />
      <OnlybankSupports />
      <Advantages />
      <BankConnected />
    </div>
  );
}
