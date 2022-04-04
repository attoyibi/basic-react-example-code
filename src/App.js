import logo from "./logo.svg";
import "./App.css";
import react, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      console.log("fetching data");
      //letak dari kita pasang axios

      try {
        const data = await axios
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
        //set time out untuk menunjukkan proses loading, tapi kalau datanya banyak gak perlu di set time out
        setTimeout(() => {
          setLoading(true);
        }, 1000);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      {loading ? data : <Spinner animation="border" />}

      <h3>{error}</h3>
    </div>
  );
}

export default App;
