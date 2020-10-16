import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import InputTag from "./components/tutohtml/InputTag";
import ImgTag from "./components/tutohtml/ImgTag";
import VideoTag from "./components/tutohtml/VideoTag";
import HeaderTag from "./components/tutohtml/HeaderTag";
import ParagraphTag from "./components/tutohtml/ParagraphTag";
import IdSelector from "./components/tutocss/IdSelector";
import ElementSelector from "./components/tutocss/ElementSelector";
import ClassSelector from "./components/tutocss/ClassSelector";

export default function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome To The WebDev WorkShop</h1>
        <Link to="/">home</Link>
        <br />
        <h6>HTML</h6>
        <Link to="/headertags">header tags</Link>
        <br />
        <Link to="/paragraphtags">paragraph tags</Link>
        <br />
        <Link to="/imgtags">image tags</Link>
        <br />
        <Link to="/videotags">video tags</Link>
        <br />
        <Link to="/inputtags">input tags</Link>
        <br />
        <h6>CSS</h6>
        <Link to="/css/elementselector">element selector</Link>
        <br />
        <Link to="/css/idselector">id selector</Link>
        <br />
        <Link to="/css/classselector">class selector</Link>
      </div>
      <Switch>
        <Route path="/css/idselector" component={IdSelector} />
        <Route path="/css/elementselector" component={ElementSelector} />
        <Route path="/css/classselector" component={ClassSelector} />
        <Route path="/headertags" component={HeaderTag} />
        <Route path="/inputtags" component={InputTag} />
        <Route path="/imgtags" component={ImgTag} />
        <Route path="/videotags" component={VideoTag} />
        <Route path="/paragraphtags" component={ParagraphTag} />
      </Switch>
    </Router>
  );
}
