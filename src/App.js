import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CourseMap from "./CourseMap";
import LyricClassifier from "./LyricClassifier";
import Simulation from "./Simulation";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  componentDidMount() {
    document.title = "Nathan Jenkins-Boale";
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <CourseMap />
        <Simulation />
        <LyricClassifier />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
