import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GetStartedModal from "./GetStartedModal";
import DemoModal from "./DemoModal";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function Layout() {
  const [getStartedOpen, setGetStartedOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  const context = {
    openGetStarted: () => setGetStartedOpen(true),
    openDemo: () => setDemoOpen(true),
  };

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navbar onGetStarted={context.openGetStarted} />
      <main>
        <Outlet context={context} />
      </main>
      <Footer />

      <GetStartedModal open={getStartedOpen} onClose={() => setGetStartedOpen(false)} />
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
}
