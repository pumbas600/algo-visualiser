import { Box } from '@mui/material';
import Header from '../../components/Header';

const GraphTraversal = () => {
  const graphTraversalButtonFunctions = {
    dijkstraClicked: () => {
      console.log("Dijkstra clicked");
    },
    bellmanFordClicked: () => {
      console.log("Bellman-Ford clicked");
    },
    floydClicked: () => {
      console.log("Floyd clicked");
    },
    primClicked: () => {
      console.log("Prim clicked");
    },
    kruskalClicked: () => {
      console.log("Kruskal clicked");
    }
  }
  return (
    <Box>
      <Header currentPage={3} buttonFunctions={graphTraversalButtonFunctions} />
      Hi!
    </Box>
  );
};

export default GraphTraversal;
