import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"
import { MegaSena } from "./MegaSena";

class App extends React.Component {
  
  render() {
    return (
      <div className="centered-div">
        <div className="col-md-8">
        <MegaSena />
        </div>
        </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"))
