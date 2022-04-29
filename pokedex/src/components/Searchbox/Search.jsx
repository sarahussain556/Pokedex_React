import React from 'react';
import './Search.css';

const SearchBox=()=>{
    return(
        <div className="search-container">
            <input 
          
            placeholder="Type Pokemon name" className="search-input"/>
        </div>
    );
};

export default SearchBox;