import Typography from '../../components/Typography';
import CollectionCard from '../../components/CollectionCard';
import { COLLECTION_STORE } from '../../utils/CONSTANTS';

const ShopByCollection = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-7xl px-4 md:px-8 py-20">
        <div className="flex flex-col sm:items-center mb-8">
          <Typography variant="h2" weight="font-medium" color="text-slate-900">Shop by Collection</Typography>
          <p className="text-slate-400 sm:text-center">
            Each season, we collaborate with world-class designers to create a
            collection inspired by the natural world.
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-stretch lg:flex-row gap-6">
          {COLLECTION_STORE.map((collection) => (
            <div
              key={collection.route}
              className="flex-1 cursor-pointer flex flex-col gap-2 hover:scale-95 transition w-full sm:w-4/6"
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
