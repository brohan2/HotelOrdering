import React from 'react'
import logo from '../images/logo.png'
import '../App.css'
import {cvalue} from './Items'
// import { useState } from 'react'
console.log("hello")
console.log(cvalue);
// console.log(5);
export default function Navbar() {
    // useState [It,ft]=useState(0);
    // const number=cvalue;
    return(
        <>
            <div className="Navbars">
    <nav className="navbarr">
        <div className="logo">
            <img src={logo}alt=""/>
        </div>
        <div className="list">
            <ul className="lists">
                <li className="listitems"><a href="/">Home</a></li>
                <li className="listitems"><a href="/">Categories</a></li>
                <li className="listitems"><a href="/">Orders</a></li>
                <li className="listitems"><a href="/">Cart({cvalue})</a></li>
            </ul>
        </div>
        <div className="cart">
            <button><img src={logo} alt="cart"/></button>
        </div>
    </nav>
   
</div>
        </>
    )
}