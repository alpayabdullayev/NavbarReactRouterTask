import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

import About from '../pages/About'; 

function Layout() {
  return (
    <>
      <Navbar/>
      <Outlet />
    </>
  );
}

export default Layout;
