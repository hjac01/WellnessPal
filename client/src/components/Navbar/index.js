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

            <li className="calcs">
                  <Link className=" calcs" to="/calcs"> Calculators</Link>
                </li>

            <li className="BMR">
                  <Link className=" BMR" to="/BMR">BMR Calculator</Link>
                </li>
                <li className="BMI">
                <Link className=" BMI" to="/BMI">BMI Calculator</Link>
              </li>

          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;

   
