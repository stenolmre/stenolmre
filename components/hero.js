import React, { Fragment, useEffect } from 'react'
import Link from 'next/link'

import { useProfileState, useProfileDispatch } from '@/context/profile'
import { getProfile } from '@/actions/profile'

import Navbar from './navbar'
import Loader from '@/utils/loader'

const HeroSection = () => {
  const { profile, loading } = useProfileState()
  const dispatchProfile = useProfileDispatch()

  useEffect(() => { getProfile(dispatchProfile) }, [dispatchProfile])

  return <div className="hero" id="about">
    <Navbar />
    <img className="profile_image" src="https://res.cloudinary.com/djz69vbsq/image/upload/ar_1:1,c_fill,g_auto,q_100,w_640/v1614861530/stenolmre/sten_olmre_profile_rq3uqc.jpg" alt="sten_olmre_profile" />
    {
      loading ? <div className="main_loader"><Loader /></div> : profile && <Fragment>
        <h1>{profile.name}</h1>
        <p>{profile.qualification}</p>
        <p>{profile.summary}</p>
      </Fragment>
    }
    <Link href="/#portfolio"><a id="portfolio" className="hero_call_to_action">Portfoolio</a></Link>
  </div>
}

export default HeroSection
