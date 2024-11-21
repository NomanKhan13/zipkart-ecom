const CategoryCard = ({category}) => {
    return (
      <div className="h-full shadow shadow-[#a2c7d3] border border-slate-400 flex-shrink-0 cursor-pointer relative bg-gray-gradient rounded-lg w-56 py-20 px-8 hover:scale-95 transition">
        <img
          src={`../../public/${category.route}.svg`}
          className="h-full w-full"
        />
        <p className="text-gray-800 text-2xl absolute bottom-4 right-4 font-medium">
          {category.title}
        </p>
      </div>
    );
  }
  
  export default CategoryCard;