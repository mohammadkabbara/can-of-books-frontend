import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './Header.css';
import LogoutButton from './LogoutButton';

class Header extends React.Component {
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <Link to="/"  style={{margin:'30px'}}>Home</Link>
        <Link to="/profile" style={{margin:'30px'}}>Profile</Link>
        {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
        <LogoutButton  />
        
      </Navbar>
    );
  }
}

export default Header;
