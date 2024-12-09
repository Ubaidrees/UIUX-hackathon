'use client';
import Link from 'next/link';  // Add this import at the top



export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-semibold">Logo</h1>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {/* Home link */}
                <Link href="/home" className="text-gray-900 hover:text-blue-500">Home</Link>

                {/* Products link */}
                <Link href="/products" className="text-gray-900 hover:text-blue-500">Products</Link>
                {/* Cart link */}
                <Link href="/cart" className="text-gray-900 hover:text-blue-500">Cart</Link>
                {/* Login link */}
                <Link href="/login" className="text-gray-900 hover:text-blue-500">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
