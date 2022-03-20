import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Invoices from "./Invoices";
import Invoice from "./Invoice";
import SentInvoices from "./SentInvoices";

function App() {
  let navigate = useNavigate();
  const dataCustom = [1, 2, 3, 4, 5, 6];
  return (
    <div className="App">
      {/* setting up your routes */}
      <Routes>
        {/* hanya perlu dia baris ini untuk membuat basic route */}
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        {/* dari baris ini ke bawah itu nested route atau membuat halaman yang dinamis menggunakan routing */}
        <Route path="invoices" element={<Invoices />}>
          <Route path=":invoiceId" element={<Invoice />} />
          <Route path="sent" element={<SentInvoices />} />
        </Route>
        {/* /. dari baris ini ke atas itu nested route atau membuat halaman yang dinamis menggunakan routing */}
      </Routes>
      <h1>Welcome to basic route v6</h1>
      <h2>Basic Route</h2>
      <nav>
        <Link to="/about">About</Link>
      </nav>
      <h2>Nested Route/ Dynamic Route</h2>
      <nav>
        {dataCustom.map((value) => (
          <Link to={`/invoices/${value}`}>
            {/* <button className="button4">Analyse Receipt</button> */}
            <button>{value} </button>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default App;

function NotFound() {
  return <h1>Not Found</h1>;
}
