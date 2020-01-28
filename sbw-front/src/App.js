import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Library from "./containers/Library"
import Book from "./containers/Book"
import Workshop from "./containers/Workshop"
import "./index.css"
class App extends Component {
  render() {
    return (
      <div className="window">
        <Switch>
          <Route exact path="/books" component={Library} />
          <Route exact path="/book/:id" component={Book} />
          <Route exact path="/song/:id" component={Workshop} />
        </Switch>
      </div>
    );
  }
}

export default App;
