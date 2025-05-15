import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "../pages/HomePage";
import NavBar from "../components/NavBar/NavBar";
import AboutPage from "../pages/AboutPage";
import Footer from "../components/Footer/Footer";
import DestinationPage from "../pages/DestinationPage"; // ✅ corrected import

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/destinations/:destinationName"
            element={<DestinationPage />}
          />{" "}
          {/* dynamic route */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
