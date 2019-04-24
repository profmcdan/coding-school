import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import Header from "./components/common/Header";
import PageNotFound from "./components/PageNotFound";
import CoursesPage from "./components/courses/CoursesPage";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/courses" component={CoursesPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
