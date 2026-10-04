export default function EditCrypto({
  editingCrypto,
  handleEditChange,
  handleUpdateCrypto,
  handleCancelEdit,
}) {
  return (
    <form onSubmit={handleUpdateCrypto}>
      <h3>Editar criptomoneda</h3>
      <input
        name="name"
        value={editingCrypto.name}
        onChange={handleEditChange}
        placeholder="Nombre"
      />
      <input
        name="symbol"
        value={editingCrypto.symbol}
        onChange={handleEditChange}
        placeholder="Símbolo"
      />
      <input
        name="amount"
        value={editingCrypto.amount}
        onChange={handleEditChange}
        placeholder="Cantidad"
      />
      <input
        name="value"
        value={editingCrypto.value}
        onChange={handleEditChange}
        placeholder="Valor"
      />
      <input
        name="image"
        value={editingCrypto.image}
        onChange={handleEditChange}
        placeholder="URL de imagen"
      />
      <button type="submit">Guardar cambios</button>
      <button type="button" onClick={handleCancelEdit}>
        Cancelar
      </button>
    </form>
  );
}
