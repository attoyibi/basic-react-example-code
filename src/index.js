import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-4o8ewg0o.us.auth0.com" // gantilah dengan domain yang ada pada  auth0 kalian. karena domain ini punyak orang lain
    clientId="JNRrYasvIVC1ssme1myjFykmuVVOFPu1" // gantilah pada cliendID yang ada pada auth0 kalian. karena client id ini punyak orang lain
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
