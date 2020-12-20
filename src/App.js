import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Fashion from "./pages/productList/Fashion"
import Food from "./pages/productList/Food"
import ElectronicDevice from "./pages/productList/ElectronicDevice"
import Book from "./pages/productList/Book"
import Skincare from "./pages/productList/Skincare"

export default function App() {
  return (
    <Router>
      <div>
        <NavbarComponent />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/productlist/fashion">
            <Fashion />
          </Route>
          <Route path="/productlist/food">
            <Food />
          </Route>
          <Route path="/productlist/electronicdevice">
            <ElectronicDevice />
          </Route>
          <Route path="/productlist/book">
            <Book />
          </Route>
          <Route path="/productlist/skincare">
            <Skincare />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
