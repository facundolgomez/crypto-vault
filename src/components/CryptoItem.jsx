const CryptoItem = () => {
  const cryptoName = "Bitcoin";
  const amount = "0.15 BTC";
  const value = "USD 9.750";

  return (
    <div>
      <h3>{cryptoName} BTC</h3>
      <p>{amount}</p>
      <span>
        <b>{value}</b>
      </span>
    </div>
  );
};

export default CryptoItem;
