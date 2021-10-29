import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import Details from "./Components/Details/Details";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/checkout/:id" exact component={Products} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/details/:id" component={Details} />
          <Route>404 Not Found!</Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
