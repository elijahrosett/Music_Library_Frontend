import React, { useState } from 'react';

const SearchBar = (props) => {
    const [filter, setFilter] = useState("")

    function handleSubmit(event){
        event.preventDefault();
        let newFilter = {
        filter: filter
        };
        setFilter(newFilter);
        console.log(filter)
        props.filterMusic(filter)
        
  
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Filter Songs</label>
            <input type={""} value={filter} onChange={(event) => setFilter(event.target.value)}/>
            <button type='submit'>Search</button>
        </form>
     );
}
 
export default SearchBar;