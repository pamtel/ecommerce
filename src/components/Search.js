import React, { useState} from 'react'
import SearchIcon from '@material-ui/icons/Search';

function Search({handleChange, input}) {
    
    return (
        <div>
            <form className="searchForm position-absolute d-flex align-items-center">
                <input type="text" value={input} onChange={() => handleChange} placeholder="Search for products..."/>
                <div className="search-icon d-flex justify-content-center align-items-center">
                    < SearchIcon />
                </div>
            </form> 
        </div>
    )
}

export default Search
