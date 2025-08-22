import Typography from '../../components/Typography';
import CollectionCard from '../../components/CollectionCard';
import { COLLECTION_STORE } from '../../utils/CONSTANTS';

const ShopByCollection = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-7xl px-4 md:px-8 py-20">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <Typography
            variant="h2"
            weight="font-semibold"
            color="text-zinc-900"
          >
            Shop by Collection
          </Typography>
          <p className="text-zinc-600 mt-2 max-w-2xl">
            Each season, we collaborate with world-class designers to create
            a collection inspired by the natural world.
          </p>
        </div>

        {/* Collection Grid */}
        <div className="flex flex-col items-center lg:flex-row gap-6">
          {COLLECTION_STORE.map((collection) => (
            <div
              key={collection.route}
              className="flex-1 cursor-pointer flex flex-col gap-2 hover:scale-[0.97] transition-transform w-full sm:w-4/6 lg:w-auto"
            >
              <CollectionCard collection={collection} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCollection;
