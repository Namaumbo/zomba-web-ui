import { lazy, Suspense } from "react";

import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import "@fontsource/inter";
import ScrollToTop from "./components/scroll-top";
import GalleryPage from "./pages/GalleryPage";
import ArticlesPage from "./pages/ArticlesPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import AssociationPage from "./pages/AssociationPage";
import DonatePage from "./pages/DonatePage";
import SermonsPage from "./pages/SermonsPage";
import MinistryDetailPage from "./pages/MinistryDetails";

function App() {
  const LandingPage = lazy(() => import("./pages/LandingPage"));
  const AboutPage = lazy(() => import("./pages/AboutPage"));
  const ServicePage = lazy(() => import("./pages/ServicesPage"));
  const EventsPage = lazy(() => import("./pages/EventsPage"));
  const ContactPage = lazy(() => import("./pages/ContactusPage"));
  const MinistryPage = lazy(() => import("./pages/MinistryPage"));
  const GalleryPage = lazy(() => import("./pages/GalleryPage"));

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />}>
            <Route
              path="/"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <LandingPage />
                </Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <AboutPage />
                </Suspense>
              }
            />
            <Route
              path="/services"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <ServicePage />
                </Suspense>
              }
            />
            <Route
              path="/events"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <EventsPage />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <ContactPage />
                </Suspense>
              }
            />
            <Route
              path="/ministries"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <MinistryPage />
                </Suspense>
              }
            />
            <Route
              path="/gallery"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <GalleryPage />
                </Suspense>
              }
            />
            <Route
              path="/articles"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <ArticlesPage />
                </Suspense>
              }
            />
            <Route
              path="/articles/:slug"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <ArticleDetailPage />
                </Suspense>
              }
            />
            <Route
              path="/about/association"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <AssociationPage />
                </Suspense>
              }
            />
            <Route
              path="/donate"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <DonatePage />
                </Suspense>
              }
            />
            <Route
              path="/sermons"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <SermonsPage />
                </Suspense>
              }
            />
            <Route
              path="/ministries/:slug"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <MinistryDetailPage />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
