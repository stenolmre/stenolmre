import { SEND_ENGUIRY, ENGUIRY_ERROR } from '@/actions/types'

export const initialState = {
  enquiry: null,
  error: null
}

export const EnquiryReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SEND_ENGUIRY:
      return {
        enquiry: payload,
        error: null
      }
    case ENGUIRY_ERROR:
      return {
        enquiry: null,
        error: payload
      }
    default:
      return {
        state
      }
  }
}
