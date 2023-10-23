import React from 'react';
import "./Home.scss"

const Home = () => {

    let imgURL;
    let imgRand = () => {
        let x = ((Math.round(Math.random() * 10)) % 2 == 0) ? "1" : "0";

        if (navigator.onLine) {
            if (x == 1) {
                let x = ((Math.round(Math.random() * 10)) % 2 == 0) ? "1" : "0";
                if (x == 1) {
                    imgURL = "https://i.ibb.co/CsmPMzS/Screenshot-2023-10-23-122022-fotor-20231023122329.png";
                } else {
                    let x = ((Math.round(Math.random() * 10)) % 2 == 0) ? "1" : "0";
                    if (x == 1) {
                        imgURL = "https://i.ibb.co/HtYWcjm/Kiran.jpg";
                    } else {
                        let x = ((Math.round(Math.random() * 10)) % 2 == 0) ? "1" : "0";
                        if (x == 1) {
                            imgURL = "https://i.ibb.co/RCP6CL3/Me-Profile-Pic.jpg";
                        } else {
                            imgURL = "https://i.ibb.co/nL6yNqf/Screenshot-2023-10-23-122022-fotor-20231023122356.png";
                        }
                    }
                }
            }
        } else {
            imgURL = "/static/profile.jpg";
        }
    }
    imgRand();


    return (
        <div className='Home'>

            <div className='profile-intro'>
                <h2>Rajababu Shah</h2>
                <h5>Frontend Web Developer</h5>
            </div>

            <div className="profile-card">
                <img src={imgURL} id='profile-img' alt="PROFILE" />
            </div>

            <div className="profile-details">
                <h4>Hello & Welcome</h4>
                <h2>I'm Rajababu Shah</h2>
                <h5>Developing Web Application</h5>
                <hr />
                <table>
                    <tbody>
                        <tr>
                            <td className='index'>
                                <span className='icon'>
                                    <i className="fa-solid fa-calendar-day"></i>
                                </span>
                                Birth Date
                            </td>
                            <td className='value'>13th May</td>
                        </tr>
                        <tr>
                            <td className='index'>
                                <span className="icon">
                                    <i className="fa-solid fa-location-arrow"></i>
                                </span>
                                Address
                            </td>
                            <td className='value'>New Delhi, India</td>
                        </tr>
                        <tr>
                            <td className='index'>
                                <span className="icon">
                                    <i className="fa-solid fa-at"></i>
                                </span>
                                Email
                            </td>
                            <td className='value'>rajababushah.in@gmail.com</td>
                        </tr>
                        <tr>
                            <td className='index'>
                                <span className="icon">
                                    <i className="fa-solid fa-phone-volume"></i>
                                </span>
                                Phone
                            </td>
                            <td className='value'>(+91)7319806300</td>
                        </tr>
                    </tbody>
                </table>
                <hr style={{ marginBottom: "10px" }} />
                <q className='quote'>THE ENDING, TO ALL STORIES IS WRITTEN BY DESTINY</q>
            </div>
        </div>
    )
}

export default Home;