
import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/Header";
import OrderForm from "./components/OrderForm";
import "./style.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return (
      <div className="login-container">
        <h1>Kalid New App</h1>
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Lakkoofsa Bilbilaa"
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
        />
        <br /><br />

        <button onClick={() => setLoggedIn(true)}>
          Seeni
        </button>

        <Analytics />
      </div>
    );
  }

  return (
    <div>
      <Header />

      <h1>Kalid New App</h1>

      <p>Kalid Jibril Metal & Wood Work</p>

      <OrderForm />

      <Analytics />
    </div>
  );
}

export default App;
