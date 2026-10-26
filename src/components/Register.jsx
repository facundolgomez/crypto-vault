import { useState } from "react";
import { useNavigate } from "react-router";
import AuthContainer from "./AuthContainer";
import { successToast, errorToast } from "../notifications.js";
import { validateRegisterUser } from "./auth/auth.services.js";

const Register = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const validation = validateRegisterUser({
      name: userName,
      email,
      password,
    });
    if (validation.error) {
      errorToast(validation.message);
      return;
    }

    fetch("http://localhost:3000/register", {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ name: userName, email, password }),
    })
      .then((res) =>
        res.json().then((data) => {
          if (!res.ok) {
            errorToast(data.message || "Error al registrar el usuario");
            return;
          }
          successToast("Usuario creado exitosamente");
          setTimeout(() => {
            navigate("/login");
          }, 1500);
        }),
      )
      .catch(() => errorToast("No se pudo conectar con el servidor"));
  };

  return (
    <AuthContainer>
      <form onSubmit={handleRegister} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Ingresar nombre de usuario"
          className="border border-gray-300 rounded-lg px-4 py-2"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />

        <input
          type="email"
          placeholder="Ingresar email"
          className="border border-gray-300 rounded-lg px-4 py-2"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <input
          type="password"
          placeholder="Ingresar contraseña"
          className="border border-gray-300 rounded-lg px-4 py-2"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700"
        >
          Registrarse
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="font-semibold mb-2">¿Ya tenés cuenta?</p>
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="w-full border border-blue-600 text-blue-600 rounded-lg py-2 hover:bg-blue-50"
        >
          Iniciar sesión
        </button>
      </div>
    </AuthContainer>
  );
};

export default Register;
