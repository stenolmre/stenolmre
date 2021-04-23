import React, { useEffect } from 'react'

import { usePortfolioState, usePortfolioDispatch } from '@/context/portfolio'
import { getPortfolio } from '@/actions/portfolio'

const usePortfolio = () => {
  const portfolio = usePortfolioState()
  const dispatchPortfolio = usePortfolioDispatch()

  useEffect(() => { getPortfolio(dispatchPortfolio) }, [dispatchPortfolio])

  return portfolio
}

export default usePortfolio
