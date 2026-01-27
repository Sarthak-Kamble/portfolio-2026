import "../App.css";
import "../index.css";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { selectPortfolioSlice } from "../portfolioSlice";
import HomeSection from "../sections/home/HomeSection";

function App() {
  const { theme } = useSelector(selectPortfolioSlice);

  return (
    <div
      className={`${theme === "Dark" ? `dark` : ``} appContainer items-center flex flex-col`}
    >
      <Navbar />
      <HomeSection />
    </div>
  );
}

export default App;
