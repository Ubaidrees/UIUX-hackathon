'use client';

import Footer from '../../../components/footer';  // Adjusted import path for the footer

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Welcome to Our Store</h1>
        <p className="mt-4 text-lg">Discover amazing products at unbeatable prices.</p>
        <button className="mt-6 bg-white text-blue-500 px-6 py-2 rounded hover:bg-gray-200">
          Shop Now
        </button>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
          {/* Example Product 1 */}
          <div className="product-card bg-white p-4 rounded-lg shadow-lg">
            <img
              src="https://workspace.com.pk/wp-content/uploads/2023/01/Visitor-Chair-10-1536x1536-1.jpg"
              alt="Product 1"
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="mt-4 text-xl font-semibold">Product 1</h2>
            <p className="mt-2 text-lg font-bold">$100</p>
            <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded">
              Add to Cart
            </button>
          </div>

          {/* Example Product 2 */}
          <div className="product-card bg-white p-4 rounded-lg shadow-lg">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiMlVCuuxv1kRnZ656vp42OgqgT0Jd17Rqk73JvIVJtG6JmB4HOuO7XhogXCaI_tUu6r8&usqp=CAU"
              alt="Product 2"
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="mt-4 text-xl font-semibold">Product 2</h2>
            <p className="mt-2 text-lg font-bold">$150</p>
            <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-center">
            "This store has the best products and customer service! Highly recommend!"
          </p>
          <p className="text-right mt-4 text-blue-500">- Happy Customer</p>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />  {/* Add Footer component here */}
    </div>
  );
}
