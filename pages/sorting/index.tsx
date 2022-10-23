import { Box } from '@mui/material';
import Header from '../../components/Header';

const Sorting = () => {
  const sortButtonFunctions = {
    selectionSortClicked: () => {
      console.log("Selection Sort clicked");
    },
    insertionSortClicked: () => {
      console.log("Insertion Sort clicked");
    },
    shellSortClicked: () => {
      console.log("Shell Sort clicked");
    },
    mergeSortClicked: () => {
      console.log("Merge Sort clicked");
    },
    quickSortClicked: () => {
      console.log("Quick Sort clicked");
    },
    topologicalSortClicked: () => {
      console.log("Topological Sort clicked");
    },
    heapSortClicked: () => {
      console.log("Heap Sort clicked");
    }
  }

  return (
    <Box>
      <Header currentPage={1} buttonFunctions={sortButtonFunctions} />
      Hi!
    </Box>
  );
};

export default Sorting;
