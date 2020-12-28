import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ManageAccount from "./pages/admin/ManageAccount"
import ManageFee from "./pages/admin/ManageFee"
import ManageProduct from "./pages/seller/ManageProduct"
import ManageStore from "./pages/seller/ManageStore"
import SubmitFee from "./pages/seller/SubmitFee"
import CreateProduct from "./pages/seller/CreateProduct"
// import Renamestore from "./pages/Store/Renamestore"
// import Manageproduct from "./pages/Store/Manageproduct"
import Categorie from "./pages/categorie";
import Cart from "./pages/cart";
import Payment from "./pages/payment"
import ProductDetail from "./pages/product-detail"
import Myorder from "./pages/order/myorder";
import Manageorder from "./pages/order/manageorder";

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
          <Route path="/product-detail/:id">
            <ProductDetail />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/categorie/:id">
            <Categorie />
          </Route>
          <Route path="/admin/manage_account">
            <ManageAccount />
          </Route>
          <Route path="/admin/manage_fee">
            <ManageFee />
          </Route>

          <Route path="/seller/manage_store">
            <ManageStore />
          </Route>
          <Route path="/seller/manage_product">
            <ManageProduct />
          </Route>
          <Route path="/seller/submit_fee">
            <SubmitFee />
          </Route>
          <Route path="/seller/create_product">
            <CreateProduct />
          </Route>
          {/* <Route path="/store/rename">
            <Renamestore />
          </Route>
          <Route path="/store/manage">
            <Manageproduct />
          </Route> */}
          <Route path="/order/myorder">
            <Myorder />
          </Route>
          <Route path="/order/manageorder/:id">
            <Manageorder />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
