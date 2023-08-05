

import React from 'react'
import searchIcon from './search.png'

const SearchBar = () => {


    return (
        <div>
            <div className='search-bar'>
                <img src={searchIcon} alt='search' className='search-icon-img' />
                <input className='search-input' type='search' placeholder='Search here...' />

            </div>
        </div>
    )
}

export default SearchBar