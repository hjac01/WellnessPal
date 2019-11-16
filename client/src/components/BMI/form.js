import React from "react";
import "./bmi.css";


class Form extends React.Component {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input type="text" placeholder={this.props.placeholder} />
        <button type = "submit" className = "btn btn-primary"> Submit </button>
      </div>
    );
  }
}


export default Form;