import React from 'react';
 import {Link} from 'react-router-dom';
 import "./Navbar.css";
// import {
//   Nav,
//   NavLink,
//   Bars,
//   NavMenu,
//   NavBtn,
//   NavBtnLink,
// } from './NavbarElements';
  
const Navbar = () => {
  return (
    <div>
    <div className="nav">
      <Link to="/">Home</Link>
    </div>
    <div>
      <Link to="/sheeps">Login</Link>
      <Link to="/goats">SignUp</Link>
    </div>
    </div>
 
    // <>
    //   <Nav>
    //     <Bars />
  
    //     <NavMenu>
    //       <NavLink to='/' activeStyle>
    //         Home
    //       </NavLink>
    //       {/* <NavLink to='/events' activeStyle>
    //         Events
    //       </NavLink>
    //       <NavLink to='/annual' activeStyle>
    //         Annual Report
    //       </NavLink>
    //       <NavLink to='/team' activeStyle>
    //         Teams
    //       </NavLink> */}
    //       {/* <NavLink to='/login' activeStyle>
    //         Login
    //       </NavLink>

    //       <NavLink to='/signup' activeStyle>
    //         Sign Up
    //       </NavLink> */}
    //       {/* Second Nav */}
    //       {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
    //     </NavMenu>
    //     <NavBtn>
    //       <NavBtnLink to='/login'>Login</NavBtnLink>
    //       <NavBtnLink to='/signup'>Sign In</NavBtnLink>
    //     </NavBtn>
    //   </Nav>
    // </>
  );
};
  
export default Navbar;