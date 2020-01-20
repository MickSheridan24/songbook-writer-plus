import React, { Component } from 'react';
import SongPad from "./songpad/Songpad"
import "./index.css"
class App extends Component {
  render() {
    return (
      <div className="window">
        <SongPad></SongPad>
      </div>
    );
  }
}

export default App;
