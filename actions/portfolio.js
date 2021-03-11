import axios from 'axios'

import { GET_PORTFOLIO, PORTFOLIO_ERROR } from './types'

export const getPortfolio = async (dispatch, data) => {
  try {
    const { data } = await axios.get('/api/portfolio/_get')

    dispatch({
      type: GET_PORTFOLIO,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: PORTFOLIO_ERROR,
      payload: err.response.data
    })
  }
}
