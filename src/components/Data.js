import React from 'react'
import {ReactComponent as FacebookIcon} from '../svgs/facebook.svg'
import {ReactComponent as TwitterIcon} from '../svgs/twitter.svg'
import {ReactComponent as LinkedinIcon} from '../svgs/linkedin.svg'
import {ReactComponent as BehanceIcon} from '../svgs/behance.svg'

export const Links = [
    {
        id: 1,
        url: '/',
        text: 'home',
    },
    {
        id: 2,
        url: '/about',
        text: 'about',
    },
    {
        id: 3,
        url: '/projects',
        text: 'projects',
    },
    {
        id: 4,
        url: '/contact',
        text: 'contact',
    },
    {
        id: 5,
        url: '/profile',
        text: 'profile',
    },
];

export const Social = [
    {
      id: 1,
      url: 'https://www.twitter.com',
      icon: <FacebookIcon />,
    },
    {
      id: 2,
      url: 'https://www.twitter.com',
      icon: <TwitterIcon />,
    },
    {
      id: 3,
      url: 'https://www.twitter.com',
      icon: <LinkedinIcon />,
    },
    {
      id: 4,
      url: 'https://www.twitter.com',
      icon: <BehanceIcon />,
    },
  ];
