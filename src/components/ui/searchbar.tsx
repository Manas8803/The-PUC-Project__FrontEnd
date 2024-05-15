"use client";
import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import Image from 'next/image';

interface SearchbarProps {
    onSearch: (query: string) => void;
    placeholder?: string;
}

const Searchbar: React.FC<SearchbarProps> = ({ onSearch, placeholder = 'Search for reports' }) => {
    const [query, setQuery] = useState('');
    placeholder = 'Search for reports';

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleSearch = (query: string) => {
        const filtered = cardData.filter((card) =>
            Object.values(card).some((value) =>
                value.toString().toLowerCase().includes(query.toLowerCase())
            )
        );
        setFilteredCards(filtered);
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch(query);
        }
    };

    return (
        <div className="flex items-center justify-center mt-8">
            <div className="relative w-1/2">
                <input
                    className="w-full h-10 bg-white-300 border rounded-2xl px-4"
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder={placeholder}
                />
                <button className="absolute top-0 right-0 h-10 bg-green-500 rounded-3xl flex items-center justify-center px-3"
                    onClick={() => handleSearch(query)}
                >
                    <Image src="/search-svgrepo-com.svg" width={15} height={15} alt="search-icon" />
                </button>
            </div>
        </div>
    );
};

export default Searchbar;
function setFilteredCards(filtered: any) {
    throw new Error('Function not implemented.');
}

