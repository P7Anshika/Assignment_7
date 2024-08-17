// src/pages/CartPage.js
import React, { useState } from 'react';
import Cart from '../components/Cart';

function CartPage() {
  const [cart, setCart] = useState([]);

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Cart cartItems={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default CartPage;
