import axios from 'axios'

import { GET_PROFILE, PROFILE_ERROR } from './types'

export const getProfile = async (dispatch, data) => {
  try {
    const { data } = await axios.get('/api/profile/_get')

    dispatch({
      type: GET_PROFILE,
      payload: data[0]
    })
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: err.response.data
    })
  }
}
