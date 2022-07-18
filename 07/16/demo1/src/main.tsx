import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { Provider } from 'react-redux'

import { store } from './store'

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={ client }>
      <Provider store={ store }>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
)