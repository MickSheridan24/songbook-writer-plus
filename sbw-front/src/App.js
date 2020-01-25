import React, { Component } from 'react';
import Workshop from "./containers/Workshop"
import "./index.css"
class App extends Component {
  render() {
    return (
      <div className="window">
        <Workshop></Workshop>
      </div>
    );
  }
}

export default App;
