import React, { useState } from 'react'
import {Links, Social} from './Data'

const Main = () => {

    const [links, setLinks] = useState(Links);
    const [social, setSocial] = useState(Social);

    return (
        <nav>
            <div className='navCenter'>
                <div className='navHeader'>
                    <img src='https://react-projects-11-navbar.netlify.app/static/media/logo.2bb7da65.svg' alt='coddingaddict' />
                    <button className='navToggle'></button>
                </div>
                <div className='linksContainer'>
                    <ul className='links'>
                        {links.map((link) => {
                            return (
                                <li>
                                    <a href={link.url}>{link.text}</a>
                                </li>
                            )
                        })}                       
                    </ul>
                </div>
                <ul className='socialIcons'>
                    {social.map((socialIcon) => {
                        return (
                            <li>
                                <a href={socialIcon.url}>{socialIcon.icon}</a>
                            </li>
                        )
                    })}                   
                </ul>
            </div>
        </nav>
    )
}

export default Main
