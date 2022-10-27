import { TableBody, TableHead, TableRow } from '@mui/material';
import Code from '../../components/Code';
import ContentLayout from '../../components/ContentLayout';
import Heading from '../../components/ContentLayout/Heading';
import StyledTable, { StyledCell } from '../../components/StyledTable';

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
      <Heading subHeading title="Running Time">
        <StyledTable>
          <TableHead>
            <TableRow>
              <StyledCell>Graph Data Structure</StyledCell>
              <StyledCell>Running Time</StyledCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <StyledCell>Adjacency List</StyledCell>
              <StyledCell>Θ(an + m) = Θ(n)</StyledCell>
            </TableRow>
            <TableRow>
              <StyledCell>Adjacency Matrix</StyledCell>
              <StyledCell>Θ(an + n²) = Θ(n²)</StyledCell>
            </TableRow>
          </TableBody>
        </StyledTable>
      </Heading>
      <Heading subHeading title="Psuedocode">
        <Code text={psuedocode} />
      </Heading>
    </ContentLayout>
  );
};

export default Dijkstra;
