import { CSSObject, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Link from 'next/link';
import { ReactNode, useCallback } from 'react';

export interface SidebarLinkData {
  icon?: ReactNode;
  href: string;
  title: string;
  colour: string;
}

export interface SidebarLinkProps {
  link: SidebarLinkData;
  isActive: boolean;
  isOpen: boolean;
}

const SidebarLink = ({ link, isActive, isOpen }: SidebarLinkProps) => {
  const getItemButtonStyle = useCallback((): CSSObject => {
    return isActive
      ? {
          bgcolor: link.colour,
          color: 'white',
        }
      : {
          color: link.colour,
        };
  }, [isActive, link.colour]);

  return (
    <Link key={link.title} href={isActive ? '/' : link.href}>
      <ListItemButton
        sx={{
          mx: 0.5,
          maxHeight: 48,
          justifyContent: isOpen ? 'flex-start' : 'center',
          borderRadius: 24,
          '&:hover': {
            bgcolor: link.colour,
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
          {link.icon}
        </ListItemIcon>
        <ListItemText
          primary={link.title}
          primaryTypographyProps={{
            color: 'inherit',
            fontWeight: 'bold',
          }}
          sx={{ opacity: isOpen ? 1 : 0 }}
        />
      </ListItemButton>
    </Link>
  );
};

export default SidebarLink;
