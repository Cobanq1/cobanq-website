import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom";
import "./index.css";
import OnboardingRemittance from "./pages/OnboardingRemittance.jsx";

// Standalone entry: the CoPay onboarding deployed on its own (e.g. a
// Netlify Drop site), with the flow served at "/". A MemoryRouter keeps
// react-router's Link/useNavigate/useSearchParams working; any in-app
// link that points elsewhere on the site (terms, privacy, send-money)
// escapes to the main site instead.
const MAIN_SITE = "https://cobanq-preview.netlify.app";

function EscapeToMainSite() {
  const { pathname, search, hash } = useLocation();
  useEffect(() => {
    window.location.replace(`${MAIN_SITE}${pathname}${search}${hash}`);
  }, [pathname, search, hash]);
  return null;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Forward ?to=pk etc. from the real URL into the router. */}
    <MemoryRouter initialEntries={[`/onboarding/remittance${window.location.search}`]}>
      <Routes>
        <Route path="/onboarding/remittance" element={<OnboardingRemittance />} />
        <Route path="*" element={<EscapeToMainSite />} />
      </Routes>
    </MemoryRouter>
  </StrictMode>,
);
