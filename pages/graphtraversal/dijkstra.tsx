import { List, ListItem, TableBody, TableHead, TableRow, Typography } from '@mui/material';
import Code from '../../components/Code';
import ContentLayout from '../../components/ContentLayout';
import Heading from '../../components/ContentLayout/Heading';
import StyledTable, { StyledCell } from '../../components/StyledTable';

const simplePsuedocode = `def dijkstra(weighted digraph (G, c), node s in V(G)):
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

const priorityFirstPseudocode = `def dijkstra(weighted digraph (G, c), node s in V(G)):
    Q = PriorityQueue()
    array colour[0..n-1], dist[0..n-1]

    for u in V(G):
        colour[u] = WHITE

    colour[S] = GREY
    Q.insert(s, 0)
    while not Q.is_empty():
        u = Q.peek()
        t1 = Q.get_key(u)

        for x in adjacent_nodes(u):
            t2 = t1 + c(u, x)
            if colour[x] == WHITE:
                colour[x] = GREY
                Q.insert(x, t2)
            elif colour[x] == GREY and Q.get_key(x) > t2:
                Q.decrease_key(x, t2)
        
        Q.delete()
        colour[u] = BLACK
        dist[u] = t1

    return dist
`;

const Dijkstra = () => {
  return (
    <ContentLayout>
      <Heading title="Dijkstra's Algorithm" />
      <Heading subHeading title="Facts">
        <ul>
          <li>Greedy.</li>
          <li>Doesn&apos;t support negative weights.</li>
        </ul>
      </Heading>
      <Heading title="Simple Version" />
      <Heading subHeading title="Psuedocode">
        <Code text={simplePsuedocode} />
      </Heading>
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
      <Heading title="Priority-First Search Version" />
      <Heading subHeading title="Psuedocode">
        <Code text={priorityFirstPseudocode} />
      </Heading>
      <Heading subHeading title="Running Time">
        <Typography>
          Using a binary heap: <b>O((n + m)log n)</b>.
        </Typography>
      </Heading>
    </ContentLayout>
  );
};

export default Dijkstra;
