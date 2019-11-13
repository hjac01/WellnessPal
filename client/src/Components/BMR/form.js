import React from "react";
import "./bmr.css";


class Form extends React.Component {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input type="text" placeholder={this.props.placeholder} />
        <button id = "Male" type = "submit" className = "btn btn-primary"> Male </button>
        <button  id = "Female" type = "submit" className = "btn btn-primary"> Female </button>
        <button type = "submit" className = "btn btn-primary"> Submit </button>
      </div>
    );
  }
}


export default Form;
