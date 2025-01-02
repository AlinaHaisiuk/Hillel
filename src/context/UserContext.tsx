import React, { createContext, useContext, useState, ReactNode } from "react";

interface User {
  id: number;
  name: string;
}

interface UserContextType {
  users: User[];
  addUser: (name: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ]);

  const addUser = (name: string) => {
    setUsers([...users, { id: users.length + 1, name }]);
  };

  return (
    <UserContext.Provider value={{ users, addUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
