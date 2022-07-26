import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './AppCopy';
import AppClass from 'AppClass';
import reportWebVitals from './reportWebVitals';
import client from './apollo-client';
import { ApolloProvider } from '@apollo/client';


ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App></App>
      {/* <App data="data dari index" /> */}
      {/* <AppClass data="data dari index" /> */}
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
