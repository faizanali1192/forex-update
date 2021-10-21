import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import Account from "./Pages/Account";
import Trading from "./Pages/Trading";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About";
import React from "react";
import {
  Switch,
  Route,
  Link
} from "react-router-dom"
import TermsAndConditions from "./Components/TermsAndConditions";
import PrivacyPolicy from "./Components/PrivacyPolicy";
function App() {
  return (
    <div className="conatiner-fluid ">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/accounts">
          <Account />
        </Route>
        <Route path="/trading">
          <Trading />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/terms-and-conditions">
          <TermsAndConditions />
        </Route>
        <Route path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
