import React, { useState } from 'react';
export default function SearchBox({ suggestions }) {
    const [query, setQuery] = useState('');
    const [Suggestions, setSuggestions] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        setSuggestions(
            suggestions.filter((suggestion) =>
                suggestion.toLowerCase().includes(value.toLowerCase())
            )
        );
    };

    return (
        <div>
            <input className='border border-slate-800 rounded-2xl'
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search here..."
            />
            {Suggestions.length > 0 ? (
                <ul>
                    {Suggestions.map((suggestion, index) => (
                        <li key={index}>{suggestion}</li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};