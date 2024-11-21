import Fuse from "fuse.js";

const fuseOptions = {
    // isCaseSensitive: false,
	// includeScore: false,
	// shouldSort: true,
	// includeMatches: false,
	// findAllMatches: false,
	// location: 0,
	// threshold: 0.6,
	// distance: 100,
	// useExtendedSearch: false,
	// ignoreLocation: false,
	// ignoreFieldNorm: false,
	// fieldNormWeight: 1,
    keys: [
        "title",
        "tags"
    ],
    threshold: 0.4,
    minMatchCharLength: 3,
}

const fetchAllProducts = async () => {
    if (!localStorage.getItem("fuzzyProducts-zipkart")) {
        try {
            const response = await fetch('https://dummyjson.com/products?limit=0&select=title,description,tags,thumbnail,price');
            if (!response.ok) throw new Error("Error while fetching products");
            const data = await response.json();
            localStorage.setItem("fuzzyProducts-zipkart", JSON.stringify(data.products));
            return data.products;
        } catch (err) {
            console.log("Error", err);
        }
    } else {
        return JSON.parse(localStorage.getItem("fuzzyProducts-zipkart"));
    }
}

const fuzzySearchProducts = await fetchAllProducts();

const fuse = new Fuse(fuzzySearchProducts, fuseOptions);

export const searchProducts = (query) => {
    console.log(fuse.search(query));
    console.log(fuzzySearchProducts);
    return fuse.search(query).map(result => result.item);
}

// fuse.search(searchPattern);