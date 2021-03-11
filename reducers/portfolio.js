import { GET_PORTFOLIO, PORTFOLIO_ERROR } from '@/actions/types'

export const initialState = {
  portfolio: [],
  loading: true,
  error: null
}

export const PortfolioReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_PORTFOLIO:
      return {
        portfolio: payload,
        loading: false,
        error: null
      }
    case PORTFOLIO_ERROR:
      return {
        portfolio: [],
        loading: false,
        error: payload
      }
    default:
      return {
        state
      }
  }
}
