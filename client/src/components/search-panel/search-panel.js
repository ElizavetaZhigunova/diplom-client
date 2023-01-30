import React from 'react';
import "../search-panel/search-panel.css";

const Search = () => {
    return (
        <div className='search'>
            {/* <img className='loop' src="https://cdn-icons-png.flaticon.com/512/2319/2319177.png" alt="" /> */}
            <input className="search-panel" type="text" placeholder='Хочу арендовать...'/>
        </div>
    );
};

export default Search;