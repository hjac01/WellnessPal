import React, { Component } from "react";
import Articles from '../components/Articles/index';



class Result extends Component {
  state = {
        title: "",
        link: ""
     };
 
  
    componentDidMount() {
      fetch("https://old.reddit.com/r/webdev/")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              title: result.title,
              link: result.link
            });
          },
          
        )
    }
  
  
  render() {
    return (
      <div>
          <Articles results={this.state.results} />
          
      </div>
        );
    }
}


export default Result;
