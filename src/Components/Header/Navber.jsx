import React from 'react'
import heroImg from '../../assets/logo.png'
import github from '../../assets/github.png'
import { Link, NavLink } from 'react-router';


const Navber = () => {
     const linkStyle =
    "px-3 py-2 text-black border-b-2 border-transparent hover:border-[#9F62F2] transition duration-200";
  const activeStyle = "text-[#9F62F2] border-[#9F62F2]";
  
  return (
    <div className="navbar bg-base-100 shadow-sm">
 <div className='container mx-auto flex justify-between items-center'>
     <div className="navbar-start container mx-auto">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to='/' end  className={({isActive})=>`${linkStyle} ${isActive?activeStyle:''}`}> Home</NavLink></li>

        <li><NavLink to='/apps' className={({isActive})=>`${linkStyle} ${isActive?activeStyle:''}`}> Apps</NavLink></li>

        <li><NavLink to='/install' className={({isActive})=>`${linkStyle} ${isActive?activeStyle:''}`}> Installation</NavLink></li>
      </ul>
    </div>
    <Link className="btn btn-ghost text-xl"><img className='h-[50px] w-[50px]' src={heroImg} alt="" />HERO.IO</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     
        <li><NavLink to='/' end  className={({isActive})=>`${linkStyle} ${isActive?activeStyle:''}`}> Home</NavLink></li>

        <li><NavLink to='/apps' className={({isActive})=>`${linkStyle} ${isActive?activeStyle:''}`}> Apps</NavLink></li>

        <li><NavLink to='/install' className={({isActive})=>`${linkStyle} ${isActive?activeStyle:''}`}> Installation</NavLink></li>
        
    </ul>
  </div>
  <div className="navbar-end container mx-auto">
    <a href='https://github.com/sohanur20212/' target='_blank'  className='bg-gradient-to-r to-[#9F62F2] from-[#632EE3] px-4 py-1 rounded-md text-white flex gap-2'><img src={github} />Contribute</a>
  </div>
 </div>
</div>
  )
}

export default Navber