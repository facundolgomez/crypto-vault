export default function CryptoSearch({ onSearchChange }) {
  const handleSearchChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Buscar criptomoneda..."
      onChange={handleSearchChange}
    />
  );
}
