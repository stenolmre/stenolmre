import React, { Fragment } from 'react'
import Head from '@/utils/head'

import Hero from '@/components/hero'
import About from '@/components/about'
import Portfolio from '@/components/portfolio'
import Contact from '@/components/contact'

const Index = () => <Fragment>
  <Head title="Sten Olmre - Software developer"/>
  <Hero/>
  <About/>
  <Portfolio/>
  <Contact/>
</Fragment>

export default Index
