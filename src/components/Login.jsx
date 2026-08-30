import { useState, useRef } from "react";

export default function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();

    emailRef.current.focus();

    setTimeout(() => {
      emailRef.current.blur();
    }, 2000);

    console.log("El valor del email ", emailRef.current.value);
    console.log("El valor de la password es ", passwordRef.current.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <section className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar sesión</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Ingresar email"
            className="border border-gray-300 rounded-lg px-4 py-2"
            ref={emailRef}
          />

          <input
            type="password"
            placeholder="Ingresar contraseña"
            className="border border-gray-300 rounded-lg px-4 py-2"
            ref={passwordRef}
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
