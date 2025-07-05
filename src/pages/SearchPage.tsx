import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
};

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search') || '';

    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!searchQuery.trim()) {
            setProducts([]);
            setIsLoading(false);
            return;
        }

        const fetchSearchResults = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`/api/v1/products?search=${encodeURIComponent(searchQuery)}`);
                setProducts(response.data);
                setError(null);
            } catch (error) {
                setError("Something went wrong while fetching products.");
                setProducts([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSearchResults();
    }, [searchQuery]);


    return (
        <div>
            <SearchBar />
            <h2>Search Results for "{searchQuery}"</h2>

            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            {!isLoading && products.length === 0 && <p>No products found.</p>}

            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} {product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchPage;