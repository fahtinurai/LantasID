// src/components/PageWrapper.jsx
const PageWrapper = ({ children }) => {
  return (
    <div className="w-full bg-white min-h-screen py-16 px-4 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
