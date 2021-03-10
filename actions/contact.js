import axios from 'axios'

import { SEND_MESSAGE, MESSAGE_ERROR } from './types'

export const sendMessage = async (dispatch, data, success, error) => {
  const config = { headers: { 'Content-Type': 'application/json' } }
  const body = JSON.stringify(data)

  try {
    const { data } = await axios.post('/api/contact/add', body, config)

    dispatch({
      type: SEND_MESSAGE,
      payload: data
    })

    success()
  } catch (err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: err.response.data
    })

    error()
  }
}
