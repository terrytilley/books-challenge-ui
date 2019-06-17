import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import HomePage from './pages/Home';
import BookPage from './pages/Book';
import Notfound from './pages/NotFound';
import Navbar from './components/Navbar';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/book/:id" component={BookPage} exact />
      <Route component={Notfound} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
