import HeroSection from "./components/HeroSection";
import PlatformSection from "./components/PlatformSection";
// import OffersSection from "./components/OffersSection";
import BestSuitedForSection from "./components/BestSuitedForSection";
import TransformDataSection from "./components/TransformDataSection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <PlatformSection />
      {/* <OffersSection /> */}
      <BestSuitedForSection />
      <TransformDataSection />
    </main>
  );
};

export default Home;
