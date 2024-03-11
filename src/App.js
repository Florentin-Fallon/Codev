import React from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className=''>
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
