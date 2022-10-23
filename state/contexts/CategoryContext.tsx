import { blue } from '@mui/material/colors';
import { createContext, useContext } from 'react';

export interface CategoryData {
  currentCategory: string;
  categoryColour: string;
}

export interface CategoryContextState extends CategoryData {
  setCategory(category: CategoryData): void;
}

export const CategoryContext = createContext<CategoryContextState>({
  currentCategory: '/',
  categoryColour: blue[500],
  setCategory() {
    throw new Error('This function is unimplemented');
  },
});

const useCategoryContext = () => useContext(CategoryContext);

export default useCategoryContext;
