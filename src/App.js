import React, { Component } from "react";
import "./App.css";
import JobDetails from "./components/JobDetails";

class App extends Component {
  render() {
    return (
      <div className="App">
        <JobDetails />
      </div>
    );
  }
}

export default App;
