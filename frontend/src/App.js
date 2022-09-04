import React from "react";
import { AuthStatus } from "./AuthStatus";
import { Token } from "./Token";
import { useQuery, useLazyQuery } from "@apollo/client";
import { GET_USER } from "./queries";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { getAccessTokenSilently, isLoading, isAuthenticated, user } =
    useAuth0();

  const { data, loading, error } = useQuery(GET_USER);
  console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <AuthStatus />
      </header>
      <main style={{ margin: "16px" }}>
        <h1>My Data</h1>
        {JSON.stringify(data)}
        <br></br>
        {JSON.stringify(user)}
      </main>
      <footer>
        <Token />
      </footer>
    </div>
  );
}

export default App;
