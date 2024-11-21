const ShopYourContainer = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-7xl px-4 md:px-8">
        <div className="bg-gradient-to-r from-[#3a6073] to-[#3a7bd5] rounded-lg flex flex-col gap-4 justify-center sm:items-center py-20 sm:py-28 px-3 sm:px-4  text-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ShopYourContainer;
