import React from 'react';
import { Grid, Cell } from 'react-mdl';
import './LandingPage.css';

import myImage from '../Images/mehedi.jpg';

const LandingPage = () => {
    return (
        <div style={{width: '100%', margin: 'auto'}}>
            <Grid className='landing-grid'>
                <Cell col={12}>
                    <img
                        src={myImage}
                        alt="picture required here"
                        className="profile-img"
                        />
                    <div className='banner-text'>
                        <h1>Md. Mehedi Hasan</h1>
                        <hr/>
                        <p>HTML | CSS | Bootstrap | JavaScript | React | MongoDB | Node.js | Java | python </p>
                    
                        <div className="social-link">
                            <a href="https://www.linkedin.com/in/mehedi-hasan-645939156/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                            </a>
                            <a href="https://github.com/mehedi143038" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"></i>
                            </a>
                            <a href="https://web.facebook.com/profile.php?id=100006376833001" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook-square" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </Cell>
            </Grid>
        </div>
    );
};

export default LandingPage;