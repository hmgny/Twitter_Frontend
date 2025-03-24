import { createContext, useState, useEffect } from "react";

export const TwitterContext = createContext();

export const TwitterContextProvider = ({ children }) => {
  const [userId, setUserId] = useState(localStorage.getItem("userId") || null);
  console.log("userId:" + userId);
  console.log("localStorage.userId:" + localStorage.getItem("userId"));

  useEffect(() => {
    if (userId) {
      localStorage.setItem("userId", userId);
    } else {
      localStorage.removeItem("userId");
    }
  }, [userId]);

  return (
    <TwitterContext.Provider value={{ userId, setUserId }}>
      {children}
    </TwitterContext.Provider>
  );
};
