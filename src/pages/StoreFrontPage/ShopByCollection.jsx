

import CollectionCard from '../../components/CollectionCard';
import { COLLECTION_STORE } from '../../utils/CONSTANTS';


export default function ShopByCollection() {
  return (
    <div className="bg-[#f7f7f7] py-20 -mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-6">
            {COLLECTION_STORE.map((callout) => (
              <CollectionCard collection={callout} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
