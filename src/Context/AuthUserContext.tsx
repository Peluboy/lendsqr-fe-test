import { createContext, useState } from "react";

type AuthUserContextProviderProps = {
  children: React.ReactNode;
};

type UserType = {
  email: string;
  password: string;
};

export type AuthContextValue = {
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
};

export const AuthUserContext = createContext<AuthContextValue | null>(null);

const AuthUserContextProvider = ({
  children,
}: AuthUserContextProviderProps) => {
  // States
  const [user, setUser] = useState<UserType | null>(null);

  return (
    <AuthUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthUserContext.Provider>
  );
};

export default AuthUserContextProvider;
