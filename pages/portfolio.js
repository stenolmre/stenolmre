import React, { Fragment } from 'react'
import Head from '@/utils/head'

import Layout from '@/components/layout'
import Portfolio from '@/components/portfolio'
import Footer from '@/components/footer'

const Index = () => {
  return  <Fragment>
    <Head title="Sten Olmre - Software developer" url="portfolio"/>
    <Layout>
      <Portfolio portfolioPage />
      <Footer />
    </Layout>
  </Fragment>
}

export default Index
