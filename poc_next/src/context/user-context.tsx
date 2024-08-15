'use client';

import React from 'react';
import { TypeUser } from '@/types/user';

type IUserContext = {
  user: TypeUser | null;
  setUserState: React.Dispatch<React.SetStateAction<TypeUser | null>>;
};

export function useUser (){
  const context = React.useContext(UserContext);
  if (context === null) {
    throw new Error('useUser deve ser usado dentro de um provider');
  }
  return context;
};

const UserContext = React.createContext<IUserContext | null>(null);

export function UserContextProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user: TypeUser | null;
}) {
  const [userState, setUserState] = React.useState<TypeUser | null>(user);
  return (
    <UserContext.Provider value={{ user: userState, setUserState }}>
      {children}
    </UserContext.Provider>
  );
}
