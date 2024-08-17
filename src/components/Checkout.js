// src/components/Checkout.js
import React from 'react';

function Checkout({ cartItems }) {
  const handleCheckout = () => {
    alert('Order placed successfully!');
  };

  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={handleCheckout} disabled={cartItems.length === 0}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;
