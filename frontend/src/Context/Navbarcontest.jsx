// NavbarContext.jsx

import React, { createContext, useContext, useState } from 'react';

const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [isNavbarVisible, setNavbarVisibility] = useState(true);

  const hideNavbar = () => setNavbarVisibility(false);
  const showNavbar = () => setNavbarVisibility(true);

  return (
    <NavbarContext.Provider value={{ isNavbarVisible, hideNavbar, showNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('useNavbar must be used within a NavbarProvider');
  }
  return context;
};
