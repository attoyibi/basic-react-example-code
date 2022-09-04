import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useAuth0 } from "@auth0/auth0-react";
import { createHttpLink } from "@apollo/client";

const auth0Domain = "dev-4o8ewg0o.us.auth0.com"; //domain yang di ambil dari auth0
const auth0ClientId = "JNRrYasvIVC1ssme1myjFykmuVVOFPu1"; //diambil dari auth0
const auth0Audience = "example-blog-hasura";

const hasuraUri = "https://fleet-silkworm-14.hasura.app/v1/graphql";

// This code ensures that the access token from Auth0 is passed into the headers of each
// request made by Apollo.  See:
// https://community.auth0.com/t/how-to-use-react-auth0-spa-with-graphql/30516/4

const AuthorizedApolloProvider = ({ children }) => {
  const { getAccessTokenSilently, isLoading, isAuthenticated, user } =
    useAuth0();
  console.log("user", user);

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    const httpLink = createHttpLink({
      uri: hasuraUri,
    });

    const authLink = setContext(async () => {
      if (isAuthenticated) {
        const token = await getAccessTokenSilently();
        return {
          headers: {
            Authorization: `Bearer ${token}`,
            "x-hasura-admin-secret":
              "nU5COF59xmHuILUdw0Y3qvKEYnkMSEU7UKgHA3y0fBE7Ny3akqvZusRNF8SiS2KE",
            // "x-hasura-role": "user",
          },
        };
      } else {
        return {};
      }
    });

    const apolloClient = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
      connectToDevTools: true,
    });

    return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
  }
};

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={auth0Domain}
      clientId={auth0ClientId}
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
      audience={auth0Audience}
    >
      <AuthorizedApolloProvider>
        <App />
      </AuthorizedApolloProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
