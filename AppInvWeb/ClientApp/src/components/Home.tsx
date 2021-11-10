import * as React from 'react';
import { connect } from 'react-redux';

const Home = () => (
  <div>
    <h1>Register your app in the Application Inventory</h1>
    <p><a href="/Register">Register...</a></p>
  </div>
);

export default connect()(Home);
