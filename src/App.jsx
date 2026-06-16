import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";
import FloatingHelp from "./components/FloatingHelp";

import Home from "./pages/Home";
import AboutVillage from "./pages/AboutVillage";
import Schemes from "./pages/Schemes";
import Hospitals from "./pages/Hospitals";
import Schools from "./pages/Schools";
import Emergency from "./pages/Emergency";
import Events from "./pages/Events";
import CitizenServices from "./pages/CitizenServices";
import Contact from "./pages/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [language, setLanguage] = useState("en");

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        language={language}
        setLanguage={setLanguage}
      />

      <main className="main-container">

        <Routes>

          <Route
            path="/"
            element={
              <Home language={language} />
            }
          />

          <Route
            path="/about-village"
            element={
              <AboutVillage language={language} />
            }
          />

          <Route
            path="/schemes"
            element={
              <Schemes language={language} />
            }
          />

          <Route
            path="/hospitals"
            element={
              <Hospitals language={language} />
            }
          />

          <Route
            path="/schools"
            element={
              <Schools language={language} />
            }
          />

          <Route
            path="/emergency"
            element={
              <Emergency language={language} />
            }
          />

          <Route
            path="/events"
            element={
              <Events language={language} />
            }
          />

          <Route
            path="/citizen-services"
            element={
              <CitizenServices
                language={language}
              />
            }
          />

          <Route
            path="/contact"
            element={
              <Contact language={language} />
            }
          />

        </Routes>

      </main>

      <Footer language={language} />

      <BottomNav language={language} />

      <FloatingHelp />

    </div>
  );
}

export default App;