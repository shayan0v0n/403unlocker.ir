import FixedGithubIcon from "./components/FixedGithubIcon";
import HeroSection from "./components/HeroSection";
import ToolsSection from "./components/ToolsSection";
import BargozinSection from "./components/BargozinSection";
import Best403UnlockerSection from "./components/Best403UnlockerSection";
import FastDockerSection from "./components/FastDockerSection";
import Check403UnlockerSection from "./components/Check403UnlockerSection";
import SponsersSection from "./components/SponsersSection";

const Home = () => {
  return (
    <>
      <FixedGithubIcon />

      <div className="relative overflow-hidden">
        <HeroSection />
        <ToolsSection />
        <BargozinSection />
        {/* <Best403UnlockerSection /> */}
        {/* <FastDockerSection /> */}
        <Check403UnlockerSection />
        <SponsersSection />
      </div>
    </>
  );
};

export default Home;
