import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Routes from './pages/routes';

import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Uses a transparent header that draws on top of the layout's background */}
        <div className="layout-div">
            <Layout>
                <Header className="header-color" transparent title="Portfolio">
                    <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title="Portfolio">
                    <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
               
                <Routes />
                <Content />
            </Layout>
        </div>
      </div>
    );
  }
}

export default App;
