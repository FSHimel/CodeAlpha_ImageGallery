const Container = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto px-2 md:px-4 lg:px-6 flex flex-col gap-10">
      {children}
    </div>
  );
};

export default Container;
