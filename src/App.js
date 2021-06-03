import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import SearchHome from './components/SearchHome';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/'>
          <SearchHome />
        </Route>
      </Layout>
    );
  }
}
