const CryptoItem = ({ cryptoName, amount, value }) => {
  //   const cryptoName = "Bitcoin";
  //   const amount = "0.15 BTC";
  //   const value = "USD 9.750";

  return (
    <div>
      <h3>{cryptoName} BTC</h3>
      <p>{amount} BTC</p>
      <span>
        <b>USD {value}</b>
      </span>
    </div>
  );
};

export default CryptoItem;
