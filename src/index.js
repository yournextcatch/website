import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App/App";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-west-1.amazonaws.com/us-west-1_jiqiW8fcm",
  client_id: "7p43nqold1iummeoaem2vvbkt9",
  redirect_uri: "https://younextcatch.com/",
  response_type: "code",
  scope: "phone openid email",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider {...cognitoAuthConfig}>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
