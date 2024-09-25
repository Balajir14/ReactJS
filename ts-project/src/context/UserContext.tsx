import { createContext, ReactNode, useContext, useState } from "react";

export interface UserType {
  firstName: string;
  lastName: string;
  middleName: string;
  dob: string;
  age: number;
  email: string;
  phone: string;
  address: string;
  password: string;
  confirmPassword: string;
}

export type UserTypeWithoutAge = Omit<UserType, "age">;

interface UserContextType {
  users: UserType[];
  storeUserData: (user: UserType) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export default function UserProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<UserType[]>([]);

  const storeUserData = (user: UserType) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <UserContext.Provider value={{ users, storeUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export const useCurrentUser = () => {
  const context = useContext(UserContext);
  // if (!context) {
  //   console.log("useTheme is not defined.");
  // }
  return context;
};
