import React from "react";
import { UserProvider } from "./context/UserContext";
import Header from "./components/Header";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";

const App = () => {
  return (
    <UserProvider>
      <Header />
      <main>
        <UserList />
        <UserDetails />
      </main>
    </UserProvider>
  );
};

export default App;
