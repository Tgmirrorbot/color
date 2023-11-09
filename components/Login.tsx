import React from 'react';

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="mb-4 text-3xl font-bold text-gray-700">Login</h1>
      <form className="p-6 bg-white rounded shadow-lg">
        <input className="w-full p-2 mb-3 border rounded" style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}} type="text" placeholder="Username" />
        <input className="w-full p-2 mb-3 border rounded" style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}} type="password" placeholder="Password" />
        <button className="w-full p-2 text-white bg-blue-600 rounded hover:bg-blue-700" style={{backgroundColor: '#1e90ff'}} type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;