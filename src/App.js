import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import ClassPack from "./pages/ClassPack";
import PurchasePreview from "./pages/PurchasePreview";
import Order from "./pages/Order";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/class" component={ClassPack} />
        <Route exact path="/preview/:id" component={PurchasePreview} />
        <Route exact path="/order" component={Order} />
        <Route exact path="/about-us" component={AboutUs} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
