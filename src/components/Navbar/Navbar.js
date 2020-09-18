import React from 'react'
import './Navbar.css'
import { FaUserCircle } from "react-icons/fa";

const Navbar = () =>{
    return(
        <div className='Navbar'>
            <p className='navbar_name' >Navbar</p>
            <p> Ramzi <span> <FaUserCircle /> </span> </p>
        </div>
    );
}

export default Navbar