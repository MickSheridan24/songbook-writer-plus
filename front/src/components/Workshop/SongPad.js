import React from "react";
import ReactQuill from "react-quill";

function SongPad(props) {
  return <ReactQuill value={this.state.text} onChange={this.handleChange} />;
}

export default SongPad;
