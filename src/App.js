import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { Details } from './pages/Details';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/items">
          <Search></Search>
        </Route>
        <Route exact path="/items/:id">
          <Details></Details>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
