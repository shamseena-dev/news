import React, { useState, createContext } from "react";

export const GeolocationContext = createContext();

export const GeolocationProvider = (props) => {
  const [geolocation,setGeolocation] = useState({
  	 lat: "52.520008",
  	 lon: "13.404954"
  });
   return (
    <GeolocationContext.Provider value={[geolocation,setGeolocation]}>
      {props.children}
    </GeolocationContext.Provider>
  );
};