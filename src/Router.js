import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Home from './views/Home';
import Car from './views/Car';
import Profile from './views/Profile';
import NoMatch from './views/NoMatch';
import AllCars from './views/AllCars'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route exact path="/home" component={Home} />
      <Route exact path="/cars" component={AllCars} />
      <Route exact path="/cars/:car_id" component={Car} />
      <Route exact path="/profile/:id" component={Profile} />
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
