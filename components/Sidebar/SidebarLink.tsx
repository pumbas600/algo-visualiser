import { CSSObject, IconButton, ListItemButton, Box, ListItemText, Tooltip, ListItemIcon } from '@mui/material';
import Link from 'next/link';
import { useCallback } from 'react';
import { CategoryData } from '../../data/CategoryData';

export interface SidebarLinkProps {
  category: CategoryData;
  isActive: boolean;
  isOpen: boolean;
}

const SidebarLink = ({ category, isActive, isOpen }: SidebarLinkProps) => {
  const getButtonStyle = useCallback((): CSSObject => {
    const activeStyles: CSSObject = {
      bgcolor: category.colour,
      color: 'white',
    };

    return {
      ...(isActive ? activeStyles : { color: category.colour, '&:active': { boxShadow: 'none' } }),
      '&:hover': activeStyles,
    };
  }, [isActive, category.colour]);

  return (
    <Link key={category.title} href={category.href}>
      <Tooltip title={category.title} placement="right" arrow disableHoverListener={isOpen}>
        <ListItemButton
          sx={{
            mx: 0,
            maxHeight: 48,
            color: category.colour,
            gap: 2,
            px: 1.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: '40px',
              p: 1,
              borderRadius: '50%',
              justifyContent: 'center',
              ...getButtonStyle(),
            }}
          >
            {category.icon}
          </ListItemIcon>
          <ListItemText
            primary={category.title}
            primaryTypographyProps={{
              color: 'inherit',
              fontWeight: 'bold',
            }}
            sx={{ opacity: isOpen ? 1 : 0 }}
          />
        </ListItemButton>
      </Tooltip>
    </Link>
  );
};

export default SidebarLink;
