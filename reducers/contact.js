import { SEND_MESSAGE, MESSAGE_ERROR } from '@/actions/types'

export const initialState = {
  contact: null,
  error: null
}

export const ContactReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SEND_MESSAGE:
      return {
        contact: payload,
        error: null
      }
    case MESSAGE_ERROR:
      return {
        contact: null,
        error: payload
      }
    default:
      return {
        state
      }
  }
}
