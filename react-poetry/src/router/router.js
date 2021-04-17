import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Seting from "../pages/seting/Seting";
import Home from "../pages/home/Home";
class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Switch>
          <Route exact path="/" render={() => (
    <Redirect to="/home"/>
)}/>
            <Route
              path="/home"
              component={Home}
            //   render={() => (
            //     <Home>
            //       <Switch>
            //         <Route path="/home/Index" component={Index}></Route>
            //       </Switch>
            //     </Home>
            //   )}
            ></Route>
            <Route path="/Seting" component={Seting}></Route>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default Router;
