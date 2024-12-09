import Footer from '../../../components/footer';  // Adjusted import path for the footer
export default function Login() {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
          <h1 className="text-3xl font-bold mb-4">Login</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-semibold">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-lg font-semibold">Password</label>
              <input
                type="password"
                id="password"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="mb-4 flex justify-between items-center">
              <button className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-600">
                Login
              </button>
              <a href="/register" className="text-blue-500 hover:underline">Register</a>
            </div>
          </form>
        </div>
      </div>
    );
  }
  