import React from 'react';
import "./Skills.scss";
import ProgressBar from '../../components/ProgressBar/Progress_bar';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Skills() {
    return (
        <div className='skills'>
                <Helmet>
                    <title>Rajababu Shah - Skills </title>
                </Helmet>
                <p className='skills-intro' >Hello! I'm <b>Rajababu Shah</b> Junior Web Developer specializing in front end developmnet with <span style={{ color: "red" }}>React.js</span>. Experienced with all libraries of frontend developemnt cycle for <span style={{ color: "red" }}>dynamic web projects.</span> Well-versed in numerous programming languages including HTML5, Node.js , javascript and python. <br /><br />Hands on experience on Web Development. Quick learner and ability to work with minimum guidance.
                </p>
                <hr />

                <div className="skills-bars">
                    <div className="skill">
                        <p>HTML</p>
                        <p>95%</p>
                    </div>
                    <div className="bar">
                        <ProgressBar value={`95%`} bgColor={'red'} />
                    </div>
                    <div className="skill">
                        <p>CSS</p>
                        <p>80%</p>
                    </div>
                    <div className="bar">
                        <ProgressBar value={`80%`} bgColor={'green'} />
                    </div>
                    <div className="skill">
                        <p>JavaScript</p>
                        <p>60%</p>
                    </div>
                    <div className="bar">
                        <ProgressBar value={`60%`} bgColor={'blue'} />
                    </div>
                    {/* C language  */}
                    <div className="skill">
                        <p>C</p>
                        <p>85%</p>
                    </div>
                    <div className="bar">
                        <ProgressBar value={`85%`} bgColor={'black'} />
                    </div>
                    <div className="skill">
                        <p>ReactJS</p>
                        <p>75%</p>
                    </div>
                    <div className="bar">
                        <ProgressBar value={`90%`} bgColor={'yellow'} />
                    </div>
                    <div className="skill">
                        <p>Python</p>
                        <p>90%</p>
                    </div>

                    <div className="bar">
                        <ProgressBar value={`95%`} bgColor={'pink'} />
                    </div>
                    <div className="skill">
                        <p>Bootstrap</p>
                        <p>90%</p>
                    </div>
                    <div className="bar">
                        <ProgressBar value={`90%`} bgColor={'orange'} />
                    </div>
                    <div className="skill">
                        <p>NodeJS</p>
                        <p>50%</p>
                    </div>
                    <div className="bar">
                        <ProgressBar value={`50%`} bgColor={'cyan'} />
                    </div>
                    <div className="skill">
                        <p>MongoDB</p>
                        <p>30%</p>
                    </div>
                    <div className="bar">
                        <ProgressBar value={`30%`} bgColor={'magenta'} />
                    </div>
                    <div className="skill">
                        <p>NextJS</p>
                        <p>35%</p>
                    </div>
                    <div className="bar">
                        <ProgressBar value={`35%`} bgColor={'yellow'} />
                    </div>
                    <div className="skill">
                        <p>Wordpress</p>
                        <p>40%</p>
                    </div>
                    <div className="bar">
                        <ProgressBar value={`40%`} bgColor={'brown'} />
                    </div>
                </div>
        </div>
    )
}

export default Skills