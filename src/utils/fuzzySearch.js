import Fuse from "fuse.js";

const fuseOptions = {
    keys: ["title", "tags"],
    threshold: 0.4,
    minMatchCharLength: 3,
};

const fetchAllProducts = async () => {
    if (!localStorage.getItem("fuzzyProducts-zipkart")) {
        try {
            const response = await fetch(
                "https://dummyjson.com/products?limit=0&select=title,description,tags,thumbnail,price"
            );
            if (!response.ok) throw new Error("Error while fetching products");
            const data = await response.json();
            localStorage.setItem("fuzzyProducts-zipkart", JSON.stringify(data.products));
            return data.products;
        } catch (err) {
            console.error("Error fetching products:", err);
            return [];
        }
    } else {
        return JSON.parse(localStorage.getItem("fuzzyProducts-zipkart"));
    }
};

let fuse;
let fuzzySearchProducts = [];

// Initialize Fuse.js
export const initializeFuzzySearch = async () => {
    fuzzySearchProducts = await fetchAllProducts();
    fuse = new Fuse(fuzzySearchProducts, fuseOptions);
};

// Search function
export const searchProducts = (query) => {
    if (!fuse) {
        console.error("Fuse.js is not initialized. Call initializeFuzzySearch() first.");
        return [];
    }
    return fuse.search(query).map((result) => result.item);
};
