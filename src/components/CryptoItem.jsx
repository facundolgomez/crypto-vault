import { useState } from "react";
import { useNavigate } from "react-router";
const CryptoItem = ({
  id,
  cryptoName,
  symbol,
  amount,
  value,
  image,
  onSelectCryptoName,
  onShowDeleteModal,
}) => {
  //   const cryptoName = "Bitcoin";
  //   const amount = "0.15 BTC";
  //   const value = "USD 9.750";

  //const [name, setName] = useState(cryptoName);
  const navigate = useNavigate();
  const handleSelectName = () => {
    // onSelectCryptoName(cryptoName);
    navigate(`/dashboard/${id}`, {
      state: { name: cryptoName, symbol, amount, value, image },
    });
  };

  const handleShowModal = () => {
    onShowDeleteModal();
  };

  return (
    <tr>
      <td>
        <div className="flex items-center gap-2">
          <img className="w-8 h-8" src={image} alt={cryptoName} />
          <span>{cryptoName}</span>
        </div>
      </td>
      <td>
        {amount} {symbol}
      </td>
      <td>{value} USD</td>
      <td>
        <button style={{ cursor: "pointer" }} onClick={handleSelectName}>
          Seleccionar cripto
        </button>
      </td>
      <td>
        <button onClick={handleShowModal}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CryptoItem;
