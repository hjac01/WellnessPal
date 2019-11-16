import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Result from "./pages/Result"
import Wrapper from './components/Wrapper';
import Navbar from "./components/Navbar"



function App() {

  return (
    <Router>
      <div>
      <Navbar />
        <Wrapper>
          <Route exact path="/result" component={Result} />

          
        </Wrapper>
  
      </div>
    </Router>
  );
}


export default App;
