import { AppBar, Box, Button, Toolbar } from '@mui/material';
import Link from 'next/link';
import { ReactNode, useCallback, useMemo } from 'react';
import useCategoryContext from '../../state/contexts/CategoryContext';

export default function Header() {
  const category = useCategoryContext();

  const isVisible = useMemo(() => category.current.subCategories.length !== 0, [category]);

  const renderSubcategories = useCallback((): ReactNode => {
    return category.current.subCategories.map((subCategory) => {
      return (
        <Link key={subCategory.href} href={`${category.current.href}${subCategory.href}`}>
          <Button variant="text" color="inherit">
            {subCategory.title}
          </Button>
        </Link>
      );
    });
  }, [category]);

  return (
    <Box>
      {isVisible && (
        <AppBar position="static" sx={{ bgcolor: category.current.colour }}>
          <Toolbar sx={{ gap: 6, justifyContent: 'flex-end' }}>{renderSubcategories()}</Toolbar>
        </AppBar>
      )}
    </Box>
  );
}
