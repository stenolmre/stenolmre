import React from 'react'
import Link from 'next/link'

const DemoPood = () => {
  return <div className="section_even section">
    <Link href="https://demo-e-store.vercel.app/"><a target="_blank" rel="noopener noreferrer" className="section_main">
      <img src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="illustration" />
      <div className="section_content">
        <h2>Demo e-pood</h2>
        <p>Demo veebipood, mugav ja kasutajasõbralik ostlemine. Telli endale uus elamus kodust lahkumata.</p>
        <h4>Technology</h4>
        <p>Demo veebipood on ehitatud reactjs'iga, kus API kutsung on ehitatud serveri vabale nextjs raamile. Nextjs hoolitseb ka samuti domeeni eest, mille abil on veebileht kenasti nähtav. Andmete haldamiseks on kasutatud MongoDB süsteemi ning CSS3 hoolitseb väljanägemise eest. Makselahenduseks on kasutatud Stripe võimalusi.</p>
      </div>
    </a></Link>
    <div className="section_icons">
      <img src="Nextjs-logo.png" alt="nextjs"/>
      <img src="react-js.png" alt="reactjs"/>
      <img src="MongoDB-Logo.png" alt="mongodb"/>
      <img src="stripe_logo.png" alt="stripe"/>
    </div>
    <a className="section_call_to_action" href="/">Hire me</a>
  </div>
}

export default DemoPood
