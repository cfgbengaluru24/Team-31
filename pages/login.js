import { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (userId == 'admin' && password == 'admin') {
      // Set session storage item to mark the user as authenticated
      window.sessionStorage.setItem('authenticated', 'true');
      router.push('/'); // Redirect to the dashboard
    } else {
      setError('Incorrect username or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-blue-100 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label htmlFor="userId" className="block text-base font-medium text-gray-700">User ID</label>
            <input
              type="text"
              id="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-700 text-gray-900 sm:text-sm"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-base font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-700 text-gray-900 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700 transition duration-150 ease-in-out"
          >
            Login
          </button>
          {error && <p className="mt-6 text-red-600 text-sm text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
