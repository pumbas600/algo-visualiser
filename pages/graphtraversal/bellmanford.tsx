import { Typography } from '@mui/material';
import Code from '../../components/Code';
import ContentLayout from '../../components/ContentLayout';
import Heading from '../../components/ContentLayout/Heading';

const pseudocode = `def bellman_ford(weighted digraph (G, c); node s in V(G)):
    array dist[0..n-1]
    for u in V(G):
        dist[u] = ထ

    dist[s] = 0
    for i in range(n):
        # Repeat this code n times
        for x in V(G):
            for v in V(G):
                dist[v] = min(dist[v], dist[x] + c(x, v))
    
    return dist
`;

const BellmanFord = () => {
  return (
    <ContentLayout>
      <Heading title="Bellman-Ford's Algorithm" />
      <Heading subHeading title="Facts">
        <ul>
          <li>Non-greedy.</li>
          <li>Can handle negative weights.</li>
          <li>Doesn&apos;t support negative weight cycles.</li>
          <li>Can be modified to detect negative weight cycles.</li>
        </ul>
      </Heading>
      <Heading title="Psuedocode">
        <Code text={pseudocode} />
      </Heading>
      <Heading subHeading title="Running Time">
        <Typography>
          Runs in time <b>θ(nm)</b> if implemented with an adjacency list as the two for loops can be replaced with{' '}
          <code>for (x, v) in E(G)</code>. m is the number of edges and n is the number of nodes.
        </Typography>
      </Heading>
    </ContentLayout>
  );
};

export default BellmanFord;
