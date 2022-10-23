import { Box } from '@mui/material';
import Header from '../../components/Header';

const Searching = () => {
  const searchButtonFunctions = {
    quickSelectClicked: () => {
      console.log("Quickselect clicked");
    },
    dfsClicked: () => {
      console.log("DFS clicked");
    },
    bfsClicked: () => {
      console.log("BFS clicked");
    },
    pfsClicked: () => {
      console.log("PFS clicked");
    },
    binarySearchClicked: () => {
      console.log("Binary Search clicked");
    }
  }

  return (
    <Box>
      <Header currentPage={2} buttonFunctions={searchButtonFunctions} />
      Hi!
    </Box>
  );
};

export default Searching;
