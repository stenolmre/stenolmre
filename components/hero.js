import React from 'react'
import Link from 'next/link'

import Navbar from './navbar'

const HeroSection = () => {
  return <div className="hero" id="about">
    <Navbar />
    <img className="profile_image" src="https://res.cloudinary.com/djz69vbsq/image/upload/ar_1:1,c_fill,g_auto,q_100,w_640/v1614861530/stenolmre/sten_olmre_profile_rq3uqc.jpg" alt="sten_olmre_profile" />
    <h1>Sten Olmre</h1>
    <p>Software developer. A web application to help developers and programmers build beautifully designed portfolios in minutes.</p>
    <Link href="/#portfolio"><a className="hero_call_to_action">Portfoolio</a></Link>
  </div>
}

export default HeroSection
