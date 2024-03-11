import React from 'react';
import Header from './Header';

function LandingPage() {
  return (
    <div className="grid grid-rows-[auto,1fr] bg-cover bg-center bg-local overflow-hidden bg-[url('./assets/Landing.jpg')]">
      <Header />
      <div className="overflow-hidden">
        <div className="h-screen flex flex-col justify-center items-center">
          <h1 className='text-5xl text-white font-semibold'>Codev</h1>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
