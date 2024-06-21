

import React, { useState } from 'react';

const Search = ({ searchText }) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text);
    };

    return (
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto px-4">
            <form onSubmit={onSubmit} className="w-full">
                <div className="flex items-center border-b-2 border-blue-500 py-2">
                    <input
                        onChange={(e) => setText(e.target.value)}
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Search for Image"
                    />
                    <button
                        className="flex-shrink-0 bg-blue-400 hover:bg-blue-700 border-blue-300 hover:border-blue-300 text-sm border-4 text-white py-2 px-4 rounded-full shadow-lg"
                        type="submit"
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Search;
