import React from 'react';
import './Resume.css';

import { Grid, Cell } from 'react-mdl';
import myImage from '../Images/mehedi.jpg';
import Education from '../Education/Education';
import Skills from '../Skills/Skills';

const Resume = () => {
    return (
        <div>
            <Grid>
                <Cell col={4}>
                    <div style={{textAlign: 'center'}}>
                        <img
                         src={myImage}
                         alt="Image is not loading..."
                         style={{height: '200px'}}/>
                    </div>

                    <h2 style={{paddingTop: '1em'}}>Md. Mehedi Hasan</h2>
                    <h4 style={{color: 'grey'}}>Programmer, Web Developer</h4>
                    <hr style={{borderTop: '3px solid blue', width: '65%'}}/>
                    <p>This is Md. Mehedi Hasan. I am a web developer with a very good knowledge of React and JavaScript. I know about the strongly typed languages also like C/C++, Java, Python etc. I always love to solve newer problems. I have solved many Problems from different online problem solving sites. So I am very much confident about this type of problem solving.</p>
                    <hr style={{borderTop: '3px solid blue', width: '65%'}}/>
                    <h5>Website</h5>
                    <a href="https://mehedi-hasan.netlify.app/">https://mehedi-hasan.netlify.app/</a>
                    <h5>Address</h5>
                    <p>Mirpur, Dhaka, Bangladesh</p>
                    <h5>Phone</h5>
                    <p>+880 1765753030</p>
                    <h5>Email</h5>
                    <p>millathasan125@gmail.com</p>
                    <hr style={{borderTop: '3px solid blue', width: '65%'}}/>
                </Cell>
                <Cell className="resume-right-col" col={8}>
                    <h2>Education</h2>
                    <Education 
                    startYear={2015}
                    endYear={2020}
                    schoolName={"Rajshahi University of Engineering & Technology"}
                    schoolDescription={"Rajshahi University of Engineering & Technology is one of the best universities of Bangladesh. It is a very well known university in Bangladesh."}
                    ></Education>
                    <hr style={{borderTop: '1px solid yellow'}}/>

                    <h2>Skills</h2>
                    <Skills 
                        skill="JavaScript"
                        progress={95}
                    />
                    <Skills 
                        skill="React"
                        progress={70}
                    />
                    <Skills 
                        skill="HTML/CSS"
                        progress={95}
                    />
                    <Skills 
                        skill="Node.js"
                        progress={30}
                    />
                </Cell>
            </Grid>
        </div>
    );
};

export default Resume;