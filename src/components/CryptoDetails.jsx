import { useNavigate, useLocation } from "react-router";
export default function CryptoDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const crypto = location.state;

  if (!crypto) {
    return (
      <section className="crypto-details">
        <p>No se encontró información de esta criptomoneda.</p>
        <button onClick={() => navigate("/dashboard", { replace: true })}>
          Volver al dashboard
        </button>
      </section>
    );
  }

  const { name, symbol, amount, value, image, description } = crypto;

  return (
    <section className="crypto-details">
      <button onClick={() => navigate("/dashboard", { replace: true })}>
        ← Volver
      </button>

      <div className="crypto-details-card">
        <img src={image} alt={name} className="w-16 h-16" />
        <h2>
          {name} ({symbol})
        </h2>

        <p>
          <b>Cantidad:</b> {amount} {symbol}
        </p>
        <p>
          <b>Valor:</b> USD {value}
        </p>

        {description && (
          <p>
            <b>Descripción:</b> {description}
          </p>
        )}
      </div>
    </section>
  );
}
