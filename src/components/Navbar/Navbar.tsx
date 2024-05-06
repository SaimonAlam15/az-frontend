import { useContext } from 'react';

import AuthContext from '../../context/AuthContext';
import './Navbar.css'

import 'bootstrap/dist/css/bootstrap.min.css'

export const Navbar = () => {
  const {user, logout} = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">ZStore</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/products">Products</a>
        </li>
      </ul>
      <div className="nav-item" id="auth-div">
        {user && <p>Welcome {user.first_name}</p>}
        <p>
          {user ? (
            <p className="nav-link" onClick={logout}>Logout</p>
          ) : (
          <a type="button" className="btn btn-primary" href="/login" target="_blank">Login/Register</a>
          )}
        </p>
      </div>
    </div>
  </div>
</nav>
  )
}
