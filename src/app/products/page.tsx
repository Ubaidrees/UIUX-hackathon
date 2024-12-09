'use client';
import Footer from '../../../components/footer';  // Adjusted import path for the footer
import { useState } from 'react';

export default function Products() {
  // State for cart
  const [cart, setCart] = useState<string[]>([]);

  // Function to handle adding items to the cart
  const addItemToCart = (productName: string) => {
    setCart((prevCart) => [...prevCart, productName]);
    alert(`${productName} has been added to the cart!`);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Product Card 1 */}
        <div className="product-card bg-white p-4 rounded-lg shadow-lg">
          <img
            src="https://workspace.com.pk/wp-content/uploads/2023/01/Visitor-Chair-10-1536x1536-1.jpg"
            alt="Product 1"
            className="w-full h-48 object-cover rounded"
          />
          <h2 className="mt-4 text-xl font-semibold">Product 1</h2>
          <p className="mt-2 text-lg font-bold">$100</p>
          <button
            onClick={() => addItemToCart('Product 1')}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>

        {/* Product Card 2 */}
        <div className="product-card bg-white p-4 rounded-lg shadow-lg">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiMlVCuuxv1kRnZ656vp42OgqgT0Jd17Rqk73JvIVJtG6JmB4HOuO7XhogXCaI_tUu6r8&usqp=CAU"
            alt="Product 2"
            className="w-full h-48 object-cover rounded"
          />
          <h2 className="mt-4 text-xl font-semibold">Product 2</h2>
          <p className="mt-2 text-lg font-bold">$150</p>
          <button
            onClick={() => addItemToCart('Product 2')}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>

        {/* Product Card 3 */}
        <div className="product-card bg-white p-4 rounded-lg shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1605407465069-fba0cc707279?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8N3x8cHJvZHVjdCUyMGltYWdlfGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080"
            alt="Product 3"
            className="w-full h-48 object-cover rounded"
          />
          <h2 className="mt-4 text-xl font-semibold">Product 3</h2>
          <p className="mt-2 text-lg font-bold">$200</p>
          <button
            onClick={() => addItemToCart('Product 3')}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>

        {/* Product Card 4 */}
        <div className="product-card bg-white p-4 rounded-lg shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1560307764-877ed720a7ca?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8MXx8cHJvZHVjdCUyMGltYWdlfGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080"
            alt="Product 4"
            className="w-full h-48 object-cover rounded"
          />
          <h2 className="mt-4 text-xl font-semibold">Product 4</h2>
          <p className="mt-2 text-lg font-bold">$250</p>
          <button
            onClick={() => addItemToCart('Product 4')}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
