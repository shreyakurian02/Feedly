import React from "react";
import { Route, Redirect, Switch,  BrowserRouter } from "react-router-dom";
import FilteredNews from "./components/Filter/FilteredNews";
// import Landing from "./Landing";
import Article from "./components/Landing/Article";
import NewsList from "./components/Landing/NewsList";
import Landing from "./components/Landing"
import { NewsFeeder } from "./contexts/newsFeeder";


const App = () => {
  return (
    <BrowserRouter>
    <NewsFeeder>
    <div className="">
      <Landing />
      <div className="px-40">
        <Switch>
          <Route exact path="/newsList" component={NewsList} />
          <Route exact path="/news/:title" component={Article}/>
          <Route exact path="/filtered" component={FilteredNews}/>
          <Redirect from="/" to="/newsList" />
        </Switch>
      </div>
    </div>
    </NewsFeeder>
    </BrowserRouter>
  );
};

export default App;

