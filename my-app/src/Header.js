import * as React from 'react';
// import './Card.css'
import { useAuth0, User } from "@auth0/auth0-react";

function Header(props) {

    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

    return(
        
<div class='Header'>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>

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
</nav>

  </div> 

    );
    
}

export default Header;