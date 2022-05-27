import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import SinglePost from './pages/SinglePost';
import { Switch } from 'react-router';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/:id" exact component={() => <SinglePost />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
