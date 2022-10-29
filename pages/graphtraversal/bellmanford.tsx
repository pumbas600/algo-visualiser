import { TableBody, TableHead, TableRow, Typography } from '@mui/material';
import InlineLink from '../../components/InlineLink';
import CodeBlock from '../../components/CodeBlock';
import Code from '../../components/CodeBlock/Code';
import ContentLayout from '../../components/ContentLayout';
import Heading from '../../components/ContentLayout/Heading';
import StyledTable, { StyledCell } from '../../components/StyledTable';

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
          <li>
            Less efficient than <InlineLink href="/graphtraversal/dijkstra">Dijkstra</InlineLink>.
          </li>
        </ul>
      </Heading>
      <Heading title="Psuedocode">
        <CodeBlock text={pseudocode} />
      </Heading>
      <Heading subHeading title="Complexity">
        <StyledTable>
          <TableHead>
            <TableRow>
              <StyledCell>Graph Data Structure</StyledCell>
              <StyledCell>Complexity</StyledCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <StyledCell>Adjacency List</StyledCell>
              <StyledCell>Θ(ne)</StyledCell>
            </TableRow>
            <TableRow>
              <StyledCell>Adjacency Matrix</StyledCell>
              <StyledCell>Θ(n³)</StyledCell>
            </TableRow>
          </TableBody>
        </StyledTable>
        <Typography>
          Where e is the number of edges and n is the number of nodes. When implemented with an adjacency list, it runs
          in <b>θ(ne)</b> time, because the two for loops can be replaced with <Code>for (x, v) in E(G)</Code>.
        </Typography>
      </Heading>
    </ContentLayout>
  );
};

export default BellmanFord;
