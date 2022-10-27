import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { CSSObject, styled, Theme, useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ReactNode, useCallback, useState } from 'react';
import { Stack } from '@mui/material';
import { useRouter } from 'next/router';
import SidebarLink from './SidebarLink';
import { matchesCategory } from '../../state/providers/CategoryProvider';
import { sidebarCategories } from '../../data/CategoryData';
import useCategoryContext from '../../state/contexts/CategoryContext';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(8)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  borderRightWidth: 0,
}));

const CustomDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function Sidebar({ children }: { children?: ReactNode }) {
  const theme = useTheme();
  const router = useRouter();
  const category = useCategoryContext();
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  const renderLinks = useCallback((): ReactNode => {
    return sidebarCategories.map((category) => {
      const isActive = matchesCategory(router.pathname, category);

      return <SidebarLink key={category.href} category={category} isOpen={isOpen} isActive={isActive} />;
    });
  }, [isOpen, router.pathname]);

  return (
    <Box>
      <CustomDrawer variant="permanent" open={isOpen}>
        <DrawerHeader sx={{ justifyContent: isOpen ? 'flex-end' : 'center', bgcolor: category.current.colour }}>
          {isOpen ? (
            <IconButton onClick={handleDrawerClose} title="Collapse sidebar" sx={{ color: 'white' }}>
              {theme.direction === 'rtl' ? <ChevronRightIcon fontSize="large" /> : <ChevronLeftIcon fontSize="large" />}
            </IconButton>
          ) : (
            <IconButton onClick={handleDrawerOpen} title="Expand sidebar" sx={{ color: 'white' }}>
              <ChevronRightIcon fontSize="large" />
            </IconButton>
          )}
        </DrawerHeader>
        <Divider />
        <Stack gap={3} mt={2}>
          {renderLinks()}
        </Stack>
      </CustomDrawer>
      <Box ml={8} position="relative">
        {children}
      </Box>
    </Box>
  );
}
