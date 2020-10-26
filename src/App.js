import React from "react";
import "./styles.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// imports for tutorail
import InputTag from "./components/tutohtml/InputTag";
import ImgTag from "./components/tutohtml/ImgTag";
import VideoTag from "./components/tutohtml/VideoTag";
import HeaderTag from "./components/tutohtml/HeaderTag";
import ParagraphTag from "./components/tutohtml/ParagraphTag";
import IdSelector from "./components/tutocss/IdSelector";
import ElementSelector from "./components/tutocss/ElementSelector";
import ClassSelector from "./components/tutocss/ClassSelector";
import ReactiveCounter from "./components/reactivecounter";

import Menu from "./components/menu";

// imports for app
import NavMenu from "./components/NavMenu";
import AppFeed from "./components/AppFeed";
import AddPost from "./components/AddPost";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <NavMenu />
      </div>
      <Switch>
        <Route path="/app/post/:id?/:edit?" component={AddPost} />
        <Route path="/app" component={AppFeed} />
        <Route path="/react/counter" component={ReactiveCounter} />
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
