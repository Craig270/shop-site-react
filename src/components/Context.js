import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);

  const url =
    "https://raw.githubusercontent.com/Craig270/shop-site-react/main/src/components/PhotoBucket.json";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllPhotos(data));
  }, []);

  console.log(allPhotos);

  return <Context.Provider value={{ allPhotos }}>{children}</Context.Provider>;
}

export { ContextProvider, Context };
