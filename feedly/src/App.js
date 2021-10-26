import React from "react";
import { Route, Redirect, Switch,  BrowserRouter } from "react-router-dom";
import Landing from "./Landing";
import Article from "./Landing/Article";
import NewsList from "./Landing/NewsList";


const App = () => {
  return (
    <BrowserRouter>
    <div className="">
      <Landing />
      <div className="px-40">
        <Switch>
          <Route exact path="/newsList" component={NewsList} />
          <Route exact path="/news" component={Article}/>
          <Redirect from="/" to="/newsList" />
        </Switch>
      </div>
    </div>
    </BrowserRouter>
  );
};

export default App;

