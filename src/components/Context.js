import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const url =
    "https://raw.githubusercontent.com/Craig270/shop-site-react/main/src/components/PhotoBucket.json";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllPhotos(data));
  }, []);

  function toggleFavorite(id) {
    const updatedArr = allPhotos.map((photo) => {
      if (photo.id === id) {
        console.log(id);
        console.log(!photo.isFavorite);
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
      return photo;
    });
    setAllPhotos(updatedArr);
  }

  console.log(allPhotos);

  function addToCart(newItem) {
    setCartItems((prevItems) => [...prevItems, newItem]);
  }

  console.log(cartItems);

  return (
    <Context.Provider value={{ allPhotos, toggleFavorite, addToCart, cartItems }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
