import React, { useEffect } from 'react'
import Cookies from 'js-cookie'

import GlobalState from './../context/state'

import '@fortawesome/fontawesome-free/css/all.min.css'
import './../css/styles.css'

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    !Cookies.get('ui_language') && Cookies.set('ui_language', 'ENG')
  }, [])

  return <GlobalState>
    <Component { ...pageProps } />
    <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;900&display=swap');
    `}</style>
  </GlobalState>
}

export default App
