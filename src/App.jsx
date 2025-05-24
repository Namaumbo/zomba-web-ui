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
import "@fontsource/inter";
import ScrollToTop from "./components/scroll-top";
import GalleryPage from "./pages/GalleryPage";
import ArticlesPage from "./pages/ArticlesPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import AssociationPage from "./pages/AssociationPage";
import DonatePage from "./pages/DonatePage";
function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/ministries" element={<MinistryPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/articles/:slug" element={<ArticleDetailPage />} />
            <Route path="/about/association" element={<AssociationPage />} />
            <Route path="/donate" element={<DonatePage />} />

            {/* 
            
           
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
