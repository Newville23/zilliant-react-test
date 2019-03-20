import React, { Component } from 'react';

import '../node_modules/react-md/dist/react-md.deep_orange-blue.min.css';
import { GitHubStore } from './github/store';
import Layout from './github/components/Layout';
import Repos from './github/components/Repos';

class App extends Component {
  render () {
    return (
      <GitHubStore>
        <Layout>
          <Repos />
        </Layout>
      </GitHubStore>
    )
  }
}

export default App
