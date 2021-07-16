import React, { useState } from "react";
import Cart from "./Cart";
import "./Items.css";
import Addcart from "./AddCart";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";
const freeSeats = Math.trunc(Math.random() * 10) + 5;

const Items = () => {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const addToCart = (classes) => {
    setCart([...cart, { ...classes }]);
  };

  const removeCart = (producttoRemove) => {
    setCart(cart.filter((product) => product !== producttoRemove));
  };

  const navigateTo = (cartPage) => {
    setPage(cartPage);
  };

  return (
    <>
      <button className="cart" onClick={() => navigateTo(PAGE_CART)}>
        Cart {cart.length}
      </button>
      <h3>Free Seats: {freeSeats}</h3>

      {page === PAGE_PRODUCTS && <Addcart addToCart={addToCart} />}
      {page === PAGE_CART && <Cart cart={cart} removeCart={removeCart} />}
    </>
  );
};

export default Items;
