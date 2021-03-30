import React, { createContext, useContext, useReducer } from 'react';
import { ProfileReducer, initialState } from '@/reducers/profile'

const ProfileStateCtx = createContext();
const ProfileDispatchCtx = createContext();

export function useProfileState() {
  const context = useContext(ProfileStateCtx);

  if (context === undefined) throw new Error('useProfileState must be used within ProfileProvider');

  return context;
}

export function useProfileDispatch() {
  const context = useContext(ProfileDispatchCtx);

  if (context === undefined) throw new Error('useProfileDispatch must be used within ProfileProvider');

  return context;
}

export default function ProfileProvider({ children }) {
  const [profile, dispatch] = useReducer(ProfileReducer, initialState);

  return <ProfileStateCtx.Provider value={profile}>
    <ProfileDispatchCtx.Provider value={dispatch}>
      { children }
    </ProfileDispatchCtx.Provider>
  </ProfileStateCtx.Provider>
}
