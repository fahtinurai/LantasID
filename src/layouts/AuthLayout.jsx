// src/components/AuthLayout.jsx
const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Left Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-6 py-12">
        <div className="w-full max-w-md">{children}</div>
      </div>

      {/* Right Image Section */}
      <div className="hidden md:flex w-1/2">
        <img
          src="/images/vault.jpg"
          alt="Vault Illustration"
          className="w-full h-full object-cover"  // 🔥 bikin gambar penuh & rata
        />
      </div>
    </div>
  );
};

export default AuthLayout;
