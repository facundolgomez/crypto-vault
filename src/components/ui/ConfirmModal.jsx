export default function ConfirmModal({ cryptoName, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-xl font-bold mb-4">¿Eliminar {cryptoName}?</h2>

        <p className="mb-8">¿Seguro que querés eliminar esta criptomoneda?</p>

        <div className="flex gap-4 justify-end pt-2 pr-2 pb-2 pl-2">
          <button
            onClick={onCancel}
            className="px-6 py-2.5 bg-gray-300 rounded-lg"
          >
            Cancelar
          </button>

          <button
            onClick={onConfirm}
            className="px-6 py-2.5 bg-red-500 text-white rounded-lg"
          >
            Sí, eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
