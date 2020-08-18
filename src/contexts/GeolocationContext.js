import React, { useState, createContext } from "react";

export const GeolocationContext = createContext();

export const GeolocationProvider = (props) => {
  const [geolocation,setGeolocation] = useState({
  	lat : "",
  	lon : ""
  });
  
  return (
    <GeolocationContext.Provider value={[geolocation,setGeolocation]}>
      {props.children}
    </GeolocationContext.Provider>
  );
};