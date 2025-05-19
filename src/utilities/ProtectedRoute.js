// import { Navigate } from "react-router-dom";
// import { useAuth } from "react-oidc-context";

// export default function AuthCheck({ children }) {
//   const auth = useAuth();

//   if (auth.isLoading) {
//     return <div>Loading...</div>;
//   }
//   if (auth.error) {
//     return <div>Error: {auth.error.message}</div>;
//   }
//   if (!auth.isAuthenticated) {
//     return <Navigate to="/" />;
//   }

//   return children;
// }

import { Navigate } from "react-router-dom";
import { useAuth } from "react-oidc-context";

export default function ProtectedRoute({ children, requiredGroup = null }) {
  const auth = useAuth();

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Error: {auth.error.message}</div>;
  }

  if (!auth.isAuthenticated) {
    return <Navigate to="/" />;
  }

  // Check for Cognito user groups
  const userGroups = auth.user?.profile?.["cognito:groups"] || [];

  if (requiredGroup && !userGroups.includes(requiredGroup)) {
    return <div>Unauthorized: You do not have access to this page.</div>;
  }

  return children;
}
