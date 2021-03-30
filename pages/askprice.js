import React, { Fragment } from 'react'
import Head from '@/utils/head'

import Layout from '@/components/layout'
import AskPrice from '@/components/askprice'
import Footer from '@/components/footer'

const Index = () => {
  return  <Fragment>
    <Head title="Sten Olmre - Software developer" url="askprice"/>
    <Layout>
      <AskPrice page/>
      <Footer />
    </Layout>
  </Fragment>
}

export default Index
