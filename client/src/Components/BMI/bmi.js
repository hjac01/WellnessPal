import React, { Component } from 'react';


class Bmi extends Component {

  constructor(props) {
    super(props);
    this.state = { name: 'Guest', weight: 90, height: 180, bmi: 27, message: '', optimalweight: '', time: new Date().toLocaleTimeString() };
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

//  componentDidMount(){
//    setInterval(this.ticker, 60000);
//  }

 change(e){
   e.preventDefault();
   console.log(e.target);
   this.setState({name: e.target.value});
 }

 render() {
   return (
     <div className="Bmi">
       <div className="Bmi-header">
         <h2>BMI Calculator</h2>
       </div>
         <form onSubmit={this.submitMe}>
            <label>
            Enter your height in inches: 
           </label>
           <input type="text" name="height" value={this.state.height} onBlur={this.blur} onChange={this.heightchange}   />
            <label>
            Enter your weight in pounds : 
           </label>
           <input type="text" name="weight" value={this.state.weight} onChange={this.weightchange}    />
           <label>{this.state.checked} Hello {this.state.name}, How are you my friend? It's currently  {this.state.time} where you are living. Your BMI is {this.state.bmi} </label>
             <label>{this.state.message}</label>
             <label>{this.state.optimalweight}</label>
            
           <input type="submit" value="Submit"/>
         </form>
     
     </div>
   );
 }
}

export default Bmi;