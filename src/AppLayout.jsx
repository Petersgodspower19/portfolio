import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function AppLayout() {
  return (
    <div className='flex flex-col min-h-screen'>
     
      <Header />
      
     
      <main className="pt-[72px] flex-grow"> 
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
