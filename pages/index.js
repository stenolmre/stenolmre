import React, { Fragment } from 'react'
import Head from '@/utils/head'

import MobileNavbar from '@/components/mobilenavbar'
import Hero from '@/components/hero'
import Sections from '@/components/section'
import Tools from '@/components/tools'
import Frameworks from '@/components/frameworks'
import Contact from '@/components/contact'
import Footbar from '@/components/footbar'

const Index = () => <Fragment>
  <Head title="Sten Olmre - Software developer"/>
  <MobileNavbar/>
  <Hero/>
  <Sections/>
  <Tools/>
  <Frameworks/>
  <Contact/>
  <Footbar/>
</Fragment>

export default Index
