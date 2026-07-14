import { useOutletContext } from "react-router-dom";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import Stats from "../components/Stats";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

export default function Home() {
  const { openGetStarted, openDemo } = useOutletContext();

  return (
    <>
      <Hero onWatchDemo={openDemo} />
      <TrustBar />
      <Stats />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA onGetStarted={openGetStarted} />
    </>
  );
}
