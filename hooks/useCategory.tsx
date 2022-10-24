import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { categories, CategoryData, homeCategory } from '../data/CategoryData';

export function matchesCategory(pathname: string, category: CategoryData): boolean {
  return (
    (category.matchExactly && pathname === category.href) ||
    (!category.matchExactly && pathname.includes(category.href))
  );
}

const useCategory = (): CategoryData => {
  const router = useRouter();
  const [category, setCategory] = useState<CategoryData>(homeCategory);

  useEffect(() => {
    for (const category of categories) {
      if (matchesCategory(router.pathname, category)) {
        setCategory(category);
        return;
      }
    }
  }, [router.pathname]);

  return category;
};

export default useCategory;
