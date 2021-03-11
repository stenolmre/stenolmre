import React, { Fragment, useEffect } from 'react'

import { useProfileState, useProfileDispatch } from '@/context/profile'
import { getProfile } from '@/actions/profile'

import Loader from '@/utils/loader'

const MobileAbout = () => {
  const { profile, loading } = useProfileState()
  const dispatchProfile = useProfileDispatch()

  useEffect(() => { getProfile(dispatchProfile) }, [dispatchProfile])

  return <div className="mobile_about">
    {
      loading ? <div className="main_loader"><Loader /></div> : profile && <Fragment>
        <img src="https://res.cloudinary.com/djz69vbsq/image/upload/ar_1:1,c_fill,g_auto,q_100,w_640/v1614861530/stenolmre/sten_olmre_profile_rq3uqc.jpg" alt="sten_olmre_profile" />
        <h1>{profile.name}</h1>
        <h4>// Minu Lugu</h4>
        <p>{profile.story}</p>
        <h4>// Andmed</h4>
        <p><span>Sünniaeg:</span> {profile.personal_info.date_of_birth}</p>
        <p><span>Email:</span> {profile.personal_info.email}</p>
        <p><span>Telefon:</span> {profile.personal_info.phone}</p>
        <h4>// Isikuomadused</h4>
        <h5>Tugevused</h5>
        <p>{profile.personality.strengths.join(', ')}</p>
        <h5>Huvialad</h5>
        <p>{profile.personality.hobbies.join(', ')}</p>
        <h4>// Haridus</h4>
        <h5>Keskharidus</h5>
        {
          profile.education.high_school.map(el => <p key={el}>{el}</p>)
        }
        <h5>Kõrgharidus</h5>
        {
          profile.education.university.map(el => <p key={el}>{el}</p>)
        }
        <h4>// Senine Töökogemus</h4>
        <h5>Sport</h5>
        {
          profile.jobs.sport.map(el => <p key={el}>{el}</p>)
        }
        <h5>Ettevõtted</h5>
        {
          profile.jobs.companies.map(el => <p key={el}>{el}</p>)
        }
      </Fragment>
    }
  </div>
}

export default MobileAbout
