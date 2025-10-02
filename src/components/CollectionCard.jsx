import { Link } from 'react-router-dom';

const CollectionCard = ({ collection }) => {
  return (
    <Link to={`/collection/${collection.route}`}>
      <div className="bg-white rounded-2xl border border-zinc-200 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 duration-300 overflow-hidden">
        <div className="h-72 w-full">
          <img src={collection.img} className="h-full w-full object-cover" />
        </div>
      </div>
      <p className="text-[#2d334a] text-lg font-semibold mt-3">
        {collection.title}
      </p>
      <p className="text-zinc-600 text-sm">
        {collection.description}
      </p>
    </Link>
  );
}

export default CollectionCard;
