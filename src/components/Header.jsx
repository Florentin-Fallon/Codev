import React from 'react'

function Header() {
  return (
    <div className='flex justify-between flex-row px-8 bg-transparent shadow-lg rounded-b-lg'>
      <a href='/'><img alt='logo' src='https://picsum.photos/200' className='w-24 h-12 my-4'/></a>
      <ul className='flex items-center gap-12'>
        <li><a href='/' className='hover:text-blue-300'>Accueil</a></li>
        <li><a href='/' className='hover:text-blue-300'>Services</a></li>
        <li><a href='/' className='hover:text-blue-300'>Team</a></li>
        <li><a href='/' className='hover:text-blue-300'>Contact</a></li>
      </ul>
    </div>
  )
}

export default Header