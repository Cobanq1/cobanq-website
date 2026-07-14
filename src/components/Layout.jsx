import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DemoModal from "./DemoModal";
import { site } from "../content";

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
  const [demoOpen, setDemoOpen] = useState(false);

  const context = {
    // Sends people straight to the live sign up / log in flow.
    openGetStarted: () => {
      window.location.href = site.onboardingUrl;
    },
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

      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
}
