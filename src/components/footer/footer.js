import React from 'react';
import './footer.css';
// import facebookIcon from '../../images/Facebook Icon.png'
import instagramIcon from '../../images/Instagram Icon.png'
import twitterIcon from '../../images/Twitter Icon.png'
import gitHubIcon from '../../images/GitHub Icon.png'


export default function Footer() {
    return(
        <footer>
            <div className='footer--icons'>
                <button className='footer-icon-button' >
                    <a href='https://www.instagram.com/sou_felipeoliveira/' target='_blank'>
                        <img src={instagramIcon} alt="instagram-icon" className='footer-icon-img' />
                    </a>
                </button>
                <button className='footer-icon-button' >
                    <a href='https://twitter.com/Felipe04880251' target='_blank'>
                        <img src={twitterIcon} alt="twitter-icon" className='footer-icon-img' />
                    </a>
                </button>
                <button className='footer-icon-button' >
                    <a href='https://github.com/SouFelipeOliveira' target='_blank'>
                        <img src={gitHubIcon} alt="github-icon" className='footer-icon-img' />
                    </a>
                </button>
            </div>
        </footer>
    )
}
