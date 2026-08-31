import { useState, useRef } from "react";

export default function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

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
    alert(
      `El email ingresado es ${emailRef.current.value} y el password es ${passwordRef.current.value}`
    );
  };

  const handleEmailChange = () => {
    setErrors({ ...errors, email: false });
  };

  const handlePasswordChange = () => {
    setErrors({ ...errors, password: false });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <section className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar sesión</h2>

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

          <button
            type="submit"
            className="bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700"
          >
            Iniciar sesión
          </button>
        </form>
      </section>
    </div>
  );
}
