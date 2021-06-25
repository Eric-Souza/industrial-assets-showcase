import React from 'react'

import {
  Redirect, BrowserRouter, Switch, Route,
} from 'react-router-dom'

import AssetsPage from '../components/AssetsPage'
import CompaniesPage from '../components/CompaniesPage'
import UnitsPage from '../components/UnitsPage'
import UsersPage from '../components/UsersPage'

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/assets" component={AssetsPage} />
      <Route exact path="/users" component={UsersPage} />
      <Route exact path="/units" component={UnitsPage} />
      <Route exact path="/companies" component={CompaniesPage} />

      <Redirect from="*" to="/assets" />
    </Switch>
  </BrowserRouter>
)
