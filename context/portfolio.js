import React, { createContext, useContext, useReducer } from 'react';
import { PortfolioReducer, initialState } from './../reducers/portfolio'

const PortfolioStateCtx = createContext();
const PortfolioDispatchCtx = createContext();

export function usePortfolioState() {
  const context = useContext(PortfolioStateCtx);

  if (context === undefined) throw new Error('usePortfolioState must be used within PortfolioProvider');

  return context;
}

export function usePortfolioDispatch() {
  const context = useContext(PortfolioDispatchCtx);

  if (context === undefined) throw new Error('usePortfolioDispatch must be used within PortfolioProvider');

  return context;
}

export default function PortfolioProvider({ children }) {
  const [portfolio, dispatch] = useReducer(PortfolioReducer, initialState);

  return <PortfolioStateCtx.Provider value={portfolio}>
    <PortfolioDispatchCtx.Provider value={dispatch}>
      { children }
    </PortfolioDispatchCtx.Provider>
  </PortfolioStateCtx.Provider>
}
