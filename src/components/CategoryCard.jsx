const CategoryCard = ({ category }) => {
  return (
    <div className="relative h-full w-56 flex-shrink-0 rounded-2xl bg-white border border-zinc-200 shadow-md hover:shadow-xl hover:scale-95 transition-all duration-300 py-20 px-8 flex items-center justify-center">
      <img
        src={`../../${category.route}.svg`}
        className="h-full w-full object-contain"
      />
      <p className="absolute bottom-4 right-4 text-[#272343] font-semibold text-xl">
        {category.title}
      </p>
    </div>
  );
};

export default CategoryCard;
