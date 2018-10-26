import React, { Component } from "react";
import AppNavigation from "./Router";


class App extends Component {

  render() {
    return (
      <AppNavigation ref="nav" />
    );
  }
}

export default App;
