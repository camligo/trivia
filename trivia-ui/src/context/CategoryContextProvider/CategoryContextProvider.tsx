import { createContext, FC, ReactNode, useState } from "react";
import { CategoryResponse } from "../../services/trivia-service";

interface CategoryContextType {
  categories: CategoryResponse[];
  setCategories: React.Dispatch<React.SetStateAction<CategoryResponse[]>>;
}

export const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

interface CategoryContextProviderProps {
  children: ReactNode;
}

const CategoryContextProvider: FC<CategoryContextProviderProps> = ({ children }) => {
  const [categories, setCategories] = useState<CategoryResponse[]>([]);

  return (
    <CategoryContext.Provider value={{categories, setCategories}}>
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryContextProvider;