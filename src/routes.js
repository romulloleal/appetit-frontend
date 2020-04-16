import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Orders from './pages/Orders';
import Closed from './pages/Orders/closed';
import Details from './pages/Orders/details';
import NewOrder from './pages/Sales';
import Feedback from './pages/Sales/feedback';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/orders" exact component={Orders} />
        <Route path="/closedorders" component={Closed} />
        <Route path="/orders/details/:idCustomer" component={Details} />
        <Route path="/neworder" component={NewOrder} />
        <Route path="/feedback" component={Feedback} />
      </Switch>
    </BrowserRouter>
  );
}