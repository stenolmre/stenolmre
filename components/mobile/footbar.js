import React from 'react'
import Link from 'next/link'

const Footbar = () => {
  return <div className="footbar">
    <Link href="/about"><a>
      <i className="fas fa-user"/>
      <p>Minust</p>
    </a></Link>
    <Link href="/#portfolio"><a>
      <i className="fas fa-atom"/>
      <p>Portfoolio</p>
    </a></Link>
    <Link href="/#skills"><a>
      <i className="fas fa-tools"/>
      <p>Oskused</p>
    </a></Link>
    <Link href="/#contact"><a>
      <i className="fas fa-phone"/>
      <p>Kontakt</p>
    </a></Link>
  </div>
}

export default Footbar
