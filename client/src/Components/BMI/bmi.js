import React, { Component } from 'react';
import "./stylesBmi.css"

class Bmi extends Component {

  constructor(props) {
    super(props);
    this.state = { name: 'Guest', weight: 175, height: 70, bmi: '', message: '', optimalweight: '', time: new Date().toLocaleTimeString() };
    this.submitMe = this.submitMe.bind(this);
    this.heightchange = this.heightchange.bind(this);
    this.weightchange = this.weightchange.bind(this);
    this.change = this.change.bind(this);  
    this.ticker = this.ticker.bind(this); 
    this.blur = this.blur.bind(this); 
    this.calculateBMI = this.calculateBMI.bind(this); 
 }


 heightchange(e){
   this.setState({height: e.target.value});
   e.preventDefault();
 }

 blur(e){
  this.calculateBMI();
 }
  weightchange(e){
   this.setState({weight: e.target.value});
   e.preventDefault();
 }

 calculateBMI(){

     let heightSquared = (this.state.height  * this.state.height);
     let bmi = this.state.weight / heightSquared * 703;
     let low = Math.round(18.5 * heightSquared);                                                         
     let high = Math.round(24.99 * heightSquared);    
     let message = "";
     if( bmi >= 18.5  && bmi <= 24.99 ){
         message = "You are in a healthy weight range";
     }
     else if(bmi >= 25 && bmi <= 29.9){
       message = "You are overweight";
     }
     else if(bmi >= 30){
         message ="You are obese";
     }
     else if(bmi < 18.5){
       message = "You are under weight";
     }
     this.setState({message: message});  
     this.setState({optimalweight: "Your suggested weight range is between "+low+ " - "+high});    
     this.setState({bmi: Math.round(bmi * 100) / 100});   

 }

 submitMe(e) {
    e.preventDefault();
    this.calculateBMI();
 }

 ticker() {
   this.setState({time: new Date().toLocaleTimeString()})
 }


 change(e){
   e.preventDefault();
   console.log(e.target);
   this.setState({name: e.target.value});
 }

 render() {
   return (
   //  <container>
     <div className="Bmi">
     <div>
         <h2>BMI Calculator</h2>
       </div>
         <form onSubmit={this.submitMe}>
            <label>
            Enter your height in inches: 
           </label>
           <br></br>
           <input type="text" name="height" value={this.state.height} onBlur={this.blur} onChange={this.heightchange}   />
           <br></br>
            <label>
            Enter your weight in pounds : 
           </label>
           <br></br>
           <input type="text" name="weight" value={this.state.weight} onChange={this.weightchange}    />
           <br></br>
           <label>{this.state.checked} Hello {this.state.name}, Your BMI is {this.state.bmi} </label>
           <input type="submit" value="Submit"/>
         </form>
     
     </div>
   //  </container>
   );
 }
}

export default Bmi;