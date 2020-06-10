import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import { Switch } from 'react-mdl';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

import LandingPage from './Components/LandingPage/LandingPage';
import Resume from './Components/Resume/Resume';
import AboutMe from './Components/AboutMe/AboutMe';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
function App() {
  return (
    <div>
      <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title={<a style={{textDecoration: 'none', color: 'white'}} href="/">MY PORTFOLIO</a>} scroll>
                <Navigation>
                    <a href="/">Home</a>
                    <a href="/about">About Me</a>
                    <a href="/resume">Resume</a>
                    <a href="/projects">My Projects</a>
                    <a href="/contact">Contact</a>
                </Navigation>
            </Header>
            <Drawer title={<a style={{textDecoration: 'none', color: 'orange'}} href="/">MY PORTFOLIO</a>}>
                <Navigation>
                <a href="/">Home</a>
                <a href="/about">About Me</a>
                <a href="/resume">Resume</a>
                <a href="/projects">My Projects</a>
                <a href="/contact">Contact</a>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Router>
                  <Switch>
                    <Route exact path="/">
                      <LandingPage></LandingPage>
                    </Route>
                    <Route path = "/resume">
                      <Resume></Resume>
                    </Route>
                    <Route path = "/about">
                      <AboutMe></AboutMe>
                    </Route>
                    <Route path = "/projects">
                      <Projects></Projects>
                    </Route>
                    <Route path = "/contact">
                      <Contact></Contact>
                    </Route>
                  </Switch>
                </Router>
            </Content>
        </Layout>
        </div>
    </div>
  );
}

export default App;
