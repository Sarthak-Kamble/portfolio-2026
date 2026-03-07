import "../App.css";
import "../index.css";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { selectPortfolioSlice } from "../portfolioSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeSection from "../sections/home/HomeSection";
import Projects from "../sections/project/Projects";
import Contact from "../sections/contact/Contact";

function App() {
  const { theme } = useSelector(selectPortfolioSlice);

  return (
    <Router>
      <div
        className={`${theme === "Dark" ? `bg-dark` : `bg-primary`} appContainer min-h-screen items-center flex flex-col`}
      >
        <Navbar />
        <div
          className={`componentContainer ${theme === "Dark" ? `border-neutral-500/40` : `border-neutral-200`} w-full flex-1 flex flex-col transition-colors duration-500`}
        >
          <Routes>
            <Route path="/" element={<HomeSection />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
