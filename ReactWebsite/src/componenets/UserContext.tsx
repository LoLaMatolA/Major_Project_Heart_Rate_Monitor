// UserContext.js
import { createContext, useState } from "react";

export const UserContext = createContext<any>({
  userData: null,
  updateUserData: () => {},
});

//@ts-ignore
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  //@ts-ignore
  const updateUserData = (newUserData) => {
    setUserData(newUserData);
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
};

// export const useUser = () => useContext(UserContext);
