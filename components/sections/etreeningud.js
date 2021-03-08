import React from 'react'
import Link from 'next/link'

const Etreeningud = () => {
  return <div className="section_even section" id="portfolio">
    <Link href="https://etreeningud.ee"><a className="section_main">
      <img src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="illustration" />
      <div className="section_content">
        <h2>eTreeningud</h2>
        <p>A web application to help developers and programmers build beautifully designed portfolios in minutes</p>
        <h4>Technology</h4>
        <p>Mydevportfol.io is built using Angular2+, with a node backend for handling API requests, and runs on Heroku. Payments are handled via Stripe, Firebase provides the database solution and Bootstrap3 is the CSS framework of choice for this project</p>
      </div>
    </a></Link>
    <div className="section_icons">
      <img src="Nextjs-logo.png" alt="nextjs"/>
      <img src="react-js.png" alt="reactjs"/>
      <img src="MongoDB-Logo.png" alt="mongodb"/>
    </div>
    <a className="section_call_to_action" href="https://next-etreeningud.vercel.app">Hire me</a>
  </div>
}

export default Etreeningud
