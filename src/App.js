import logo from "./logo.svg";
import "./App.css";
import react, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    console.log("fetching data");
    //letak dari kita pasang axios
    axios
      .get(" https://pokeapi.co/api/v2/pokemon/ditto")
      .then((res) => {
        console.log(res.data.abilities[0].ability.name);
        setData(res.data.abilities[0].ability.name);
      })
      .catch((err) => {
        console.log(err);
        console.log("Data Pokemon gak ketemu");
        setError("Data Pokemon gak ketemu");
      });
  }, []);
  return (
    <div className="App">
      <h3>{data}</h3>
      <h3>{error}</h3>
    </div>
  );
}

export default App;
