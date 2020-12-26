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
import Renamestore from "./pages/Store/Renamestore"
import Manageproduct from "./pages/Store/Manageproduct"
import Cart from "./pages/cart"
import ProductDetail from "./pages/product-detail"
import Myorder from "./pages/order/myorder";
import Manageorder from "./pages/order/manageorder";
import Cookies from 'universal-cookie';

export default function App() {
  
  
    const cookies = new Cookies();
    console.log(cookies.get('id_user'))

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
          <Route path="/product-detail/:id">
            <ProductDetail />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/cart">
            <Cart />
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
          <Route path="/store/rename">
            <Renamestore />
          </Route>
          <Route path="/store/manage">
            <Manageproduct />
          </Route>
          <Route path="/order/myorder">
            <Myorder />
          </Route>
          <Route path="/order/manageorder">
            <Manageorder />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
