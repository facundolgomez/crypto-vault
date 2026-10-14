import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import AuthContainer from "./AuthContainer";
import { errorToast } from "../notifications";

export default function Login({ setIsLoggedIn }) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!emailRef.current.value.length) {
      setErrors({ ...errors, email: true });
      alert("Email vacio");

      return;
    }
    if (
      !passwordRef.current.value.length ||
      passwordRef.current.value.length < 7
    ) {
      setErrors({ ...errors, password: true });
      alert("Password incomopleto");

      return;
    }
    setErrors({ email: false, password: false });

    fetch("http://localhost:3000/login", {
      headers: { "Content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }),
    })
      .then((res) =>
        res.json().then((data) => {
          if (!res.ok) {
            errorToast(data.message || "Error al iniciar sesión");
            return;
          }
          localStorage.setItem("crypto-vault-token", data);
          setIsLoggedIn(true);
          navigate("/dashboard", { replace: true });
        }),
      )
      .catch(() => errorToast("No se pudo conectar con el servidor"));
  };

  const handleEmailChange = () => {
    setErrors({ ...errors, email: false });
  };

  const handlePasswordChange = () => {
    setErrors({ ...errors, password: false });
  };

  return (
    <AuthContainer>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Ingresar email"
          className={`border border-gray-300 rounded-lg px-4 py-2 ${
            errors.email ? "border-red-500 border-2" : "border-gray-300"
          }`}
          ref={emailRef}
          onChange={handleEmailChange}
        />

        <input
          type="password"
          placeholder="Ingresar contraseña"
          className={`border border-gray-300 rounded-lg px-4 py-2 ${
            errors.password ? "border-red-500 border-2" : "border-gray-300"
          } `}
          ref={passwordRef}
          onChange={handlePasswordChange}
        />
        {(errors.email || errors.password) && (
          <p className="text-red-500">
            Debes completar los campos para iniciar sesión
          </p>
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700"
        >
          Iniciar sesión
        </button>
      </form>
      <div className="mt-6 text-center">
        <p className="font-semibold mb-2">¿Aún no tenés cuenta?</p>
        <button
          type="button"
          onClick={() => navigate("/register")}
          className="w-full border border-blue-600 text-blue-600 rounded-lg py-2 hover:bg-blue-50"
        >
          Registrarse
        </button>
      </div>
    </AuthContainer>
  );
}
