import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Login from "./Login";

const PrivateRoute = ({ component, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  //AuthContextからcurrentUserを受け取る

  const Component = currentUser ? component : Login;
  //currentUserがtrueの場合component＝Home、falseならLoginコンポーネントにroute

  return <Route {...rest} component={Component} />;
};

export default PrivateRoute;
