const AuthContainer = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <section className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">
          ¡Bienvenido a CryptoVault!
        </h1>

        {children}
      </section>
    </div>
  );
};

export default AuthContainer;
