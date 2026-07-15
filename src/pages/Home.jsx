import { useOutletContext } from "react-router-dom";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import PlatformsMarquee from "../components/PlatformsMarquee";
import UseCaseSlider from "../components/UseCaseSlider";
import Stats from "../components/Stats";
import Features from "../components/Features";
import DashboardPreview from "../components/DashboardPreview";
import AudienceTabs from "../components/AudienceTabs";
import HowItWorks from "../components/HowItWorks";
import CountryCarousel from "../components/CountryCarousel";
import CustomerStories from "../components/CustomerStories";
import CTA from "../components/CTA";

export default function Home() {
  const { openGetStarted, openDemo } = useOutletContext();

  return (
    <>
      <Hero onWatchDemo={openDemo} />
      <TrustBar />
      <PlatformsMarquee />
      <UseCaseSlider />
      <Stats />
      <Features />
      <DashboardPreview />
      <AudienceTabs />
      <HowItWorks />
      <CountryCarousel />
      <CustomerStories />
      <CTA onGetStarted={openGetStarted} />
    </>
  );
}
