import React from 'react';
import "bmi.css"
import "./bmi"


class Form extends React.Component {
    render() {
        return(
            <div></div>
        )
    }
}

render() {
    return(
        <div>
            <label>{ this.props.label }</label>
            <input type="text" placeholder={this.props.placeholder} />
        </div>
    )
}

class Button extends React.Component {
    render() {
        return(
            <div></div>
        )
    }
}

export default Button;

export default Form;