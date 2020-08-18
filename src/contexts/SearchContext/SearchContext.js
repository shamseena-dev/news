import React, { useState, createContext } from "react";

export const SearchContext = createContext();

export const SearchProvider = (props) => {
  const [searchData, setSearchData] = useState('');
  
  return (
    <SearchContext.Provider value={[searchData, setSearchData]}>
      {props.children}
    </SearchContext.Provider>
  );
};