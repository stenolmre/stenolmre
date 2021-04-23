import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

const Navbar = ({ startAnimation = true }) => {
  const router = useRouter()

  const [language, setLanguage] = useState('')
  const languages = ['ENG', 'EST']
  const user_lang = language === 'ENG'

  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    setLanguage(Cookies.get('ui_language') ? Cookies.get('ui_language') : 'ENG')
  }, [])

  return <nav>
    <div className="logo">
      <div className="logo_triangle_one"/>
      <div className="logo_triangle_two"/>
      <div className="logo_triangle_three"/>
      <div className="logo_triangle_four"/>
    </div>
    <section>
      <Nav pathname={router.pathname} url="/" language={user_lang} nameEng="Home" nameEst="Esileht"/>
      <Nav pathname={router.pathname} url="/about" language={user_lang} nameEng="About" nameEst="Meist"/>
      <Nav pathname={router.pathname} url="/portfolio" language={user_lang} nameEng="Portfolio" nameEst="Portfoolio"/>
      <Nav pathname={router.pathname} url="/contact" language={user_lang} nameEng="Contact" nameEst="Kontakt"/>
      <Link href="/askprice"><a className="navbar_button">{user_lang ? 'Ask for price' : 'Hinnapäring'}</a></Link>
      <div className="navs_sub_container" onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)}>
        <p style={{ color: '#929292' }}>{language} <i className="fas fa-chevron-down"/></p>
        <div className="navs_sub">
          {
            languages.filter(x => x !== language).map(el => <p key={el} onClick={() => {
              Cookies.set('ui_language', el)
              router.reload()
            }}>{el}</p>)
          }
        </div>
      </div>
    </section>
    <div className="navbar_social_links">
      {
        languages.map(el => <p key={el} onClick={() => {
          Cookies.set('ui_language', el)
          router.reload()
        }} style={ language === el ? { color: 'var(--white)' } : { color: 'var(--gray)' } }>{el}</p>)
      }
    </div>
    <style jsx>{`
      nav {
        margin-top: ${startAnimation ? '0' : '-100px'};
      }

      .navs_sub {
        display: ${showMenu ? '' : 'none'};
      }
    `}</style>
  </nav>
}

const Nav = ({ pathname, url, language, nameEng, nameEst }) => {
  return <Link href={url}><a className={pathname === url ? 'active_nav' : ''}>{language ? nameEng : nameEst}</a></Link>
}

export default Navbar
