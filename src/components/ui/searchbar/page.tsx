"use client";
import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import Image from 'next/image';

interface SearchbarProps {
    onSearch: (query: string) => void;
    placeholder?: string;
}

interface CardData {
    pucStatus: string;
    vehicleType: string;
    validUpto: string;
    registrationNo: string;
    vehicleModel: string;
    vehicleDescription: string;
    contact: string;
    pucValidUpto: string;
}

const FilteredCard: React.FC<CardData> = ({
    pucStatus,
    vehicleType,
    validUpto,
    registrationNo,
    vehicleModel,
    vehicleDescription,
    contact,
    pucValidUpto,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const cardStyle = `mt-3 w-full sm:w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5 mx-auto bg-gradient-to-r from-white ${pucStatus === 'Valid' ? 'to-green-500' : 'to-red-500'
        } rounded-3xl p-4 shadow-lg text-black`;

    const dotStyle = `${pucStatus === 'Valid' ? 'bg-green-400' : 'bg-red-400'} rounded-full p-1 sm:p-2`;

    return (
        <div className={cardStyle}>
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <div className={dotStyle}></div>
                    <p className="ml-3">Seems the PUC is outdated!</p>
                </div>
                <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                    <img src={isOpen ? "arrow-up.png" : "down-arrow.png"} alt="dropdown" width="20" height="20" />
                </div>
            </div>
            <h1 className="text-xl font-bold">{registrationNo}</h1>
            <p>{vehicleModel}</p>
            <div
                style={{ maxHeight: isOpen ? '1000px' : '0', transition: 'max-height 1.1s ease-in-out' }}
                className="overflow-hidden"
            >
                <div className="mt-4">
                    <p>Registration No.: {registrationNo}</p>
                    <p>Vehicle Model: {vehicleModel}</p>
                    <p>Vehicle Description: {vehicleDescription}</p>
                    <p>Vehicle Type: {vehicleType}</p>
                    <p>Contact: {contact}</p>
                    <p>Valid Upto: {pucValidUpto}</p>
                    <p>PUC Valid: {validUpto}</p>
                </div>
            </div>
        </div>
    );
};

const Searchbar: React.FC<SearchbarProps> = ({ onSearch, placeholder = 'Search for reports' }) => {
    const [query, setQuery] = useState('');
    const [filteredCards, setFilteredCards] = useState<CardData[]>([]);

    const cardData: CardData[] = [
        {
            pucStatus: "Valid",
            vehicleType: "Car",
            validUpto: "31 Nov 2023",
            registrationNo: "ILKPK14703",
            vehicleModel: "Super Splendor",
            vehicleDescription: "Bike",
            contact: "+91 9741053920",
            pucValidUpto: "31 Feb 2025"
        },
        {
            pucStatus: "Valid",
            vehicleType: "Truck",
            validUpto: "31 Dec 2024",
            registrationNo: "ABC123",
            vehicleModel: "Volvo",
            vehicleDescription: "Heavy Vehicle",
            contact: "+91 9876543210",
            pucValidUpto: "31 Mar 2025"
        },
        {
            pucStatus: "Expired",
            vehicleType: "Motorcycle",
            validUpto: "31 Jan 2023",
            registrationNo: "XYZ789",
            vehicleModel: "Honda",
            vehicleDescription: "Two-wheeler",
            contact: "+91 9998887776",
            pucValidUpto: "31 Jan 2022"
        }
    ];

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        handleSearch(e.target.value);
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
        <div>
            <div className="flex items-center justify-center mt-8">
                <div className="w-full sm:w-1/2 md:w-2/3 lg:w-1/2 xl:w-1/3">
                    <div className="relative">
                        <input
                            className="w-full h-10 bg-white-300 border rounded-2xl px-4"
                            type="text"
                            value={query}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                            placeholder={placeholder}
                        />
                        <button
                            className="absolute top-0 right-0 h-10 bg-green-500 rounded-3xl flex items-center justify-center px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8"
                            onClick={() => handleSearch(query)}
                        >
                            <Image src="/search-svgrepo-com.svg" width={15} height={15} alt="search-icon" />
                        </button>
                    </div>
                </div>
            </div>
            {filteredCards.length > 0 ? (
                <div>
                    {filteredCards.map((card, index) => (
                        <FilteredCard
                            key={index}
                            pucStatus={card.pucStatus}
                            vehicleType={card.vehicleType}
                            validUpto={card.validUpto}
                            registrationNo={card.registrationNo}
                            vehicleModel={card.vehicleModel}
                            vehicleDescription={card.vehicleDescription}
                            contact={card.contact}
                            pucValidUpto={card.pucValidUpto}
                        />
                    ))}
                </div>
            ) : (
                <p></p>
            )}
        </div>
    );
};

export default Searchbar;