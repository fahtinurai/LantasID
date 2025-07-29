// src/components/AuthLayout.jsx
const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Left Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-6 py-12">
        <div className="max-w-md w-full">{children}</div>
      </div>

      {/* Right Image Section */}
      <div className="w-full px-1 py-1 border rounded-md bg-white text-gray-700">
        <img
          src="/images/vault.jpg" // path ke public/images/vault.jpg
          alt="Vault Illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
