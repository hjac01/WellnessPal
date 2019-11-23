import React, { Component } from "react";
import API from "../utils/api"
import Articles from '../components/Articles';



class Result extends Component {
  state = {
        title: "",
        link: "",
        results:[]
     };
 
  
    componentDidMount() {
      fetch("https://old.reddit.com/r/webdev/")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              result:this.state.result.push({
                title: result.title,
                link: result.link
              })
              
            });
          },
          
        )
      API.scrape().then(results=>{
        this.setState({results:results.data})
      })
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
