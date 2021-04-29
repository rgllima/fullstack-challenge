import React from 'react';
import { Switch, Route } from 'react-router';
import Admin from "../layouts/AdminLayout";

const Routes = () => (
  <>
    <Switch>
      <Route path="/"  component={Admin} />
    </Switch>
  </>
);

export default Routes;
