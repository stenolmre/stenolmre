import React from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

const Footbar = () => {
  const isLanguageEnglish = Cookies.get('ui_language') === 'ENG'

  return <div className="footbar">
    <Nav url="/" name={isLanguageEnglish ? 'Home' : 'Esileht'} icon="fas fa-home"/>
    <Nav url="/portfolio" name={isLanguageEnglish ? 'Portfolio' : 'Portfoolio'} icon="fas fa-tags"/>
    <Nav url="/about" name={isLanguageEnglish ? 'About' : 'Meist'} icon="fas fa-sim-card"/>
    <Nav url="/askprice" name={isLanguageEnglish ? 'Enquiry' : 'Hinnapäring'} icon="fas fa-question"/>
    <Nav url="/contact" name={isLanguageEnglish ? 'Contact' : 'Kontakt'} icon="fas fa-phone"/>
  </div>
}

const Nav = ({ url, name, icon }) => {
  const { pathname } = useRouter()

  return <Link href={url}>
    <a style={ pathname === url ? { color: 'var(--pink)' } : { color: 'var(--white)' } }>
      <i className={icon}/>
      <p>{name}</p>
    </a>
  </Link>
}


export default Footbar
