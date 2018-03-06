import React from 'react';
import { Grid, Cell } from 'react-mdl';
import efe from '../Efe-pic.jpg';

const ResumeAvatar = () => (
    <div style={{textAlign: 'center'}}>
        <img 
            src={efe}
            alt="avatar"
            style={{height: '200px'}}
        />
    </div>
);

const ResumeContactDetails = () => (
    <div style={{textAlign: 'center'}}>
        <h2 style={{paddingTop: '0em'}}>John Micheal</h2>
        <h4 style={{color: 'grey'}}>JavaScript Developer</h4>
        <hr style={{borderTop: '3px solid black', width: '70%'}} />
        <p>TLorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker 
            including versions of Lorem Ipsum
        </p>
        <hr style={{borderTop: '3px solid black', width: '50%'}} />
        <h5>Address</h5>
        <p>Vorstrasse 91, Bremen</p>
        <h5>(123) 456-789</h5>
        <h5>Email</h5>
        <h5>john@gmail.com</h5>
        <h5>Web</h5>
        <p>MyWebSite</p>
    </div>
);

function Resume(){
      return(
          <div>
              <Grid>
                <Cell col={4}>
                  <ResumeAvatar />
                  <ResumeContactDetails />
                </Cell>
                <Cell className="resume-right-col" col={8}>Right Side</Cell>
              </Grid>
          </div>
      );
}

export default Resume;