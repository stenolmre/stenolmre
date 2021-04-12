import React, { useEffect, useRef, useState } from 'react'
import Cookies from 'js-cookie'

import isElementOutViewport from '@/utils/isElementOutViewport'

import { useProfileState, useProfileDispatch } from '@/context/profile'
import { getProfile } from '@/actions/profile'

import Headline from '@/utils/headline'

const About = ({ aboutPage }) => {
  const user_lang = Cookies.get('lang') === 'ENG'

  const { profile, loading } = useProfileState()
  const dispatchProfile = useProfileDispatch()

  useEffect(() => { getProfile(dispatchProfile) }, [dispatchProfile])

  const aboutSection = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => isElementOutViewport(aboutSection.current, isVisible,  setIsVisible))
    return () => window.removeEventListener('scroll', isElementOutViewport, true)
  }, [aboutSection.current, isVisible])

  return <div className={aboutPage ? 'about_page' : 'about'} id="about" ref={aboutSection}>
    <Headline language={user_lang} isVisible={isVisible} contactPage={aboutPage} subtitle={user_lang ? 'about us' : 'meist'} upperLineName={user_lang ? 'Our work.' : 'Hindame kõrgelt'} headlineSpan={user_lang ? 'right' : 'hea'} lowerLineName={user_lang ? 'Done' : 'tulemust, mis on'}/>
    <div className="about_us">
      <img src="https://res.cloudinary.com/djz69vbsq/image/upload/ar_1:1,c_fill,g_auto,q_100,w_640/v1614861530/stenolmre/sten_olmre_profile_rq3uqc.jpg" alt=""/>
      <p>{user_lang ? 'Our mission is to empower every person and every organisation on the planet to achieve more. We strive to build beautiful websites and help owners to reach more customers through it. Our strategy is to build easy-to-use customer based sites with modern and eye-catching design.' : 'Meie missioon on aidata igal inimesel ja organisatsioonil maailmas saavutada rohkem. Me pingutame, et ehitada ilusaid veebilehti, mis tooksid kliendid ettevõttele lähemale ja annaksid suurema eelduse edukaks müügiks. Meie strateegia on luua veebilehti, mida on lihtne kasutada, kliendisõbralikud, modernsed ja silmatorkava disainiga.'}<br/><br/>-Sten Olmre, CEO</p>
    </div>
  </div>
}

export default About
