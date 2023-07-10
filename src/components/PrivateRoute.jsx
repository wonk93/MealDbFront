import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

export default function PrivateRoute({
  children,
  redirectTo = "/login"
}) {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <Navigate to={redirectTo} />;
  }

  return children; 
}

// import React, { useContext } from "react";
// import { Navigate } from "react-router-dom";
// import { AuthContext } from "../context/auth.context";

// export default function PrivateRoute({
//   children,
//   redirectTo = "/login"
// }) {
//   const { user, loading } = useContext(AuthContext);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   // ToDo: the next code is commented because of development reasons. Uncomment it to have authorization working again.
//   // if (!user) {
//   //   return <Navigate to={redirectTo} />;
//   // }

//   return children; 