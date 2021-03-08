import React, { Fragment } from 'react'
import Head from '@/utils/head'

import MobileNavbar from '@/components/mobilenavbar'
import Navbar from '@/components/navbar'
import Tools from '@/components/tools'
import Frameworks from '@/components/frameworks'
import Contact from '@/components/contact'
import Footbar from '@/components/footbar'
import MobileAbout from '@/components/mobileabout'

const Index = () => <Fragment>
  <Head title="Sten Olmre - About me"/>
  <Navbar />
  <MobileNavbar />
  <div className="about">
    <div className="about_info">
      <img src="https://res.cloudinary.com/djz69vbsq/image/upload/ar_1:1,c_fill,g_auto,q_100,w_640/v1614861530/stenolmre/sten_olmre_profile_rq3uqc.jpg" alt="sten_olmre_profile" />
      <div className="about_info_details">
        <h2>Sten Olmre</h2>
        <h4>// Andmed</h4>
        <p><span>Sünniaeg:</span> 31.01.1995</p>
        <p><span>Email:</span> stenolmre@icloud.com</p>
        <p><span>Telefon:</span> +372 5346 1027</p>
        <h4>// Haridus</h4>
        <h5>Keskharidus</h5>
        <p>2002 - 2010 Pärnu Sütevaka Humanitaargümnaasium</p>
        <p>2010 - 2014 Audentese Spordigümnaasium</p>
        <h5>Kõrgharidus</h5>
        <p>2018 - ... TalTech Majandusteaduskonna Bakalaurus</p>
      </div>
    </div>
    <div className="about_story">
      <h4 style={{ marginTop: '25px' }}>// Minu Lugu</h4>
      <p>Mydevportfol.io is built using Angular2+, with a node backend for handling API requests, and runs on Heroku. Payments are handled via Stripe, Firebase provides the database solution and Bootstrap3 is the CSS framework of choice for this project</p>
      <h4>// Isikuomadused</h4>
      <h5>Tugevused</h5>
      <p>Meeskonnamängija, kiire õppimisvõime, kohusetundlik, hea suhtlemisoskus, arenemisvõimeline, panustan alati natuke rohkem kui on nõutud</p>
      <h5>Huvialad</h5>
      <p>Lugemine, jalgrattaga sõitmine, korvpall, uute veebiprogrammide loomine ning uute oskuste õppimine</p>
      <h4>// Senine Töökogemus</h4>
      <h5>Sport</h5>
      <p>2014 - 2016 BC Kalev/Cramo</p>
      <p>2016 - 2018, 2019 - 2020 TalTech</p>
      <p>2018 - 2019 Eesti Meeste Korvpallikoondis</p>
      <h5>Ettevõtted</h5>
      <p>04.2020 - 12.2020 KC Production</p>
      <p>09.2020 - ... Freelance</p>
    </div>
  </div>
  <MobileAbout />
  <Tools />
  <Frameworks />
  <Contact />
  <Footbar />
</Fragment>

export default Index
