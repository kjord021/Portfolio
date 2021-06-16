import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';

import './custom.css'
import { LinkShortner } from './components/LinkShortner';
import {UniqueCodes} from './components/UniqueCodes';
import {KylesNotePad} from './components/KylesNotePad'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/LinkShortner' component={LinkShortner} />
        <Route exact path='/Notepad' component={KylesNotePad} />
        <Route exact path='/UniqueCodes' component={UniqueCodes} />
      </Layout>
    );
  }
}
