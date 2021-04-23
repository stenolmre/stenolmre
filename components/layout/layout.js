import React, { Fragment } from 'react'

import Navbar from '@/components/layout/navbar'
import Footbar from '@/components/layout/footbar'

const Layout = ({ children, startAnimation }) => {
  return <Fragment>
    <Navbar startAnimation={startAnimation}/>
    { children }
    <Footbar/>
  </Fragment>
}

export default Layout
