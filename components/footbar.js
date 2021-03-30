import React from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

const Footbar = () => {
  const user_lang = Cookies.get('lang') === 'ENG'

  return <div className="footbar">
    <Nav url="/" name={user_lang ? 'Home' : 'Esileht'} icon="fas fa-home"/>
    <Nav url="/portfolio" name={user_lang ? 'Portfolio' : 'Portfoolio'} icon="fas fa-tags"/>
    <Nav url="/about" name={user_lang ? 'About' : 'Meist'} icon="fas fa-sim-card"/>
    <Nav url="/askprice" name={user_lang ? 'Enquiry' : 'Hinnapäring'} icon="fas fa-question"/>
    <Nav url="/contact" name={user_lang ? 'Contact' : 'Kontakt'} icon="fas fa-phone"/>
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
