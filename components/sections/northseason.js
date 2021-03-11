import React, { Fragment } from 'react'
import Link from 'next/link'

import Section from './section'

const NorthSeason = () => {
  return <Section
    href="https://qw-kappa.vercel.app"
    image="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    name="North Season"
    tech="Elamusmatkad maagilisel Lapimaal. Puhka aktiivselt nii suvel kui ka lumisel talvel Põhja-Soomes."
    excerpt="Elamusmatkad maagilisel Lapimaal. Puhka aktiivselt nii suvel kui ka lumisel talvel Põhja-Soomes."
    tech="North Season veebileht matkajale on ehitatud reactjs'iga, kus API kutsung on tehtud serveri vabale nextjs raamile. Nextjs hoolitseb ka samuti domeeni eest, mille abil on veebileht kenasti nähtav. Andmete haldamiseks on kasutatud MongoDB süsteemi ning CSS3 hoolitseb väljanägemise eest. Makselahenduseks on kasutatud Stripe võimalusi."
    images={
      <Fragment>
        <img src="Nextjs-logo.png" alt="nextjs"/>
        <img src="react-js.png" alt="reactjs"/>
        <img src="MongoDB-Logo.png" alt="mongodb"/>
        <img src="stripe_logo.png" alt="stripe"/>
      </Fragment>
    }/>
}

export default NorthSeason
