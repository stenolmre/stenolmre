import React, { useRef } from 'react'

import useElementInViewport from '@/hooks/useElementInViewport'

import Headline from '@/components/utils/headline'

const About = ({ aboutPage, isLanguageEnglish }) => {
  const aboutSection = useRef(null)
  const isVisible = useElementInViewport(aboutSection)

  return <div className={aboutPage ? 'about_page' : 'about'} id="about" ref={aboutSection}>
    <Headline
      isVisible={isVisible}
      page={aboutPage}
      subtitle={isLanguageEnglish ? 'about us' : 'meist'}
      upperLineName={isLanguageEnglish ? 'Our work.' : 'Hindame kõrgelt'}
      headlineSpan={isLanguageEnglish ? 'right' : 'hea'}
      lowerLineName={isLanguageEnglish ? 'Done' : 'tulemust, mis on'}
    />
    <div className="about_us">
      <img src="https://res.cloudinary.com/djz69vbsq/image/upload/ar_1:1,c_fill,g_auto,q_100,w_640/v1614861530/stenolmre/sten_olmre_profile_rq3uqc.jpg" alt=""/>
      <p>{isLanguageEnglish ? 'Our mission is to empower every person and every organisation on the planet to achieve more. We strive to build beautiful websites and help owners to reach more customers through it. Our strategy is to build easy-to-use customer based sites with modern and eye-catching design.' : 'Meie missioon on aidata igal inimesel ja organisatsioonil maailmas saavutada rohkem. Me pingutame, et ehitada ilusaid veebilehti, mis tooksid kliendid ettevõttele lähemale ja annaksid suurema eelduse edukaks müügiks. Meie strateegia on luua veebilehti, mida on lihtne kasutada, kliendisõbralikud, modernsed ja silmatorkava disainiga.'}<br/><br/>-Sten Olmre, CEO</p>
    </div>
  </div>
}

export default About
