import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Business from "./pages/Business";
import Solutions from "./pages/Solutions";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Calculator from "./pages/Calculator";
import SendMoney from "./pages/SendMoney";
import Security from "./pages/Security";
import Country from "./pages/Country";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import Accessibility from "./pages/Accessibility";
import Complaints from "./pages/Complaints";
import Legal from "./pages/Legal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/business" element={<Business />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/send-money" element={<SendMoney />} />
          <Route path="/security" element={<Security />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<Press />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/terms" element={<Legal page="terms" />} />
          <Route path="/privacy" element={<Legal page="privacy" />} />
          <Route path="/cookies" element={<Legal page="cookies" />} />
          {/* Country landing pages — add more Route lines here as they're built */}
          <Route path="/pk" element={<Country slug="pk" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
