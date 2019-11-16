import React from "react";
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout, Header, HeaderRow, HeaderTabs, Tab, Drawer, Content, Footer} from 'react-mdl';
import Result from "./pages/Result"
import Wrapper from './components/Wrapper';
import Navbar from "./components/Navbar"
import Main from './components/main/index';
import { Link } from 'react-router-dom';


function App() {

  return (
      <div>
      <Layout fixedHeader fixedTabs>
        <Header className='header-color'>
            <HeaderRow title="Wellness-Pal" />
            <HeaderTabs className='header-color' ripple activeTab={1} onChange={(tabId) => { }}>
                <Tab>BMI calculator</Tab>
                <Tab>Log in</Tab>
                <Tab>Articles</Tab>
            </HeaderTabs>
        </Header>
        <Drawer style={{background: 'black'}}/>
        <Content>
          <Main />
        </Content>
    </Layout>
    <Footer />
=======
     <Navbar />
        <Wrapper>
          <Route exact path="/result" component={Result} />
      </Wrapper>
    </div>
  );
}


export default App;
