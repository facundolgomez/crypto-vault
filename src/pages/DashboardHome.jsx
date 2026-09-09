import CryptoSearch from "../components/CryptoSearch";

import ConfirmModal from "../components/ui/ConfirmModal";
import CryptoItem from "../components/CryptoItem";
export default function DashboardHome({
  cryptoName,
  filteredCryptos,
  balance,
  onSearchChange,
  onSelectCryptoName,
  onShowDeleteModal,
  onCryptoAdded,
  showModal,
  cryptoToDelete,
  onConfirmDelete,
  onCancelModal,
  onGoToAddCrypto,
}) {
  return (
    <>
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
        <CryptoSearch onSearchChange={onSearchChange} />
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
              filteredCryptos.map((crypto) => (
                <CryptoItem
                  id={crypto.id}
                  key={crypto.id}
                  cryptoName={crypto.name}
                  symbol={crypto.symbol}
                  amount={crypto.amount}
                  value={crypto.value}
                  image={crypto.image}
                  onSelectCryptoName={onSelectCryptoName}
                  onShowDeleteModal={() => onShowDeleteModal(crypto)}
                />
              ))
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
        <button onClick={onGoToAddCrypto}>Agregar cripto</button>
      </section>

      {showModal && (
        <ConfirmModal
          cryptoName={cryptoToDelete.name}
          onConfirm={onConfirmDelete}
          onCancel={onCancelModal}
        />
      )}
    </>
  );
}
