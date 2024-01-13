import React from 'react';
import './main.css';
import linkedinIcon from '../../images/linkedin-icon.png'
import emailIcon from '../../images/email-icon.png'


export default function Main() {
    return (
        <div className='main--card'>
            <h1 className='main--card-title'> Felipe Oliveira</h1>
            <h3 className='main--card-subtitle'>Full Stack developer</h3>
            <p className='main--card-site'>website</p>

            <div className='contact-icons'>
                <a href='mailto:flipeaz342@gmail.com' className='text-link'>
                    <button className='contact-icon-button-email'>
                        <img src={emailIcon} alt="email-icon" className='contact-icon-img' />
                        <p className='contact-icon-text-email'>Email</p>
                    </button>
                </a>
                <a href='https://www.linkedin.com/in/felipe-oliveira-384b00265/' target='_blank' className='text-link'>
                    <button className='contact-icon-button-linkedin' >
                        <img src={linkedinIcon} alt="linkedin-icon" className='contact-icon-img' />
                        <p className='contact-icon-text-linkedin'> linkedIn</p>
                    </button>
                </a>
            </div>
            <div className='About'>
                <h3 className='About-title'>
                        About
                </h3>
                <p className='About-text'>
                    I am a full stack developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                </p>

                <h3 className='Interests-title'>
                    Interests
                </h3>
                <p className='Interests-text'>
                    Jiu-Jitsu. Music. Reader. Internet fanatic. Animes. Entrepreneur. Travel geek. Rubiks cube.
                </p>
            </div>
        </div>
    )
}