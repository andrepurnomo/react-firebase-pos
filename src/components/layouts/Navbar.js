import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3">
      <div className="container">
        <Link to="/" className="navbar-brand">
          FREE POS
        </Link>
        <div className="navbar-nav mr-auto">
          <NavLink to="/orders" className="nav-item nav-link">
            Dashboard
          </NavLink>
          <NavLink to="/products" className="nav-item nav-link">
            Products
          </NavLink>
          <NavLink to="/pos" className="nav-item nav-link">
            Point of Sale
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
