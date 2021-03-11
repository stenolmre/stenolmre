import React from 'react'
import ContactProvider from './contact'
import PortfolioProvider from './portfolio'
import ProfileProvider from './profile'

const GlobalState = ({ children }) => <ContactProvider>
  <PortfolioProvider>
    <ProfileProvider>
      { children }
    </ProfileProvider>
  </PortfolioProvider>
</ContactProvider>

export default GlobalState
