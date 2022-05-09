import React, { useState } from 'react';

const SearchBar = (props) => {
    const [filter, setFilter] = useState("")



    return ( 
        <form>
            <label>Filter Songs</label>
            <input type={""} value={filter} onChange={(event) => setFilter(event.target.value)}/>
            <button type='submit'>Search</button>
        </form>
     );
}
 
export default SearchBar;