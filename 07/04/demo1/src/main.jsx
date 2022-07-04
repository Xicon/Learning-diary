import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// apollo client
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

// apollo client
const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <ApolloProvider client={ client }>
        <App />
      </ApolloProvider>
    </React.StrictMode>,
);