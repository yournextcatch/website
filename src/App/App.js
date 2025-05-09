import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "../pages/HomePage";
import NavBar from "../components/NavBar/NavBar";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
