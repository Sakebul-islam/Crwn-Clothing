import { createContext, useState, useEffect } from "react";

import {
  createUserDocumentFromAuth,
  onAuthAtateChangeListener,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const valu = { currentUser, setCurrentUser };

  

  useEffect(() => {
    const unsubscribe = onAuthAtateChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={valu}>{children}</UserContext.Provider>;
};
