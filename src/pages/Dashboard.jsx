import "./Dashboard.css";
import CryptoItem from "../components/CryptoItem";
import { cryptos } from "../data/cryptos";
import { useState } from "react";
import AddCrypto from "../components/AddCrypto";
import CryptoSearch from "../components/CryptoSearch";
import ConfirmModal from "../components/ui/ConfirmModal";

export default function Dashboard() {
  //  const [username, setUsername] = useState("Facundo");
  const [cryptoName, setCryptoName] = useState("");
  const [cryptoList, setCryptoList] = useState(cryptos);
  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [cryptoToDelete, setCryptoToDelete] = useState(null);

  // const handleChangeUser = () => {
  //   setUsername("Juan");
  //   console.log(username);
  // };

  const handleCryptoAdded = (crypto) => {
    const fullCrypto = {
      ...crypto,
      id: Math.random(),
    };
    setCryptoList((prevCryptoList) => [fullCrypto, ...prevCryptoList]);
  };

  const filteredCryptos = cryptoList.filter((crypto) =>
    crypto.name.toLowerCase().includes(search.toLowerCase())
  );

  const balance = -2;

  const handleShowModal = (crypto) => {
    setCryptoToDelete(crypto);
    setShowModal(true);
  };

  const handleDeleteCrypto = (id) => {
    setCryptoList((prevCryptoList) =>
      prevCryptoList.filter((crypto) => crypto.id !== id)
    );
    setShowModal(false);
    setCryptoToDelete(null);
  };

  return (
    <main className="dashboard">
      <header className="header">
        <h1>CryptoVault</h1>
        <h2>Plataforma para gestionar criptos </h2>

        <div className="user-info">
          {/* <span>{username}</span> */}
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
        {cryptoName && (
          <p>
            La criptomoneda seleccionada es <b>{cryptoName}</b>
          </p>
        )}
        <CryptoSearch onSearchChange={setSearch} />
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
        <div className="card">
          <h3>Estado</h3>
          <p>
            {balance > 0
              ? "Tu portfolio está creciendo"
              : balance === 0
              ? "Tu poprtfolio está estable"
              : "Tu portfolio está perdiendo valor"}
          </p>
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
              <th>Seleccion de cripto</th>
              <th>Eliminar cripto</th>
            </tr>
          </thead>

          <tbody>
            {filteredCryptos.length > 0 ? (
              filteredCryptos.map((crypto) => {
                return (
                  <CryptoItem
                    key={crypto.id}
                    cryptoName={crypto.name}
                    symbol={crypto.symbol}
                    amount={crypto.amount}
                    value={crypto.value}
                    image={crypto.image}
                    onSelectCryptoName={setCryptoName}
                    onShowDeleteModal={() => handleShowModal(crypto)}
                  />
                );
              })
            ) : (
              <tr>
                <td colSpan="3">No se encontraron lecturas con ese nombre</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>

      <section className="actions">
        <button>Comprar</button>
        <button>Vender</button>
        <button>Mercado</button>
        {/* <button onClick={handleChangeUser}>Cambiar usuario</button> */}
      </section>
      <AddCrypto onCryptoAdded={handleCryptoAdded} />
      {showModal && (
        <ConfirmModal
          cryptoName={cryptoToDelete.name}
          onConfirm={() => handleDeleteCrypto(cryptoToDelete.id)}
          onCancel={() => setShowModal(false)}
        />
      )}
    </main>
  );
}
