import { blue, green, purple, red } from '@mui/material/colors';
import { ReactNode } from 'react';
import DataArrayIcon from '@mui/icons-material/DataArray';
import TimelineIcon from '@mui/icons-material/Timeline';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';

export interface CategoryData {
  matchExactly?: boolean;
  icon?: ReactNode;
  colour: string;
  title: string;
  href: string;
}

export const homeCategory: CategoryData = {
  matchExactly: true,
  colour: blue[500],
  title: 'Home',
  href: '/',
};

export const sidebarCategories: CategoryData[] = [
  {
    icon: <DataArrayIcon />,
    title: 'Data Structures',
    colour: green[500],
    href: '/datastructures/',
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
    href: '/graphtraversal',
  },
];

export const categories: CategoryData[] = [homeCategory, ...sidebarCategories];
