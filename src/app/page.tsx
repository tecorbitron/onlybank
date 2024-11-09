import Advantages from "@/components/Advantages";
import FinancialNeeds from "@/components/FinancialNeeds";
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
    </div>
  );
}
