import React, { Fragment } from 'react'
import Head from '@/utils/head'

import Layout from '@/components/layout'
import Contact from '@/components/contact'

const Index = () => {
  return  <Fragment>
    <Head title="Sten Olmre - Software developer" url="contact"/>
    <Layout>
      <Contact contactPage />
    </Layout>
  </Fragment>
}

export default Index
