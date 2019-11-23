import React from "react";
import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout, Header, HeaderRow, HeaderTabs, Tab, Drawer, Content, Footer} from 'react-mdl';
import Result from "./pages/Result";
import calcs from "./pages/calcs";
import Wrapper from './components/Wrapper';
import Navbar from "./components/Navbar"
import Main from './components/Main/index';
// import Main from './components/Main';
import BMR from './components/BMR';
import BMI from './components/BMI';

import { Link } from 'react-router-dom';






function App() {

  return (
    <Router>
      <div>
      <Navbar />
      <Route exact path="/result" component={Result} />
      <Route exact path="/calcs" component={calcs} />
      <Route exact path="/BMR" component={BMR} />
      <Route exact path="/BMI" component={BMI} />
        <Wrapper>
       
    

      <Layout fixedHeader fixedTabs>
        <Header className='header-color'>
            <HeaderRow title="Wellness-Pal" />
            <HeaderTabs className='header-color' ripple activeTab={1} onChange={(tabId) => { }}>
                <Tab>BMI calculator</Tab>
                <Tab>BMR calculator</Tab>
                <Tab>Log in</Tab>
                <Tab eventkey="/result"title="Articles">Article</Tab>
            </HeaderTabs>
        </Header>
        <Drawer style={{background: 'black'}}/>
        <Content>
          <Main />
      
        </Content>
    </Layout>
    <Footer />


    </Wrapper>
      </div>
      </Router>

  );
}


export default App;
