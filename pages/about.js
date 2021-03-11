import React, { Fragment, useEffect } from 'react'
import Head from '@/utils/head'

import { useProfileState, useProfileDispatch } from '@/context/profile'
import { getProfile } from '@/actions/profile'

import MobileNavbar from '@/components/mobilenavbar'
import Navbar from '@/components/navbar'
import Tools from '@/components/tools'
import Frameworks from '@/components/frameworks'
import Contact from '@/components/contact'
import Footbar from '@/components/footbar'
import MobileAbout from '@/components/mobileabout'
import Loader from '@/utils/loader'

const Index = () => {
  const { profile, loading } = useProfileState()
  const dispatchProfile = useProfileDispatch()

  useEffect(() => { getProfile(dispatchProfile) }, [dispatchProfile])

  return  <Fragment>
    <Head title="Sten Olmre - About me"/>
    <Navbar />
    <MobileNavbar />
    {
      loading ? <div className="main_loader"><Loader /></div> : profile && <Fragment>
        <div className="about">
          <div className="about_info">
            <img src="https://res.cloudinary.com/djz69vbsq/image/upload/ar_1:1,c_fill,g_auto,q_100,w_640/v1614861530/stenolmre/sten_olmre_profile_rq3uqc.jpg" alt="sten_olmre_profile" />
            <div className="about_info_details">
              <h2>{profile.name}</h2>
              <h4>// Andmed</h4>
              <p><span>Sünniaeg:</span> {profile.personal_info.date_of_birth}</p>
              <p><span>Email:</span> {profile.personal_info.email}</p>
              <p><span>Telefon:</span> {profile.personal_info.phone}</p>
              <h4>// Haridus</h4>
              <h5>Keskharidus</h5>
              {
                profile.education.high_school.map(el => <p key={el}>{el}</p>)
              }
              <h5>Kõrgharidus</h5>
              {
                profile.education.university.map(el => <p key={el}>{el}</p>)
              }
            </div>
          </div>
          <div className="about_story">
            <h4 style={{ marginTop: '25px' }}>// Minu Lugu</h4>
            <p>{profile.story}</p>
            <h4>// Isikuomadused</h4>
            <h5>Tugevused</h5>
            <p>{profile.personality.strengths.join(', ')}</p>
            <h5>Huvialad</h5>
            <p>{profile.personality.hobbies.join(', ')}</p>
            <h4>// Senine Töökogemus</h4>
            <h5>Sport</h5>
            {
              profile.jobs.sport.map(el => <p key={el}>{el}</p>)
            }
            <h5>Ettevõtted</h5>
            {
              profile.jobs.companies.map(el => <p key={el}>{el}</p>)
            }
          </div>
        </div>
      </Fragment>
    }
    <MobileAbout />
    <Tools />
    <Frameworks />
    <Contact />
    <Footbar />
  </Fragment>
}

export default Index
