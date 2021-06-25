import React from 'react'

import {
  Redirect, BrowserRouter, Switch, Route,
} from 'react-router-dom'

import MainPage from '../components/MainPage'

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainPage} />

      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
)
