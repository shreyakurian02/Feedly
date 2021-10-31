import React from "react";
import { Route, Redirect, Switch,  BrowserRouter } from "react-router-dom";
import FilteredNews from "./components/Filter/FilteredNews";
// import Landing from "./Landing";
import Article from "./components/Landing/Article";
import NewsList from "./components/Landing/NewsList";
import Landing from "./components/Landing"
import { NewsFeeder } from "./contexts/newsFeeder";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorBoundaryPage from "./components/ErrorBoundary/ErrorBoundaryPage";


const App = () => {
  return (
    <BrowserRouter>
    <ErrorBoundary>
    <NewsFeeder>
    <div className="">
      <Landing />
      <div className="px-40">
        <Switch>
          <Route exact path="/newsList" component={NewsList} />
          <Route exact path="/news/:title" component={Article}/>
          <Route exact path="/filtered" component={FilteredNews}/>
          <Redirect from="/" to="/newsList" />
          <Route exact path="*"><ErrorBoundaryPage/></Route>
        </Switch>
      </div>
    </div>
    </NewsFeeder>
    </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;

