import React from 'react'
import '../CSS/App.css';
import Header from './Header';
import Carousel from './Carousel';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import GstFiling from './GstFiling';
import Menu from './Menu';
import Fssai from './Fssai';
import Msme from './Msme';
import Ewaybill from './Ewaybill';
import BecomeAPartner from './BecomeAPartner';
import Pan from './Pan';





function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/gst-filing">
            <Header />
            <Menu />
            <GstFiling />
            <Header />
        </Route>

        <Route path="/fssai">
            <Header />
            <Menu />
            <Fssai />
            <Header />
        </Route>

        <Route path="/MSME">
            <Header />
            <Menu />
            <Msme />
            <Header />
        </Route>

        <Route path="/E-way-bill">
            <Header />
            <Menu />
            <Ewaybill />
            <Header />
        </Route>

        <Route path="/get-franchise">
            <Header />
            <Menu />
            <BecomeAPartner />
            <Header />
        </Route>

        <Route path="/PAN">
            <Header />
            <Menu />
            <Pan />
            <Header />
        </Route>

          <Route path="/">
            <Header />
            <Menu />
            <Carousel />
            <Home />
            <Header />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
