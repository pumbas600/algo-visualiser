import { Box } from '@mui/material';
import Header from '../../components/Header';

const DataStructures = () => {
  const dataStructuresButtonFunctions = {
    stackClicked: () => {
      console.log("Stack clicked");
    },
    queueClicked: () => {
      console.log("Queue clicked");
    },
    linkedListClicked: () => {
      console.log("Linked List clicked");
    },
    binaryHeapClicked: () => {
      console.log("Binary Heap clicked");
    },
    graphClicked: () => {
      console.log("Graph clicked");
    }
  }

  return (
    <Box>
      <Header currentPage={0} buttonFunctions={dataStructuresButtonFunctions} />
      Hi!
    </Box>
  );
};

export default DataStructures;
