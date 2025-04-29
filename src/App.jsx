import { useState } from "react";

import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicesPage";
import EventsPage from "./pages/EventsPage";
import ContactPage from "./pages/ContactusPage";
import MinistryPage from "./pages/MinistryPage";
import '@fontsource/inter';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/ministries" element={<MinistryPage />} />


            {/* <Route path="/ministries" element={<MinistriesPage />} />
            
            <Route
              path="/about/association"
              element={<AboutPageExplaination />}
            />
            <Route
              path="ministries/ministry-details"
              element={<MinistryExplaination />}
            /> */}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
