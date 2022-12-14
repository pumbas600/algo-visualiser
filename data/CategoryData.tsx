import { blue, green, orange, purple, red, yellow } from '@mui/material/colors';
import { ReactNode } from 'react';
import DataArrayIcon from '@mui/icons-material/DataArray';
import TimelineIcon from '@mui/icons-material/Timeline';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import HomeIcon from '@mui/icons-material/Home';

export interface CategoryData {
  matchExactly?: boolean;
  icon?: ReactNode;
  colour: string;
  title: string;
  href: string;
  subCategories: SubCategoryData[];
}

export interface SubCategoryData {
  href: string;
  title: string;
}

export const homeCategory: CategoryData = {
  icon: <HomeIcon />,
  matchExactly: true,
  colour: green[500],
  title: 'Home',
  href: '/',
  subCategories: [],
};

export const categories: CategoryData[] = [
  homeCategory,
  {
    icon: <DataArrayIcon />,
    title: 'Data Structures',
    colour: orange[500],
    href: '/datastructures',
    subCategories: [
      {
        title: 'Array',
        href: '/array',
      },
      {
        title: 'Linked List',
        href: '/linkedlist',
      },
      {
        title: 'Queue',
        href: '/queue',
      },
      {
        title: 'Stack',
        href: '/stack',
      },
      {
        title: 'Heap',
        href: '/heap',
      },
      {
        title: 'Binary Tree',
        href: '/binarytree',
      },
    ],
  },
  {
    icon: <SortIcon />,
    title: 'Sorting',
    colour: red[500],
    href: '/sorting',
    subCategories: [
      {
        title: 'Selection',
        href: '/selection',
      },
      {
        title: 'Insertion',
        href: '/insertion',
      },
      {
        title: 'Shell',
        href: '/shell',
      },
      {
        title: 'Merge',
        href: '/merge',
      },
      {
        title: 'Quick',
        href: '/quick',
      },
      {
        title: 'Heap',
        href: '/heap',
      },
      {
        title: 'Topological',
        href: '/topological',
      },
    ],
  },
  {
    icon: <SearchIcon />,
    title: 'Searching',
    colour: purple[500],
    href: '/searching',
    subCategories: [
      {
        title: 'Binary Search',
        href: '/binarysearch',
      },
      {
        title: 'Quick Select',
        href: '/quickselect',
      },
      {
        title: 'Depth-first Search',
        href: '/dfs',
      },
      {
        title: 'Breadth-first Search',
        href: '/bfs',
      },
      {
        title: 'Priority-first Search',
        href: '/pfs',
      },
    ],
  },
  {
    icon: <TimelineIcon />,
    title: 'Graph Traversal',
    colour: blue[500],
    href: '/graphtraversal',
    subCategories: [
      {
        title: 'Dijkstra',
        href: '/dijkstra',
      },
      {
        title: 'Bellman-Ford',
        href: '/bellmanford',
      },
      {
        title: 'Prim',
        href: '/prim',
      },
      {
        title: 'Kruskal',
        href: '/kruskal',
      },
      {
        title: 'Floyd',
        href: '/floyd',
      },
    ],
  },
];
