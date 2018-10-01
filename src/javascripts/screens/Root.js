import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from 'javascripts/components/UI/Header';

import ScreenHome from 'javascripts/screens/Main/Home';
import ScreenContactUs from 'javascripts/screens/Main/ContactUs';

class ScreensRoot extends Component {
  render() {
    return (
      <div className="Root">
        <Header />
        <Switch>
          <Route exact path="/home" component={ScreenHome} />
          <Route path="/contact" component={ScreenContactUs} />
        </Switch>
      </div>
    );
  }
}

export default ScreensRoot;
