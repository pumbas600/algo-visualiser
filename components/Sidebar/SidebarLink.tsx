import { CSSObject, ListItemButton, ListItemIcon, ListItemText, Tooltip } from '@mui/material';
import Link from 'next/link';
import { useCallback } from 'react';
import { CategoryData } from '../../data/CategoryData';

export interface SidebarLinkProps {
  category: CategoryData;
  isActive: boolean;
  isOpen: boolean;
}

const SidebarLink = ({ category, isActive, isOpen }: SidebarLinkProps) => {
  const getItemButtonStyle = useCallback((): CSSObject => {
    return isActive
      ? {
          bgcolor: category.colour,
          color: 'white',
        }
      : {
          color: category.colour,
        };
  }, [isActive, category.colour]);

  return (
    <Link key={category.title} href={isActive ? '/' : category.href}>
      <Tooltip title={category.title} placement="right" arrow disableHoverListener={isOpen}>
        <ListItemButton
          sx={{
            mx: 0.5,
            maxHeight: 48,
            justifyContent: isOpen ? 'flex-start' : 'center',
            borderRadius: 24,
            '&:hover': {
              bgcolor: category.colour,
              color: 'white',
            },
            ...getItemButtonStyle(),
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: isOpen ? 3 : 'auto',
              justifyContent: 'center',
              color: 'inherit',
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
