import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { CodeBlock } from 'react-code-blocks';
import ContentLayout from '../../components/ContentLayout';
import Heading from '../../components/ContentLayout/Heading';

const psuedocode = `def dijkstra(weighted digraph (G, c), node s in V(G)):
    array colour[0..n-1], dist[0..n-1]

    for u in V(G):
        dist[u] = c[s, u]
        colour[u] = WHITE

    dist[s] = 0; colour[s] = BLACK
    while there_is_a_white_node():
        u = find_white_node_with_min_dist()
        colour[u] = BLACK
        for x in V(G):
            if colour[x] == WHITE:
                dist[x] = min(dist[x], dist[u] + c[u, x])

    return dist
`;

const Dijkstra = () => {
  return (
    <ContentLayout>
      <Heading title="Dijkstra's Algorithm" />
      <Heading subHeading title="Psuedocode" />
      <CodeBlock language="python" text={psuedocode} />
      <Heading subHeading title="Running Time" />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Graph Data Structure</TableCell>
              <TableCell>Running Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Adjacency List</TableCell>
              <TableCell>Θ(an + m) = Θ(n)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Adjacency Matrix</TableCell>
              <TableCell>Θ(an + n²) = Θ(n²)</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </ContentLayout>
  );
};

export default Dijkstra;
