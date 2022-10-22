import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { CSSObject, styled, Theme, useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DataArrayIcon from '@mui/icons-material/DataArray';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import TimelineIcon from '@mui/icons-material/Timeline';
import { ReactNode, useCallback, useState } from 'react';
import { Stack } from '@mui/material';
import { blue, green, purple, red } from '@mui/material/colors';
import { useRouter } from 'next/router';
import SidebarLink, { SidebarLinkData } from './SidebarLink';

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

const SidebarLinks: SidebarLinkData[] = [
  {
    icon: <DataArrayIcon />,
    title: 'Data Structures',
    colour: green[500],
    href: '/data-structures',
  },
  {
    icon: <SortIcon />,
    title: 'Sorting',
    colour: blue[500],
    href: '/sorting',
  },
  {
    icon: <SearchIcon />,
    title: 'Searching',
    colour: purple[500],
    href: '/searching',
  },
  {
    icon: <TimelineIcon />,
    title: 'Graph Traversal',
    colour: red[500],
    href: '/graph-traversal',
  },
];

export default function Sidebar() {
  const theme = useTheme();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const renderLinks = useCallback((): ReactNode => {
    return SidebarLinks.map((link) => {
      const isActive = router.asPath.includes(link.href);

      return <SidebarLink key={link.href} link={link} isOpen={open} isActive={isActive} />;
    });
  }, [open, router.asPath]);

  return (
    <Box>
      <CustomDrawer variant="permanent" open={open}>
        <DrawerHeader sx={{ justifyContent: open ? 'flex-end' : 'center' }}>
          {open ? (
            <IconButton onClick={handleDrawerClose} title="Collapse sidebar">
              {theme.direction === 'rtl' ? <ChevronRightIcon fontSize="large" /> : <ChevronLeftIcon fontSize="large" />}
            </IconButton>
          ) : (
            <IconButton onClick={handleDrawerOpen} title="Expand sidebar">
              <ChevronRightIcon fontSize="large" />
            </IconButton>
          )}
        </DrawerHeader>
        <Divider />
        <Stack gap={3} height="100%" mt={2}>
          {renderLinks()}
        </Stack>
      </CustomDrawer>
    </Box>
  );
}
