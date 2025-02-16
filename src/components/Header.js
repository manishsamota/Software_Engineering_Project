import * as React from 'react';

import './Header.css'
import { useAuth0, User } from "@auth0/auth0-react";


function Header() {

  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  

    return (
     
      

      <div className="App">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">

    <img src="Ms_Logo.png" class="img-fluid logo-design" alt="..." />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/about"> About Us</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/contact" >Contact Us</a>
        </li>
      </ul>
      <form class="d-flex mx-1">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>

      <ul class="navbar-nav mb-2 mx-5 mb-lg-0">
    
      { isAuthenticated && ( <div>{User.name}</div> ) }
     
           <li class="nav-item">

           <button type='button' class='btn btn-outline-primary mx-2' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
            </button>
          </li>
   
        <li class="nav-item">
        <button type='button' class='btn btn-outline-primary mx-2' onClick={() => loginWithRedirect()}>
          Log In
          </button>    
          </li>
    
        </ul>
    </div>
  </div>
</nav>

      </div>
    );
  }
  
  export default Header;