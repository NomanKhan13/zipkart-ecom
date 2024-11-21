import { Link } from 'react-router-dom';

const CollectionCard = ({ collection }) => {
    return (
        <Link to={`/collection/${collection.route}`}>
            <div className="bg-gray-gradient shadow shadow-[#a2c7d3] rounded-lg py-20 px-8 h-96 border border-slate-400">
                <img src={collection.img} className="h-full w-full" />
            </div>
            <p className="text-gray-800 text-lg mt-2 lg:text-xl lg:h-12">
                {collection.title}
            </p>
            <p className="text-slate-400 text-sm">
                {collection.description}
            </p>
        </Link>
    );
}

export default CollectionCard;