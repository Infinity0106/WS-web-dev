import React from "react";
import { Link, withRouter } from "react-router-dom";

class Menu extends React.Component {
  render() {
    if (window.location.pathname.includes("/app")) return null;

    return (
      <div>
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
        <br />
        <h6>React</h6>
        <Link to="/react/counter">counter</Link>
        <br />
        <h6>React social app</h6>
        <Link to="/app">social app</Link>
        <br />
      </div>
    );
  }
}

export default withRouter(Menu);
