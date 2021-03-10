import React from 'react'
import ContactProvider from './contact'

const GlobalState = ({ children }) => <ContactProvider>
  { children }
</ContactProvider>

export default GlobalState
