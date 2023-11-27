import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import MainAbout from './MainAbout';
import Navbar from '../../layout/Navbar';
import Dropdown from '../../components/Dropdown';

function About() {
  return (
    <>
      {/* <Navbar/> */}
      <Outlet />
    </>
  );
}

export default About;