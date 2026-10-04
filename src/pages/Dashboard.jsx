import "./Dashboard.css";

import { cryptos } from "../data/cryptos";
import { useState, useEffect } from "react";
import AddCrypto from "../components/AddCrypto";

import { useNavigate, Route, Routes, data } from "react-router";
import DashboardHome from "./DashboardHome";
import CryptoDetails from "../components/CryptoDetails";
import { successToast, errorToast } from "../notifications";
import EditCrypto from "../components/EditCrypto";

export default function Dashboard({ setIsLoggedIn }) {
  //  const [username, setUsername] = useState("Facundo");
  const [cryptoName, setCryptoName] = useState("");
  const [cryptoList, setCryptoList] = useState(cryptos);
  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [cryptoToDelete, setCryptoToDelete] = useState(null);
  const [editingCrypto, setEditingCrypto] = useState(null);

  // const handleChangeUser = () => {
  //   setUsername("Juan");
  //   console.log(username);
  // };
  const handleEditClick = (crypto) => {
    setEditingCrypto({ ...crypto });
  };
  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setEditingCrypto((prev) => ({ ...prev, [name]: value }));
  };
  const handleUpdateCrypto = (event) => {
    event.preventDefault(); // evita que el form recargue la página

    if (!editingCrypto.name || !editingCrypto.symbol) {
      errorToast("Nombre y símbolo son obligatorios");
      return; // corta acá, ni siquiera hace el fetch
    }

    fetch(`http://localhost:3000/cryptos/${editingCrypto.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingCrypto),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((data) => {
            errorToast(data.message || "Error al actualizar la criptomoneda");
            throw new Error(data.message); // corta la cadena de .then
          });
        }
        return res.json();
      })
      .then((data) => {
        setCryptoList((prev) => prev.map((c) => (c.id === data.id ? data : c)));
        successToast(`¡Cripto ${data.name} actualizada correctamente!`);
        setEditingCrypto(null); // cierra el form
      })
      .catch(() => {});
  };
  const handleCancelEdit = () => {
    setEditingCrypto(null);
  };
  const handleCryptoAdded = (crypto) => {
    if (!crypto.name || !crypto.symbol) {
      errorToast("El nombre y/o símbolo son requeridos");
      return;
    }
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
          successToast(`¡Cripto ${data.name} agregada correctamente!`);
        })
      )
      .catch((err) =>
        errorToast("Hubo un error al agregar la criptomoneda :", err.message)
      );
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
              onEditCrypto={handleEditClick}
            />
          }
        />
        <Route
          path="add-crypto"
          element={<AddCrypto onCryptoAdded={handleCryptoAdded} />}
        />
        <Route path=":id" element={<CryptoDetails />} />
      </Routes>
      {editingCrypto && (
        <EditCrypto
          editingCrypto={editingCrypto}
          handleEditChange={handleEditChange}
          handleUpdateCrypto={handleUpdateCrypto}
          handleCancelEdit={handleCancelEdit}
        />
      )}
    </main>
  );
}
