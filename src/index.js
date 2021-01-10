import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./index.scss";

import SignIn from "./component/connection/SignIn";
import SignUp from "./component/connection/SignUp";
import Home from "./component/home/Home";
import Game from "./component/game/Game";

function Janken() {
  console.log("test");

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/home" exact component={Home} />
        <Route path="/game" exact component={Game} />
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<Janken />, document.getElementById("root"));
