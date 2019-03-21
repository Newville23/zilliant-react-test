import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './github/store/index.js'
import '../node_modules/react-md/dist/react-md.deep_orange-blue.min.css'
import Layout from './github/containers/Layout'
import Repos from './github/containers/Repos'

class App extends Component {
  render () {
    return (
      <Provider store={configureStore}>
        <Layout>
          <Repos />
        </Layout>
      </Provider>
    )
  }
}

export default App
