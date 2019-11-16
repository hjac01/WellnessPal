import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout, Header, HeaderRow, HeaderTabs, Tab, Drawer, Content, Footer} from 'react-mdl';
import Result from "./pages/Result";
import Wrapper from './components/Wrapper';
import Navbar from "./components/Navbar";





function App() {

  return (
    <Router>
      <div>
      <Navbar />
        <Wrapper>
          <Route exact path="/result" component={Result} />
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
    </Wrapper>
      </div>
      </Router>
  );
}


export default App;
