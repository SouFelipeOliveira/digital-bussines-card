import React from 'react';
import './profile.css'
import imageProfile from '../../images/profile.png'

export default function Profile() {
    return (
        <div className='profile'>
            <img src={imageProfile} alt='profile' className='img--profile'/>
        </div>
    )
}