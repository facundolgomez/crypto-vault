import "./Dashboard.css";
import CryptoItem from "../components/CryptoItem";
import { cryptos } from "../data/cryptos";
import { useState } from "react";
import AddCrypto from "../components/AddCrypto";

export default function Dashboard() {
  const [username, setUsername] = useState("Facundo");
  const [cryptoName, setCryptoName] = useState("");

  const handleChangeUser = () => {
    setUsername("Juan");
    console.log(username);
  };

  const handleCryptoAdded = (crypto) => {
    const fullCrypto = {
      ...crypto,
      id: Math.random(),
    };
    console.log(fullCrypto);
  };
  return (
    <main className="dashboard">
      <header className="header">
        <h1>CryptoVault</h1>
        <h2>Plataforma para gestionar criptos </h2>

        <div className="user-info">
          <span>{username}</span>
          <img
            src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
            alt="Usuario"
          />
        </div>
      </header>

      <section className="hero">
        <h2>Bienvenido 👋</h2>
        <p>Administrá tu portfolio de criptomonedas.</p>
      </section>
      <section>
        <p>La criptomoenda selecionada es {cryptoName}</p>
      </section>
      <section className="summary">
        <div className="card">
          <h3>Portfolio</h3>
          <p>USD 15.850</p>
        </div>

        <div className="card">
          <h3>Balance</h3>
          <p>+6.42%</p>
        </div>

        <div className="card">
          <h3>Criptos</h3>
          <p>5</p>
        </div>
      </section>
      <section className="portfolio">
        <h2>Tus activos</h2>

        <table>
          <thead>
            <tr>
              <th>Moneda</th>
              <th>Cantidad</th>
              <th>Valor</th>
            </tr>
          </thead>

          <tbody>
            <CryptoItem
              cryptoName={cryptos[0].name}
              symbol={cryptos[0].symbol}
              amount={cryptos[0].amount}
              value={cryptos[0].value}
              image={cryptos[0].image}
              onSelectCryptoName={setCryptoName}
            />
            <CryptoItem
              cryptoName={cryptos[1].name}
              symbol={cryptos[1].symbol}
              amount={cryptos[1].amount}
              value={cryptos[1].value}
              image={cryptos[1].image}
              onSelectCryptoName={setCryptoName}
            />
            <CryptoItem
              cryptoName={cryptos[2].name}
              symbol={cryptos[2].symbol}
              amount={cryptos[2].amount}
              value={cryptos[2].value}
              image={cryptos[2].image}
              onSelectCryptoName={setCryptoName}
            />
            <CryptoItem
              cryptoName={cryptos[3].name}
              symbol={cryptos[3].symbol}
              amount={cryptos[3].amount}
              value={cryptos[3].value}
              image={cryptos[3].image}
              onSelectCryptoName={setCryptoName}
            />
          </tbody>
        </table>
      </section>

      <section className="actions">
        <button>Comprar</button>
        <button>Vender</button>
        <button>Mercado</button>
        <button onClick={handleChangeUser}>Cambiar usuario</button>
      </section>
      <AddCrypto onCryptoAdded={handleCryptoAdded} />
    </main>
  );
}
