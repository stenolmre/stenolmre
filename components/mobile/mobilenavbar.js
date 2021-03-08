import React from 'react'
import Link from 'next/link'

const MobileNavbar = () => {
  return <div className="mobile_navbar">
    <Link href="/"><a>
      <img src="logo.png" alt="sten_olmre_logo"/>
    </a></Link>
    <div>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin-in"/>
      </a>
      <a href="https://github.com/stenolmre" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"/>
      </a>
      <a href="https://instagram.com/stenolmre" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"/>
      </a>
    </div>
  </div>
}

export default MobileNavbar
