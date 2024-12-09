"use client"; // Ensures the component is a client component
import { useState } from 'react';

interface CartItem {
  name: string;
  price: number;
}

export default function Cart() {
  // Define the cart state with an initial type
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { name: "Product 1", price: 100 },
    { name: "Product 2", price: 150 },
  ]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>
      <div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {/* Loop through cartItems and display them */}
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between mb-4 border-b pb-2">
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
              </div>
            ))}
            <div className="mt-8 text-right">
              <button className="bg-blue-500 text-white px-6 py-2 rounded">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
