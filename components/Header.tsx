import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-blue-600 text-white" style={{backgroundColor: 'hsla(210, 100%, 50%, 0.75)'}}>
      <h1 className="text-2xl font-bold">My App</h1>
      <nav>
        <a href="#" className="mr-4 hover:text-blue-300" style={{color: 'rgb(255, 255, 255)'}}>Home</a>
        <a href="#" className="hover:text-blue-300" style={{color: 'rgb(255, 255, 255)'}}>About</a>
      </nav>
    </header>
  );
};

export default Header;