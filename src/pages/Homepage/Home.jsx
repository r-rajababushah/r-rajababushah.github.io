import React from 'react';
import "./Home.scss"
import { Helmet } from 'react-helmet-async';

const Home = () => {
    let imgURL = "/static/profile.jpg";

    return (
        <div className='Home'>
            <Helmet>
                <title>Rajababu Shah - Home</title>
            </Helmet>
            <div className="profile-card">
                <img src={imgURL} id='profile-img' alt="Rajababu Shah" />
            </div>

            <div className="profile-details">
                <h3><big className='nameTitle'>ରାଜାବାବୁ ଶାହ</big> : <sm className="work"> Web Developer </sm></h3>
                <hr style={{ borderColor: "black" }} />
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
                <div className="footerinfo">
                    <hr style={{ borderColor: "black", marginBottom: "10px" }} />
                    <q className='quote'>THE ENDING, TO ALL STORIES IS WRITTEN BY DESTINY</q>
                </div>
            </div>
        </div>
    )
}

export default Home;