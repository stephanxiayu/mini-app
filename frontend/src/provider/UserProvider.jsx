import React, { createContext, useState, useContext } from "react";

// Erstellen des Contexts
const UserContext = createContext();

// Erstellen eines Providers, um den newUser zu verwalten und ihn in der gesamten App verfügbar zu machen
export const UserProvider = ({ children }) => {
  const [user, setNewUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setNewUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook zum Verwenden des newUser und setNewUser in Komponenten
export const useUser = () => useContext(UserContext);
