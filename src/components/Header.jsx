import React from 'react';

function Header() {
  return (
    <div className="flex justify-between flex-row px-8 bg-transparent shadow-2xl rounded-b-lg">
      <a href="/"><img alt="logo" src={require('../assets/logo.png')} className="w-24 h-auto my-4" /></a>
      <ul className="flex items-center gap-12 text-white">
        <li><a href="/" className="hover:text-red-400 ">Accueil</a></li>
        <li><a href="/" className="hover:text-red-400">Services</a></li>
        <li><a href="/" className="hover:text-red-400">Team</a></li>
        <li><a href="/" className="hover:text-red-400">Contact</a></li>
      </ul>
    </div>
  );
}

export default Header;
