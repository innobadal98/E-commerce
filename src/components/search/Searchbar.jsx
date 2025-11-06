import { TextField } from "@mui/material";
import React, { useState, useEffect } from "react";

function Searchbar({ setSearchValue }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  // Debounce logic: waits 300ms after typing stops
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setSearchValue(query.trim());
    }, 500);

    // Cleanup if user types before 300ms
    return () => clearTimeout(delayDebounce);
  }, [query, setSearchValue]);

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
  );
}

export default Searchbar;
