import React from 'react'


const SearchBar = ({searchChange}) =>{
    return (
        <input className=' pa3  ma4 w-40 auto  w-20 outline '
        type='search'
        placeholder='Search Robots'
        results={5}
        onChange={searchChange}
        ></input>
    )
}

export default SearchBar