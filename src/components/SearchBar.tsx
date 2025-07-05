import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

    const [searchTerm, setsearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        navigate(`/search?search=${encodeURIComponent(searchTerm)}`);
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                placeholder='Search for a product!'
                value={searchTerm}
                onChange={(e) => setsearchTerm(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;


