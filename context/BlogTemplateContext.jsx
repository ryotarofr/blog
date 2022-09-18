import { createContext, useContext, useState } from "react";

// Contextの作成
const BlogTemplateContext = createContext();

export const BlogTemplateProvider = ({ children }) => {
  const [cards, setCards] = useState([]);

  return (
    <BlogTemplateContext.Provider value={[cards, setCards]}>
      {children}
    </BlogTemplateContext.Provider>
  );
};

// 作成したContextを外部から使いやすいようにする
export const useBlogTemplateContext = () => useContext(BlogTemplateContext);
