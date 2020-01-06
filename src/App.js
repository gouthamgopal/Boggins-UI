import "./loader";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import ImageDisplay from "./ImageDisplay";
import Home from "./Home";
import Train from "./Train";
import Blooper from "./Blooper";
import Model from "./Model";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div className="heading">Boggins AI</div>
          <div className="NavBar">
            <ul>
              <li className="navs">
                <Link className="active" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="navs">
                <Link to={"/training"}>Training</Link>
              </li>
              <li className="navs">
                <Link to={"/archive"}>Results</Link>
              </li>
              <li className="navs">
                <Link to={"/bloopers"}>Bloopers</Link>
              </li>
              <li className="navs">
                <Link to={"/evaluate"}>Try it Out</Link>
              </li>
            </ul>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/training" component={Model} />
            <Route path="/archive" component={ImageDisplay} />
            <Route exact path="/bloopers" component={Blooper} />
            <Route path="/evaluate" component={Train} />
          </Switch>
          {/* <div className="imageContainer">
            <ImageDisplay />
          </div> */}
        </div>
      </Router>
    );
  }
}

export default App;
