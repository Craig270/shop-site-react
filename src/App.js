import React from "react";
import Header from "./components/Header";
import Cart from "./components/pages/Cart";
import Photos from "./components/pages/Photos";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

// Old URL
// https://cdn.remixicon.com/releases/v2.1.0/remixicon.css

// New URL
// https://cdn.jsdelivr.net/npm/remixicon@2.3.0/fonts/remixicon.css
