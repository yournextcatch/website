import { AuthProvider as OIDCAuthProvider } from "react-oidc-context";

const oidcConfig = {
  authority: "https://cognito-idp.us-west-1.amazonaws.com/us-west-1_jiqiW8fcm",
  client_id: "7p43nqold1iummeoaem2vvbkt9",
  redirect_uri: window.location.origin,
  post_logout_redirect_uri: "http://localhost:3000",
  response_type: "code",
  scope: "email openid phone", // You can add "phone" if needed, but start with these.
};

export default function AuthProvider({ children }) {
  return <OIDCAuthProvider {...oidcConfig}>{children}</OIDCAuthProvider>;
}
