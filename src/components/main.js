import React, { Component } from "react";
import Home from "./home";

import NavBar from "./navbar";
// import { connect } from 'react-redux';

import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import AboutUs from "./aboutus";
import ContactUs from "./contactus";

class Main extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/contactus" component={ContactUs} />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);
