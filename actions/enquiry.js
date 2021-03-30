import axios from 'axios'

import { SEND_ENGUIRY, ENGUIRY_ERROR } from './types'

export const sendEnquiry = async (dispatch, data, success, error) => {
  const config = { headers: { 'Content-Type': 'application/json' } }
  const body = JSON.stringify(data)

  try {
    const { data } = await axios.post('/api/enquiry/add', body, config)

    dispatch({
      type: SEND_ENGUIRY,
      payload: data
    })

    success()
  } catch (err) {
    dispatch({
      type: ENGUIRY_ERROR,
      payload: err.response.data
    })

    error()
  }
}
