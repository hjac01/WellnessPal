import React from 'react';
import Form from "./Components/BMI";
import BMForm from "./Components/BMR";
//import Jumbo from "./Components";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Result from "./pages/Result"
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Router>
    <div className="App">
    <Wrapper>
    <Route exact path="/result" component={Result} />
    </Wrapper>
     <Form /> 
     <BMForm />
    </div>
    </Router>
  );
}


export default App;
