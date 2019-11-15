import React, { Component } from "react";
import {
    Link
  } from "react-router-dom";
import "./style.css";


class Navbar extends Component {
  render() {
    return (
       
     <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/result">Articles</Link>
            </li>
            
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;

   
