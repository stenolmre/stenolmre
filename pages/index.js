import React, { Fragment } from 'react'
import Head from '@/utils/head'
import cookies from 'next-cookies'

import Hero from '@/components/hero'
import About from '@/components/about'
import Portfolio from '@/components/portfolio'
import Contact from '@/components/contact/contact'

const Index = ({ isLanguageEnglish }) => <Fragment>
  <Head title="Sten Olmre - Software developer"/>
  <Hero isLanguageEnglish={isLanguageEnglish}/>
  <About isLanguageEnglish={isLanguageEnglish}/>
  <Portfolio isLanguageEnglish={isLanguageEnglish}/>
  <Contact isLanguageEnglish={isLanguageEnglish}/>
</Fragment>

Index.getInitialProps = async ctx => {
  const { ui_language } = cookies(ctx)

  const isLanguageEnglish = ui_language === 'ENG'

  return { isLanguageEnglish }
}

export default Index
