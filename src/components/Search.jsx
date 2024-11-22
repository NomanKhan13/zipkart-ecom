import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import * as fuzzyService from "../utils/fuzzySearch";
import ProductCard from "../pages/Category/ProductCard";
import Navbar from "./Navbar";

const Search = () => {
    const [results, setResults] = useState([]);
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Initialize Fuse.js search functionality
    useEffect(() => {
        const initializeSearch = async () => {
            try {
                setIsLoading(true);
                await fuzzyService.initializeFuzzySearch(); // Wait for initialization
            } catch (err) {
                setError("Failed to initialize search functionality.");
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };
        initializeSearch();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const searchQuery = formData.get("search");
        setQuery(searchQuery);
    };

    useEffect(() => {
        if (query) {
            try {
                const searchResults = fuzzyService.searchProducts(query);
                setResults(searchResults);
            } catch (err) {
                setError("Error while searching for products.");
                console.error(err);
            }
        } else {
            setResults([]); // Clear results if query is empty
        }
    }, [query]);

    return (
        <>
            <Navbar />
            <div className="flex justify-center">
                <div className="w-full max-w-7xl">
                    <div className="mt-12 px-4 lg:px-8">
                        {/* Search Form */}
                        <form
                            onSubmit={handleSearch}
                            className="flex justify-center border border-slate-400 rounded-lg w-full lg:w-1/2 mx-auto"
                        >
                            <input
                                type="text"
                                name="search"
                                placeholder="Search..."
                                className="w-full text-lg py-4 px-2 font-lato rounded-l-lg"
                            />
                            <button className="rounded-r-lg p-4 bg-primary">
                                <SearchIcon />
                            </button>
                        </form>

                        {/* Results */}
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {isLoading ? (
                                <p>Loading...</p>
                            ) : error ? (
                                <p className="text-red-500">{error}</p>
                            ) : results.length > 0 ? (
                                results.map((product, index) => (
                                    <ProductCard key={product.id || index} product={product} />
                                ))
                            ) : (
                                query && <p>No results found</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Search;
