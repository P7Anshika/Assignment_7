// src/pages/ProductPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const sampleProducts = [
  { id: 1, name: 'Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', price: 12.99 },
];

function ProductPage() {
  const { id } = useParams();
  const product = sampleProducts.find((p) => p.id === parseInt(id));

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductPage;
