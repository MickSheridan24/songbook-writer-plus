import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Workshop from "./components/Workshop/Workshop";
import LibraryContainer from "./components/Library/LibraryContainer";
import TOCContainer from "./components/BookTOC/TOCContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/song/1" component={Workshop} />
        <Route exact path="/library" component={LibraryContainer} />
        <Route exact path="/book/1" component={TOCContainer} />
      </div>
    );
  }
}

export default App;
