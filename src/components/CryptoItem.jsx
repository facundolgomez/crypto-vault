import { useState } from "react";
const CryptoItem = ({ cryptoName, symbol, amount, value, image }) => {
  //   const cryptoName = "Bitcoin";
  //   const amount = "0.15 BTC";
  //   const value = "USD 9.750";

  const [name, setName] = useState(cryptoName);
  const handleChangeName = () => {
    setName("Cripto actualizada");
  };
  return (
    <tr>
      <td>
        <div className="flex items-center gap-2">
          <img className="w-8 h-8" src={image} alt={cryptoName} />
          <span>{name}</span>
        </div>
      </td>
      <td>
        {amount} {symbol}
      </td>
      <td>{value} USD</td>
      <td>
        <button style={{ cursor: "pointer" }} onClick={handleChangeName}>
          Cambiar nombre
        </button>
      </td>
    </tr>
  );
};

export default CryptoItem;
