const PageContainer = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-white py-16 px-4 lg:px-16">
      <div className="max-w-7xl mx-auto">{children}</div>
    </div>
  );
};

export default PageContainer;
