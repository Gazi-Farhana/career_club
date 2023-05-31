import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-purple-50'>
      <navbar className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/applied'>
                  Applied Jobs
                </Link>
              </li>
              <li>
                <Link to='/statistics'>Statistics</Link>
              </li>
              <li>
                <Link to='/blog'>Blog</Link>
              </li>
            </ul>
          </div>
          <a className="normal-case lg:text-4xl font-bold">Career<span className='text-purple-400'>C</span>lub</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link className='text-purple-400 font-medium' to="/">Home</Link></li>
            <li>
              <Link className='font-medium' to="/applied">
                Job Applied
              </Link>
            </li>
            <li><Link className='font-medium' to="/statistics">Startistics</Link></li>
            <li><Link className='font-medium' to="/blog">Blog</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn-purple">Start Applying</button>
        </div>
      </navbar>

    </div>
  );
};

export default Navbar;