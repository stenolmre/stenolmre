import React from 'react'
import Link from 'next/link'

const Section = ({ id, odd, href, image, name, excerpt, tech, images }) => {
  return <div className={odd ? 'section_odd section' : 'section_even section'} id={id ? 'portfolio' : ''}>
    <Link href={href}><a className={odd ? 'section_main section_main_odd' : 'section_main'}>
      <img src={image} alt="illustration" />
      <div className="section_content">
        <h2>{name}</h2>
        <p>{excerpt}</p>
        <h4>Tehnoloogiad</h4>
        <p>{tech}</p>
      </div>
    </a></Link>
    <div className="section_icons">
      {images}
    </div>
    <a className="section_call_to_action" href="/#contact">Võta ühendust</a>
  </div>
}

export default Section
