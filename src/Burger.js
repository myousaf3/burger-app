import React, { useState } from "react";
import "./Burger.css";

const Burger = () => {
  const [patties, setPatties] = useState(1);
  const [cheese, setCheese] = useState(0);
  const [lettuce, setLettuce] = useState(0);
  const [bacon, setBacon] = useState(0);
  const [price, setPrice] = useState(5);

  const addPatty = () => {
    if (patties < 3) {
      setPatties(patties + 1);
      setPrice(price + 5);
    }
  };

  const removePatty = () => {
    if (patties > 1) {
      setPatties(patties - 1);
      setPrice(price - 5);
    }
  };

  const addCheese = () => {
    if (cheese < 3) {
      setCheese(cheese + 1);
      setPrice(price + 2);
    }
  };

  const removeCheese = () => {
    if (cheese > 0) {
      setCheese(cheese - 1);
      setPrice(price - 2);
    }
  };

  const addLettuce = () => {
    if (lettuce < 3) {
      setLettuce(lettuce + 1);
      setPrice(price + 1);
    }
  };

  const removeLettuce = () => {
    if (lettuce > 0) {
      setLettuce(lettuce - 1);
      setPrice(price - 1);
    }
  };

  const addBacon = () => {
    if (bacon < 3) {
      setBacon(bacon + 1);
      setPrice(price + 10);
    }
  };

  const removeBacon = () => {
    if (bacon > 0) {
      setBacon(bacon - 1);
      setPrice(price - 10);
    }
  };

  return (
    <>
      <div>
        <h2>Price: ${price}</h2>
      </div>
      <div className="controls">
        <button onClick={addPatty}>Add Patty</button>
        <button onClick={removePatty}>Remove Patty</button>
        <button onClick={addCheese}>Add Cheese</button>
        <button onClick={removeCheese}>Remove Cheese</button>
        <button onClick={addLettuce}>Add Lettuce</button>
        <button onClick={removeLettuce}>Remove Lettuce</button>
        <button onClick={addBacon}>Add Bacon</button>
        <button onClick={removeBacon}>Remove Bacon</button>
      </div>
      <div className="burger">
        <div className="burger-top"></div>
        {[...Array(lettuce)].map((_, index) => (
          <div key={index} className="lettuce" />
        ))}
        {[...Array(patties)].map((_, index) => (
          <div key={index} className="patty" />
        ))}
        {[...Array(cheese)].map((_, index) => (
          <div key={index} className="cheese" />
        ))}
        {[...Array(bacon)].map((_, index) => (
          <div key={index} className="bacon" />
        ))}
        <div className="burger-bottom"></div>
      </div>
    </>
  );
};

export default Burger;
