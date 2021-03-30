import React from 'react'
import ContactProvider from './contact'
import PortfolioProvider from './portfolio'
import ProfileProvider from './profile'
import EnquiryProvider from './enquiry'

const GlobalState = ({ children }) => <ContactProvider>
  <PortfolioProvider>
    <ProfileProvider>
      <EnquiryProvider>
        { children }
      </EnquiryProvider>
    </ProfileProvider>
  </PortfolioProvider>
</ContactProvider>

export default GlobalState
