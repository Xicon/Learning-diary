import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import {Provider} from 'react-redux'
import {store} from './store/index'

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={ client }>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
)