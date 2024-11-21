import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { searchProducts } from "../utils/fuzzySearch";
import ProductCard from "../pages/Category/ProductCard";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Search = () => {

    const [results, setResults] = useState([]);
    const [query, setQuery] = useState("");
    const [isQuering, setIsQuering] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const searchQuery = formData.get("search");
        setQuery(searchQuery);
    }

    useEffect(() => {
        if (query) {
            const searchResults = searchProducts(query);
            setResults(searchResults);
        } else {
            setResults([]); // Clear results if query is empty
        }
    }, [query]);

    return <>
        <Navbar />
        <div className="flex justify-center">
            <div className="w-full max-w-7xl">
                <div className="mt-12 px-4 lg:px-8">

                    <form onSubmit={handleSearch} className="flex justify-center border border-slate-400 rounded-lg w-full lg:w-1/2 mx-auto">
                        <input type="text" name="search" placeholder="Search..." className="w-full text-lg py-4 px-2 font-lato rounded-l-lg" />
                        <button className="rounded-r-lg p-4 bg-primary">
                            <SearchIcon />
                        </button>
                    </form>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                        {results.length > 0 ? (
                            results.map((product) => (
                                <ProductCard product={product} />
                            ))
                        ) : (
                            query && <li>No results found</li>
                        )}

                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Search;