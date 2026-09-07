import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold">
        ¡Oops! La página solicitada no fue encontrada
      </h2>

      <button
        onClick={() => navigate("/login")}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Volver a iniciar sesión
      </button>
    </div>
  );
}
