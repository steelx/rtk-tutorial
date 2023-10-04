import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter, Route, Routes } from 'react-router-dom'

import getStore from '../src/store/store'

const withProvider = (Component, providedStore = getStore({})) => <Provider store={providedStore}>{Component}</Provider>
export const withRouter = (Component, path = '/') => (
  <HashRouter>
    <Routes>
      <Route path={path} element={Component} />
    </Routes>
  </HashRouter>
)

export default withProvider
