import React from 'react';
import './Contact.css';

import myImage from '../Images/mehedi.jpg'

import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

const Contact = () => {
    return (
        <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>Md. Mehedi Hasan</h2>
                    <img 
                    src={myImage} 
                    alt="Put your image here"
                    style={{height: '250px'}}
                    />
                    <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>This is Md. Mehedi Hasan. I am a web developer with a very good knowledge of React and JavaScript. I know about the strongly typed languages also like C/C++, Java, Python etc. I always love to solve newer problems. I have solved many Problems from different online problem solving sites. So I am very much confident about this type of problem solving.</p>
                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr/>

                    <List>
                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                            <i className="fa fa-phone square" aria-hidden='true'></i>
                            +880 1765753030
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                            <i className="fa fa-envelope" aria-hidden='true'></i>
                            millathasan125@gmail.com
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                            <i className="fa fa-skype" aria-hidden='true'></i>
                            My Skype ID
                            </ListItemContent>
                        </ListItem>
                    </List>
                </Cell>
            </Grid>
        </div>
    );
};

export default Contact;