import "./Dashboard.css";
import CryptoItem from "../components/CryptoItem";

export default function Dashboard() {
  const cryptos = [
    {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      amount: 0.15,
      value: 9750,
      change: 2.4,
    },
    {
      id: 2,
      name: "Ethereum",
      symbol: "ETH",
      amount: 1.8,
      value: 4500,
      change: -1.1,
    },
    {
      id: 3,
      name: "Solana",
      symbol: "SOL",
      amount: 20,
      value: 1600,
      change: 5.7,
    },
    {
      id: 4,
      name: "Cardano",
      symbol: "ADA",
      amount: 1500,
      value: 900,
      change: 0.8,
    },
  ];

  return (
    <main className="dashboard">
      <header className="header">
        <h1>CryptoVault</h1>
        <h2>Plataforma para gestionar criptos </h2>

        <div className="user-info">
          <span>Facundo</span>
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
            <tr>
              <td>Bitcoin</td>
              <td>0.15 BTC</td>
              <td>USD 9.750</td>
            </tr>

            <tr>
              <td>Ethereum</td>
              <td>1.8 ETH</td>
              <td>USD 4.500</td>
            </tr>

            <tr>
              <td>Solana</td>
              <td>20 SOL</td>
              <td>USD 1.600</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="actions">
        <button>Comprar</button>
        <button>Vender</button>
        <button>Mercado</button>
      </section>
      {/* <h2>Bienvenidos a CryptoItem</h2>
      <h3>Abajo de esta línea aparece el componente CryptoItem</h3>
      <CryptoItem
        cryptoName={cryptos[0].name}
        amount={cryptos[0].amount}
        value={cryptos[0].value}
      />
      <CryptoItem
        cryptoName={cryptos[1].name}
        amount={cryptos[1].amount}
        value={cryptos[1].value}
      />
      <CryptoItem
        cryptoName={cryptos[2].name}
        amount={cryptos[2].amount}
        value={cryptos[2].value}
      />
      <CryptoItem
        cryptoName={cryptos[3].name}
        amount={cryptos[3].amount}
        value={cryptos[3].value}
      /> */}
    </main>
  );
}
