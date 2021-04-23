import React, { Fragment } from 'react'
import Head from '@/utils/head'
import cookies from 'next-cookies'

import Layout from '@/components/layout/layout'
import Enquiry from '@/components/enquiry/enquiry'
import Footer from '@/components/layout/footer'

const Index = ({ isLanguageEnglish }) => {
  return  <Fragment>
    <Head title="Sten Olmre - Software developer" url="askprice"/>
    <Layout>
      <Enquiry page isLanguageEnglish={isLanguageEnglish}/>
      <Footer />
    </Layout>
  </Fragment>
}

Index.getInitialProps = async ctx => {
  const { ui_language } = cookies(ctx)

  const isLanguageEnglish = ui_language === 'ENG'

  return { isLanguageEnglish }
}

export default Index
