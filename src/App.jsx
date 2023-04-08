import React from 'react';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
      <Header></Header>

      <div className='min-h-[calc(100vh-137px)]'>
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;