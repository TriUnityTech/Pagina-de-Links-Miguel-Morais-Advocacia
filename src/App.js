import React, { useState, useEffect } from 'react';
import './App.css';
import BtnLinks from './components/BtnLinks';
import { motion } from 'framer-motion';

function App() {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = '/adv.webp';
    img.onload = () => {
      setTimeout(() => {
        setBgLoaded(true);
      }, 1000); 
    };
  }, []);

  return (
    <div className={`App ${bgLoaded ? '' : 'hidden'}`}>
      <header className="App-header">
        <div className="flex items-start justify-center bg-cover bg-center" style={{ backgroundImage: "url('/bg2.jpg')" }}>
          {!bgLoaded && (
            <div className="loader">Loading...</div>
          )}
          {bgLoaded && (
            <div className='flex  justify-center items-center flex-col'>
              <motion.img 
                src='/adv.webp'
                alt="Adv" 
                className='w-64' 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 4 }}
              />
              <BtnLinks />
              <div className='mt-6 flex flex-col gap-4'>
                <motion.img 
                  src='/link1.webp'
                  alt="Link 1" 
                  className='w-80 cursor-pointer' 
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 1 }} 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
                <motion.img 
                  src='/link3.webp'
                  alt="Link 2" 
                  className='w-80 cursor-pointer' 
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 1 }} 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
                <motion.img 
                  src='/link3.webp'
                  alt="Link 3" 
                  className='w-80 cursor-pointer' 
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 1 }} 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
                <motion.img 
                  src='/link4.webp'
                  alt="Link 4" 
                  className='w-80 cursor-pointer' 
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 1 }} 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              </div>
              <div className='py-8'>
                <p className='text-white text-xs'>Todos os direitos Reservados por Miguel Morais ©</p>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
