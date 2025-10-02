import Typography from '../../components/Typography';
import CollectionCard from '../../components/CollectionCard';
import { COLLECTION_STORE } from '../../utils/CONSTANTS';

const ShopByCollection = () => {
  return (
    <section className="bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="flex flex-col items-center text-center mb-12">
          <Typography
            variant="h2"
            weight="font-semibold"
            className="text-3xl md:text-4xl text-[#272343]"
          >
            Shop by Collection
          </Typography>
          <p className="text-zinc-600 mt-3 max-w-2xl text-base sm:text-lg">
            Each season, we collaborate with world-class designers to create
            a collection inspired by the natural world.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {COLLECTION_STORE.map((collection) => (
            <CollectionCard key={collection.route} collection={collection} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCollection;
