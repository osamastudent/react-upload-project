import React, {Component} from "react";
import { Link } from "react-router-dom";

class Navbaru extends Component{

    render(){
    return(

<>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
      <li>
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li>
              <Link  className="nav-link" to="/contact">contact us</Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">about Us</Link>
            </li>

            <li>
              <Link className="nav-link" to="/myname">myname Us</Link>
            </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="/about">about</Link></li>
            <li><Link class="dropdown-item" to="/contact">Contact us</Link></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>

        
    

    

    );
    }
}

export default Navbaru;