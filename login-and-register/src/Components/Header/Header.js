import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"


function Header() {
  return (
    <>
      <div className='header'>
        <div className='logo' style={{ fontStyle: "bold" }}> BOOK<span style={{ color: "green" }}> SHELF </span></div>
        <form>
          <label for="sreach">search</label>
          <input type="search" name='seach books'></input>
        </form>
        <ul>
          <li>
          <li id="login">
            <Link to="/login">LOGIN</Link>
          </li>
          <li>
            <Link to="/dashboard">DASHBOARD</Link>
          </li>
          <li>
            <Link to="/books">BOOKS</Link>
          </li>
           <li id="about">
            <Link to="/about">ABOUT</Link>
          </li>
          {/* li id="home">
            <Link to="/div.log">Home</Link> */}

          </li> 
        </ul>
      </div>
    </>

        


  )
}

export default Header