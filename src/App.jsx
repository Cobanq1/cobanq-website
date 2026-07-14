import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Stats from "./components/Stats";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import GetStartedModal from "./components/GetStartedModal";
import DemoModal from "./components/DemoModal";

function App() {
  const [getStartedOpen, setGetStartedOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onGetStarted={() => setGetStartedOpen(true)} />
      <main>
        <Hero onWatchDemo={() => setDemoOpen(true)} />
        <TrustBar />
        <Stats />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CTA onGetStarted={() => setGetStartedOpen(true)} />
      </main>
      <Footer />

      <GetStartedModal open={getStartedOpen} onClose={() => setGetStartedOpen(false)} />
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
}

export default App;
