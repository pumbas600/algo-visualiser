import { blue } from '@mui/material/colors';
import { ReactNode, useState } from 'react';
import { CategoryContext, CategoryData } from '../contexts/CategoryContext';

const homeCategory: CategoryData = {
  currentCategory: '/',
  categoryColour: blue[500],
};

const CategoryContextProvider = ({ children }: { children?: ReactNode }) => {
  const [category, setCategory] = useState<CategoryData>(homeCategory);

  return <CategoryContext.Provider value={{ ...category, setCategory }}>{children}</CategoryContext.Provider>;
};

export default CategoryContextProvider;
