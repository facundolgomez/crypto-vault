import "./Dashboard.css";

import { cryptos } from "../data/cryptos";
import { useState, useEffect } from "react";
import AddCrypto from "../components/AddCrypto";

import { useNavigate, Route, Routes, data } from "react-router";
import DashboardHome from "./DashboardHome";
import CryptoDetails from "../components/CryptoDetails";

export default function Dashboard({ setIsLoggedIn }) {
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
    fetch("http://localhost:3000/cryptos", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(crypto),
    })
      .then((res) =>
        res.json().then((data) => {
          setCryptoList((prev) => [data, ...prev]);
        })
      )
      .catch((err) => console.log(err));
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
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  const handleGoToAddCrypto = () => {
    navigate("/dashboard/add-crypto", { replace: true });
  };
  useEffect(() => {
    fetch("http://localhost:3000/cryptos").then((res) =>
      res
        .json()
        .then((data) => setCryptoList(data))
        .catch((err) => console.log(err))
    );
  }, []);
  return (
    <main className="dashboard">
      <header className="header">
        <h1>CryptoVault</h1>
        <h2>Plataforma para gestionar criptos </h2>
        <div className="user-info">
          <img
            src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
            alt="Usuario"
          />

          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      </header>

      <Routes>
        <Route
          index
          element={
            <DashboardHome
              cryptoName={cryptoName}
              filteredCryptos={filteredCryptos}
              balance={balance}
              onSearchChange={setSearch}
              onSelectCryptoName={setCryptoName}
              onShowDeleteModal={handleShowModal}
              onCryptoAdded={handleCryptoAdded}
              showModal={showModal}
              cryptoToDelete={cryptoToDelete}
              onConfirmDelete={() => handleDeleteCrypto(cryptoToDelete.id)}
              onCancelModal={() => setShowModal(false)}
              onGoToAddCrypto={handleGoToAddCrypto}
            />
          }
        />
        <Route
          path="add-crypto"
          element={<AddCrypto onCryptoAdded={handleCryptoAdded} />}
        />
        <Route path=":id" element={<CryptoDetails />} />
      </Routes>
    </main>
  );
}
