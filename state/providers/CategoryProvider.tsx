import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';
import { categories, CategoryData, homeCategory } from '../../data/CategoryData';
import { CategoryContext } from '../contexts/CategoryContext';

export function matchesCategory(pathname: string, category: CategoryData): boolean {
  return (
    (category.matchExactly && pathname === category.href) ||
    (!category.matchExactly && pathname.includes(category.href))
  );
}

const CategoryContextProvider = ({ children }: { children?: ReactNode }) => {
  const router = useRouter();
  const [category, setCategory] = useState<CategoryData>(homeCategory);

  useEffect(() => {
    console.log(router.pathname);
    for (const category of categories) {
      if (matchesCategory(router.pathname, category)) {
        setCategory(category);
        return;
      }
    }
  }, [router.pathname]);

  return <CategoryContext.Provider value={{ category }}>{children}</CategoryContext.Provider>;
};

export default CategoryContextProvider;
