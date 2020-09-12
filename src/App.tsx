import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductPage from './components/pages/ProductPage';
import HomePage from './components/pages/Homepage';
import Login from './components/pages/Login';

const App = () => (
  <Router>
    <Switch>
      <Route path="/products" component={ProductPage} exact />
      <Route path="/home" component={HomePage} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/" component={Login} exact />
    </Switch>
  </Router>
);

export default App;
