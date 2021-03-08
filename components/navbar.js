import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
  const { pathname } = useRouter()

  return <nav className="hero_banner">
    <Link href="/"><a>Esileht</a></Link>
    <Link href="/about"><a className={pathname === '/about' ? 'nav_active' : ''}>Minust</a></Link>
    <Link href="/#portfolio"><a>Portfolio</a></Link>
    <Link href="/#skills"><a>Skills</a></Link>
    <Link href="/#contact"><a>Hire me</a></Link>
  </nav>
}

export default Navbar
