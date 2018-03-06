import React from 'react';
import { Grid, Cell } from 'react-mdl';
import efe from '../Efe-pic.jpg';

//import '../App.css'

const Avatar = () => (   
    <img
        src={efe}
        alt="avatar"
        className="avatar-img"
    />
);

const SocialLinks = () => (
    <div className="social-links">
        <a href="http://linkedin.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
        </a>
        <a href="http://github.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
        </a>
        <a href="http://facebook.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook-square" aria-hidden="true" />
        </a>
    </div>
);

const Skills = () => (
    <div className="banner-text">
        <h1>Javascript Developer</h1>
        <hr />
        <p> React | Javascript | AngularJS </p>
        <SocialLinks />
    </div>
);

function Home() {
      return(
        <div style={{width: '800px', margin: 'auto'}}>
            <Grid className="home-grid">
                <Cell col={12}>
                    <Avatar />
                    <Skills />
                </Cell>
            </Grid>
        </div>
      );
}

export default Home;