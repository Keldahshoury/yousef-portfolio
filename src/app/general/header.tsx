import React from 'react';


const Header = () => {
  return (
    <header className="bg-gray-100 text-gray-500 font-[cursive] p-20 shadow w-full">
      <div className="flex w-full flex-col md:flex-row items-center justify-center">
        <nav className="flex space-x-10 text-2xl">
            <p>LOGO HERE</p>
            <p>Home</p>
            <p>Portfolio</p>
            <p>Pricing</p>
            <p>About</p>
        </nav>
      </div>
    </header>
  );
};

export default Header;


