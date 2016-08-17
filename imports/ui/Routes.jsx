import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// route components
import App from './App.jsx';
import Recipe from './Recipe.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>

    <Route path="recipe" component={Recipe}/>
  </Router>
);
      // TODO: <Route path="*" component={NotFoundPage}/>