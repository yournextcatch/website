// import { Routes, Route } from "react-router-dom";
// import { useAuth } from "react-oidc-context";
// import "./App.css";

// import HomePage from "../pages/HomePage";
// import AboutPage from "../pages/AboutPage";
// import DestinationPage from "../pages/DestinationPage";

// import NavBar from "../components/NavBar/NavBar";
// import Footer from "../components/Footer/Footer";

// function App() {
//   const auth = useAuth();

//   const signOutRedirect = () => {
//     const clientId = "7p43nqold1iummeoaem2vvbkt9";
//     const logoutUri = window.location.origin;
//     const cognitoDomain = "https://<your-user-pool-domain>"; // <-- Replace this
//     window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(
//       logoutUri
//     )}`;
//   };

//   if (auth.isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (auth.error) {
//     return <div>Error: {auth.error.message}</div>;
//   }

//   return (
//     <div className="App">
//       <NavBar
//         isAuthenticated={auth.isAuthenticated}
//         user={auth.user}
//         onLogin={() => auth.signinRedirect()}
//         onLogout={() => signOutRedirect()}
//       />
//       <div className="main-content">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route
//             path="/destinations/:destinationName"
//             element={<DestinationPage />}
//           />
//         </Routes>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import { useAuth } from "react-oidc-context";
import "./App.css";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import DestinationPage from "../pages/DestinationPage";

import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

function App() {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = "7p43nqold1iummeoaem2vvbkt9";
    const logoutUri = window.location.origin;
    const cognitoDomain = "https://<your-user-pool-domain>"; // <-- Replace this
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(
      logoutUri
    )}`;
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Error: {auth.error.message}</div>;
  }

  return (
    <div className="App">
      <NavBar
        isAuthenticated={auth.isAuthenticated}
        user={auth.user}
        onLogin={() => auth.signinRedirect()}
        onLogout={() => signOutRedirect()}
      />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/destinations/:destinationName"
            element={<DestinationPage />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
