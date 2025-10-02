import { Link } from 'react-router-dom';

const CollectionCard = ({ collection }) => {
  return (
      
      <div key={collection.title} className="group relative">
                <img
                  alt={collection.title}
                  src={collection.img}
                  className="w-full rounded-lg bg-white group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                />
                <h3 className="mt-6 text-sm text-gray-500">
                <Link to={`/collection/${collection.route}`}>
                    <span className="absolute inset-0" />
                    {collection.title}
                  </Link>
                </h3>
                <p className="text-base font-semibold text-gray-900">{collection.description}</p>
              </div>
  );
}

export default CollectionCard;
