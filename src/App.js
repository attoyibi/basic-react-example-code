//tempat untuk import semua component, hook, dan logic component
import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogutButton";
import { useAuth0 } from "@auth0/auth0-react";

export default function App() {
  //tempat logic dalam component digunakan
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    // semua hal dalam return akan di render
    <div>
      {/* membuat tombol login */}
      <LoginButton />
      {/* membuat tombol logut */}
      <LogoutButton />
      {/* jika telah melakukan login maka data dibawah akan di tambilkan, tapi jika belum maka isAuthenticated bernilai false, dan data tidak akan ditampilak */}
      {isAuthenticated && (
        <div>
          <img src={user?.picture} alt={user?.name} />
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>
        </div>
      )}
    </div>
  );
}
