import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer"; 
import './styles/master.scss';
import News from "./pages/News"; 
import WhoWeAre from "./pages/WhoWeAre";
import OurInvestment from "./pages/OurInvestment";
import OurImpact from "./pages/OurImpact";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Home from "./pages/Home";
import MediaCenter from "./pages/MediaCenter";

const App = () => {
  return (
    <div>
      <Header />

      <main>
        <Routes>
          {/* Page Home */}
          <Route path="/" element={<Home />} />

          {/* Page Who we are */}
          <Route path="/who-we-are" element={<WhoWeAre />} />

          {/* Page Our Investment */}
          <Route path="/investment" element={<OurInvestment />} />

          {/* Page Our Impact */}
          <Route path="/impact" element={<OurImpact />} />

          {/* Page Media Center */}
          <Route path="/media" element={<MediaCenter/>} />

          {/* Page News */}
          <Route
            path="/media/news"
            element={<News />} 
          />

          {/* Page Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* Page Career */}
          <Route path="/career" element={<Career />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
