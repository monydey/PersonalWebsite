import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import efe from '../Efe-pic.jpg';


const NameAvatar = () => (
    <img 
        src={efe}
        alt="avatar"
        style={{height: '250px'}}
    />
)

const NameDetails = () => (
    <p style={{width: "754", margin: "auto", paddingTop: "1em"}}>
        Hello World, how is the weather today for you
        Hello World, how is the weather today for you
        Hello World, how is the weather today for you
        Hello World, how is the weather today for you
    </p>
)

const Name = () => (
    <Cell col={6}>
        <h2>John Micheal</h2>
        <NameAvatar />
        <NameDetails />
    </Cell>
)

const ContactList = () => (
    <div className="contact-list">
        <List>
            <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (123) 456-7890
                </ListItemContent>
            </ListItem>
            <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true" />
                    (123) 456-7890
                </ListItemContent>
            </ListItem>
            <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    monydey@gmail.com
                </ListItemContent>
            </ListItem>
        </List>
    </div>
);

const ContactDetails = () => (
    <Cell col={6}>
        <h2>Contact Me</h2>
        <hr />
        <ContactList />
    </Cell>
)

function Contact () {
    return(
        <div className="contact-body">
            <Grid className="contact-grid">
                <Name />
                <ContactDetails />
            </Grid>
        </div>
    );
  
}

export default Contact;