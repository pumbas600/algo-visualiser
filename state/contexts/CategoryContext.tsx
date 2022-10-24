import { createContext, useContext } from 'react';
import { CategoryData, homeCategory } from '../../data/CategoryData';

export interface CategoryContextState {
  category: CategoryData;
}

export const CategoryContext = createContext<CategoryContextState>({
  category: homeCategory,
});

const useCategoryContext = () => useContext(CategoryContext);

export default useCategoryContext;
