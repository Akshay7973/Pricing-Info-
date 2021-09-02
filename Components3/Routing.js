import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Pricing from './Pricing';
import Productinfo from './Productinfo';

class Routing extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path="/" component={Pricing} exact />
            <Route path="/productInfo" component={Productinfo} />
          </Switch>
      </Router>
    );
  }
}

export default Routing;
