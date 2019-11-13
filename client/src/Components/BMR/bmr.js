import React, { Component } from 'react';
import "./bmr.css"

class Bmr extends Component {

  constructor(props) {
    super(props);
    this.state = { age: 41, weight: 175, height: 70, bmr: ''};
    this.submitMe = this.submitMe.bind(this);
    this.agechange = this.agechange.bind(this);
    this.heightchange = this.heightchange.bind(this);
    this.weightchange = this.weightchange.bind(this);
    this.change = this.change.bind(this);  
    this.ticker = this.ticker.bind(this); 
    this.blur = this.blur.bind(this); 
    this.calculateBMR = this.calculateBMR.bind(this); 
}


agechange(e){
  this.setState({age: e.target.value});
  e.preventDefault();
}


 heightchange(e){
   this.setState({height: e.target.value});
   e.preventDefault();
 }

 blur(e){
  this.calculateBMR();
 }
  weightchange(e){
   this.setState({weight: e.target.value});
   e.preventDefault();
 }

 calculateBMR(){
//If you’re a man, your BMR is equal to: 66 + (6.23 x weight in pounds) + (12.7 x height in inches) - (6.8 x age in years).
let MBmr = 66 + (6.23 * this.state.weight) + (12.7 * this.state.height) - (6.8 * this.state.agechange) }

     if () {
        

        // let height = (this.state.height  * 12.7);
        // let weight = (this.state.weight * 6.23) + 66;
        // let age = (this.state.age * 6.8)
        // If you're a woman, your BMR is equal to: 655 + (4.35 x weight in pounds) + (4.7 x height in inches) - (4.7 x age in years).

     } else {

        // let FBmr = 655 + (4.23 * this.state.weight) + (4.7 * this.state.height) - (4.7 * this.state.agechange)

        // let Fheight = (this.state.height  * 4.35);
        // let Fweight = (this.state.weight * 6.23) + 66;
        // let Fage = (this.state.age * 6.8)

     }


 submitMe(e) {
    e.preventDefault();
    this.calculateBMR();
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
  //   <container>
     <div className="Bmr">
     <div>
         <h2>BMR Calculator</h2>
       </div>
         <form onSubmit={this.submitMe}>
         <label>
         Enter your Age: 
        </label>
        <br></br>
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
           <input type="submit" value="Male"/>
           <input type="submit" value="Female"/>
           <input type="submit" value="Submit"/>
         </form>
     
     </div>
    // </container>
   );
 }
}

export default Bmr;

//If you’re a man, your BMR is equal to: 66 + (6.23 x weight in pounds) + (12.7 x height in inches) - (6.8 x age in years).