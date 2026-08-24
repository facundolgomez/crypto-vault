import { useState } from "react";
export default function AddCrypto({ onCryptoAdded }) {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [amount, setAmount] = useState("");
  const [value, setValue] = useState("");
  const [image, setImage] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeSymbol = (e) => {
    setSymbol(e.target.value);
  };
  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };
  const handleChangeImage = (e) => {
    setImage(e.target.value);
  };

  const handleAddCrypto = (event) => {
    event.preventDefault();
    const crypto = {
      name,
      symbol,
      amount: parseInt(amount, 10),
      value: parseInt(value, 10),
      image,
    };
    onCryptoAdded(crypto);
    setName("");
    setSymbol("");
    setAmount("");
    setValue("");
    setImage("");
  };
  return (
    <section>
      <h2>Agregar criptomoneda</h2>

      <form onSubmit={handleAddCrypto}>
        <input
          className="border border-gray-300 rounded-lg px-3 py-2 m-2"
          type="text"
          placeholder="Nombre"
          onChange={handleChangeName}
          value={name}
        />
        <input
          className="border border-gray-300 rounded-lg px-3 py-2 m-2"
          type="text"
          placeholder="Símbolo"
          onChange={handleChangeSymbol}
          value={symbol}
        />
        <input
          className="border border-gray-300 rounded-lg px-3 py-2 m-2"
          type="number"
          placeholder="Cantidad"
          onChange={handleChangeAmount}
          value={amount}
        />
        <input
          className="border border-gray-300 rounded-lg px-3 py-2 m-2"
          type="number"
          placeholder="Valor"
          onChange={handleChangeValue}
          value={value}
        />
        <input
          className="border border-gray-300 rounded-lg px-3 py-2 m-2"
          type="text"
          placeholder="URL de imagen"
          onChange={handleChangeImage}
          value={image}
        />
        <button type="submit" className="bg-green-300">
          Agregar cripto
        </button>
      </form>
    </section>
  );
}
