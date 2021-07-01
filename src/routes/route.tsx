import React from 'react'

import {
  Redirect, BrowserRouter, Switch, Route,
} from 'react-router-dom'

import MainPage from '../components/pages/MainPage'

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/assets" component={MainPage} />

      <Redirect from="*" to="/assets" />
    </Switch>
  </BrowserRouter>
)
