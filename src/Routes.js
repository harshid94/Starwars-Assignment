import React from "react";
import Login from "./Components/Login";
import SearchComponent from "./Components/SearchComponent";
import { Route } from "react-router-dom";

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/search" component={SearchComponent} />
    </div>
  );
};

export default Routes;
