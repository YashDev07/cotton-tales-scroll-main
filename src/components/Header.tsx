// src/components/Header.tsx
import React from "react";

const Header = () => {
  return (
    <header className="bg-white fixed top-0 left-0 w-full z-50 shadow-md h-[80px]">
      <div className="container mx-auto px-2 py-1 flex items-center h-full">
        <img
          src="/logo-full.png"
          alt="Outline India Full Logo"
          className="h-36 w-auto -mt-2"
        />
      </div>
    </header>
  );
};

export default Header;
