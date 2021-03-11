import { GET_PROFILE, PROFILE_ERROR } from '@/actions/types'

export const initialState = {
  profile: null,
  loading: true,
  error: null
}

export const ProfileReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_PROFILE:
      return {
        profile: payload,
        loading: false,
        error: null
      }
    case PROFILE_ERROR:
      return {
        profile: null,
        loading: false,
        error: payload
      }
    default:
      return {
        state
      }
  }
}
