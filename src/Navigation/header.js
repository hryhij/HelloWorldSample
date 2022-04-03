import React from 'react'
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons';
import {Link} from 'react-router-dom'


function Header() {
  return (   
        <nav className='inavbar d-flex bd-highlight'>
            <h2 className='projname p-2 flex-grow-1 bd-highlight d-flex justify-content-start'><span>K-Pop Profiles</span></h2>

            <div className='inavbar-links p-2 bd-highlight'>
                <Link to='/' className='inavlink btn btn-outline-secondary'>Home</Link>
                <Link to='/Post' className='inavlink btn btn-outline-secondary'>Posts</Link>
                <Link to='/Groups' className='inavlink btn btn-outline-secondary'>Groups</Link>
                <Link to='/AddGroups' className='inavlink btn btn-outline-secondary'>Add Groups</Link>
                <Link to='/AddPost' className='inavlink btn btn-outline-secondary'><i className="bx bx-message-square-add"></i> Add post</Link>
                <a className='inavlink btn btn-outline-secondary'>About</a>
            </div>
        </nav>
  )
}

export default Header
