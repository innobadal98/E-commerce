import { TextField } from '@mui/material'
import React, { useState } from 'react'

function Searchbar({setSearchValue}) {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        const value = e.target.value;
        setQuery(value);
        setSearchValue(value)
    }
    console.log(query);
    
  return (
    
        <TextField
          id="filled-search"
          label="Search Products Here"
          type="search"
          variant="filled"
          fullWidth
          value={query}
          onChange={handleSearch}
        />
        
  )
}

export default Searchbar