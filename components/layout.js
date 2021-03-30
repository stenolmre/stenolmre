import React, { Fragment } from 'react'

import Navbar from '@/components/navbar'
import Footbar from '@/components/footbar'

const Layout = ({ children, startAnimation }) => {
  return <Fragment>
    <Navbar startAnimation={startAnimation}/>
    { children }
    <Footbar/>
  </Fragment>
}

export default Layout
