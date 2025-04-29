// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import HkiAnimatica from "./pages/HkiAnimatica";
import Skilling from "../src/pages/Skilling";
import EntertainmentPage from "../src/pages/EntertainmentPage";
import ContactUsPage from "../src/pages/ContactUsPage";
import CoursePage from "../src/pages/CoursePage";
import AdvertisementPage from "../src/pages/AdvertisementPage";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/common/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MediaAppPage from "./pages/MediaAppPage";
import Privacypolicy from "./pages/Privacypolicy";
import TopToBottom from "./components/common/TopToBottom";
import EventPage from "./pages/EventPage";

function App() {
  useEffect(() => {
    AOS.init({
      // once: true,
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
      <TopToBottom />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hki-animatica" element={<HkiAnimatica />} />
        {/* <Route path="/skilling" element={<Skilling />} /> */}
        <Route path="/entertainment" element={<EntertainmentPage />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/advertisement" element={<AdvertisementPage />} />
        <Route path="/media-matrix-app" element={<MediaAppPage />} />
        <Route path="/privacy-policy" element={<Privacypolicy />} />
        <Route path="/event" element={<EventPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
