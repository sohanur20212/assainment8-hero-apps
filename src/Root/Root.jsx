import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navber from '../Components/Header/Navber';
import Footer from '../Components/Footer.jsx/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading"; 

  return (
    <div className='flex flex-col min-h-screen'>
      <Navber />

      
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-20 z-50">
          
          <span className="loading loading-bars loading-xl"></span>
        </div>
      )}

      <div className='container mx-auto my-10 flex-1'>
        <Outlet />
      </div>

      <Footer />
      <ToastContainer />
    </div>
  )
}

export default Root;
