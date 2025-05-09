import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "../pages/HomePage";
import NavBar from "../components/NavBar/NavBar";
import AboutPage from "../pages/AboutPage";
import Footer from "../components/Footer/Footer";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
