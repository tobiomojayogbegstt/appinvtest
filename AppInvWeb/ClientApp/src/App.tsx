import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import RegisterApp from './components/RegisterApp/RegisterApp';

import './custom.css'

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/register' component={RegisterApp} />
    </Layout>
);
