import React from "react";
import { Route, Redirect } from "react-router-dom/cjs/react-router-dom";

const ProtectedRoute = ({ children, isLoggedIn, ...props }) => {
  return (
    <Route props>
      {isLoggedIn ? <Redirect to="/profile" /> : <Redirect to="/" />}
    </Route>
  );
};

export default ProtectedRoute;
