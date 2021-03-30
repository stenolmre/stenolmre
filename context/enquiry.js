import React, { createContext, useContext, useReducer } from 'react';
import { EnquiryReducer, initialState } from '@/reducers/enquiry'

const EnquiryStateCtx = createContext();
const EnquiryDispatchCtx = createContext();

export function useEnquiryState() {
  const context = useContext(EnquiryStateCtx);

  if (context === undefined) throw new Error('useEnquiryState must be used within EnquiryProvider');

  return context;
}

export function useEnquiryDispatch() {
  const context = useContext(EnquiryDispatchCtx);

  if (context === undefined) throw new Error('useEnquiryDispatch must be used within EnquiryProvider');

  return context;
}

export default function EnquiryProvider({ children }) {
  const [enquiry, dispatch] = useReducer(EnquiryReducer, initialState);

  return <EnquiryStateCtx.Provider value={enquiry}>
    <EnquiryDispatchCtx.Provider value={dispatch}>
      { children }
    </EnquiryDispatchCtx.Provider>
  </EnquiryStateCtx.Provider>
}
