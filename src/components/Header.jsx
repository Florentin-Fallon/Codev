import React from 'react'

function Header() {
  return (
    <div className='flex justify-between flex-row px-8 bg-transparent shadow-lg rounded-b-lg'>
      <a href='/'><img alt='logo' src='https://picsum.photos/200' className='w-24 h-12 my-4'/></a>
      <ul className='flex items-center gap-12 text-white'>
        <li><a href='/' className=''>Accueil</a></li>
        <li><a href='/' className=''>Services</a></li>
        <li><a href='/' className=''>Team</a></li>
        <li><a href='/' className=''>Contact</a></li>
      </ul>
    </div>
  )
}

export default Header