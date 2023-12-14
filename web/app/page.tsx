import type { NextPage } from "next";
import { HeroSection } from "@/components/home/Hero";
import { UseCasesSection } from "@/components/home/UseCases";
import { FeaturesSection } from "@/components/home/Features";
import { LoginPane } from "@/components/home/Login";

const Home: NextPage = () => {
  return (
    <div className="home">
      <HeroSection />
      <UseCasesSection />
      <FeaturesSection />
      <LoginPane />
    </div>
  );
};

export default Home;
