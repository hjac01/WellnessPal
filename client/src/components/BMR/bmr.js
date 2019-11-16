import React, { Component } from 'react';
import "./bmr.css"

class Bmr extends Component {

  constructor(props) {
    super(props);
    this.state = { age: 41, weight: 175, height: 70, bmr: '', gender:''};
    //this.genderChange = this.genderChange.bind(this);
    this.submitMe = this.submitMe.bind(this);
    this.change = this.change.bind(this);  
    this.ticker = this.ticker.bind(this); 
    this.blur = this.blur.bind(this); 
   this.calculateBMR = this.calculateBMR.bind(this); 
}

changeAll=(e)=> {
  const{name,value}=e.target;
  this.setState({[name]:value})
}

 blur(e){
  this.calculateBMR();
 }
  
 calculateBMR(gender){
// If you’re a man, your BMR is equal to: 66 + (6.23 x weight in pounds) + (12.7 x height in inches) - (6.8 x age in years).
// let MBmr = 66 + (6.23 * this.state.weight) + (12.7 * this.state.height) - (6.8 * this.state.agechange) }

     if (gender == "male") {
        

        let height = (this.state.height  * 12.7);
        let weight = (this.state.weight * 6.23) + 66;
        let age = (this.state.age * 6.8)
        let total = weight + height - age
        this.setState({bmr:total})
      } else {
        
        // let FBmr = 655 + (4.23 * this.state.weight) + (4.7 * this.state.height) - (4.7 * this.state.agechange)
        // If you're a woman, your BMR is equal to: 655 + (4.35 x weight in pounds) + (4.7 x height in inches) - (4.7 x age in years).
        let Fheight = (this.state.height  * 4.35);
        let Fweight = (this.state.weight * 6.23) + 66;
        let Fage = (this.state.age * 6.8)
        let ftotal = Fweight + Fheight - Fage
        this.setState({bmr:ftotal})

     }
    }
// fat arrow functins
 submitMe(e) {
    e.preventDefault();
    this.calculateBMR(this.state.gender);
    console.log(this.state.gender)
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
   <container id = "calcs">
  
     <div className="Bmr">
     <div>
         <h2>BMR Calculator</h2>
       </div>
         <form onSubmit={this.submitMe}>
         <label>
         Enter your Age: 
        </label>
        <input type="text" name="age" value={this.state.age} onBlur={this.blur} onChange={this.changeAll}   />
        <br></br>
            <label>
            Enter your height in inches: 
           </label>
           <br></br>
           <input type="text" name="height" value={this.state.height} onBlur={this.blur} onChange={this.changeAll}   />
           <br></br>
            <label>
            Enter your weight in pounds : 
           </label>
           <br></br>
           <input type="text" name="weight" value={this.state.weight} onChange={this.changeAll}    />
           <br></br>
           <label>{this.state.checked} Hello {this.state.name}, Your BMR is {this.state.bmr} </label>
           <input onChange = {this.changeAll} name = "gender" type="radio" value="male"/>male <br/>
           <input onChange = {this.changeAll} name = "gender" type="radio" value="female"/>female <br/>
           <input type="submit" value="Submit"/>
           
         </form>
     
     </div>
     </container>
   
   );
 }
}

export default Bmr;