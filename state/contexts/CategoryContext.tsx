import { createContext, useContext } from 'react';
import { CategoryData, homeCategory } from '../../data/CategoryData';

export interface CategoryContextState {
  current: CategoryData;
}

export const CategoryContext = createContext<CategoryContextState>({
  current: homeCategory,
});

const useCategoryContext = () => useContext(CategoryContext);

export default useCategoryContext;
