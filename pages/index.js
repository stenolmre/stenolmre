import React, { Fragment } from 'react'
import Head from '@/utils/head'

import MobileNavbar from '@/components/mobilenavbar'
import Hero from '@/components/hero'
import Etreeningud from '@/components/sections/etreeningud'
import NorthSeason from '@/components/sections/northseason'
import DemoPood from '@/components/sections/demopood'
import Tools from '@/components/tools'
import Frameworks from '@/components/frameworks'
import Contact from '@/components/contact'
import Footbar from '@/components/footbar'

const Index = () => <Fragment>
  <Head title="Sten Olmre - Software developer"/>
  <MobileNavbar />
  <Hero />
  <Etreeningud />
  <NorthSeason />
  <DemoPood />
  <Tools />
  <Frameworks />
  <Contact />
  <Footbar />
</Fragment>

export default Index
