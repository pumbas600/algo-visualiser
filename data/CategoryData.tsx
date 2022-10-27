import { blue, green, orange, purple, red } from '@mui/material/colors';
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
  subCategories: SubCategoryData[];
}

export interface SubCategoryData {
  href: string;
  title: string;
}

export const homeCategory: CategoryData = {
  matchExactly: true,
  colour: blue[500],
  title: 'Home',
  href: '/',
  subCategories: [],
};

export const sidebarCategories: CategoryData[] = [
  {
    icon: <DataArrayIcon />,
    title: 'Data Structures',
    colour: green[500],
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
    colour: blue[500],
    href: '/sorting',
    subCategories: [
      {
        title: 'Selection Sort',
        href: 'selection',
      },
      {
        title: 'Insertion Sort',
        href: '/insertion',
      },
      {
        title: 'Shell Sort',
        href: '/shell',
      },
      {
        title: 'Merge Sort',
        href: '/merge',
      },
      {
        title: 'Quick Sort',
        href: '/quick',
      },
      {
        title: 'Heap Sort',
        href: '/heap',
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
        href: 'binarysearch',
      },
      {
        title: 'Quick Select',
        href: 'quickselect',
      },
    ],
  },
  {
    icon: <TimelineIcon />,
    title: 'Graph Traversal',
    colour: red[500],
    href: '/graphtraversal',
    subCategories: [
      {
        title: 'Depth-first Search',
        href: 'dfs',
      },
      {
        title: 'Breadth-first Search',
        href: 'bfs',
      },
      {
        title: 'Priority-first Search',
        href: 'pfs',
      },
      {
        title: 'Topological Sorting',
        href: 'topologicalsorting',
      },
    ],
  },
  {
    icon: <TimelineIcon />,
    title: 'Minimum Paths',
    colour: orange[500],
    href: '/minimumpaths',
    subCategories: [
      {
        title: 'Dijkstra',
        href: 'dijkstra',
      },
      {
        title: 'Bellman-Ford',
        href: 'bellmanford',
      },
      {
        title: "Floyd's",
        href: 'floyd',
      },
      {
        title: "Prim's",
        href: 'prim',
      },
      {
        title: "Kruskal's",
        href: 'kruskal',
      },
    ],
  },
];

export const categories: CategoryData[] = [homeCategory, ...sidebarCategories];
