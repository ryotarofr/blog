import { createContext, useContext, useState } from "react";

// Contextの作成
const CloseBurgerButtonContext = createContext();
const CloseSearchButtonContext = createContext();

export const CloseButtonProvider = ({ children }) => {
  const [buegerOpened, setBurgerOpened] = useState(false);
  const [seachOpened, setSearchOpened] = useState(false);

  return (
    <CloseBurgerButtonContext.Provider value={[buegerOpened, setBurgerOpened]}>
      <CloseSearchButtonContext.Provider value={[seachOpened, setSearchOpened]}>
        {children}
      </CloseSearchButtonContext.Provider>
    </CloseBurgerButtonContext.Provider>
  );
};

// 作成したContextを外部から使いやすいようにする
export const useCloseBurgerButtonContext = () =>
  useContext(CloseBurgerButtonContext);
export const useCloseSearchButtonContext = () =>
  useContext(CloseSearchButtonContext);
