import { TableBody, TableHead, TableRow, Typography } from '@mui/material';
import ContentLayout from '../../components/ContentLayout';
import Heading from '../../components/ContentLayout/Heading';
import CodeBlock from '../../components/CodeBlock';
import StyledTable, { StyledCell } from '../../components/StyledTable';
import InlineLink from '../../components/InlineLink';

const dfsPseudocode = `def dfs(graph G, node s):
    stack S
    array colour[0..n-1], pred[0..n-1], seen[0..n-1], done[0..n-1]

    for u in V(G):
        colour[u] = WHITE
        pred[u] = NULL
    time = 0
    for s in V(G):
        if colour[s] = GREY
            DFSVisit(s)
    return pred, seen, done
`;

const dfsVisitIterativePseudocode = `def DFSVisit(node s):
    color[s] = GREY
    seen[s] = time; time = time + 1
    S.insert(s)

    while not S.isEmpty():
        u = S.peek()
        if there is a neighbour v with colour[v] = WHITE:
            colour[v] = GREY; pred[v] = u
            seen[v] = time; time = time + 1
            S.insert(v)
        else:
            S.delete()
            colour[u] = BLACK
            done[u] = time; time = time + 1
`;

const dfsVisitRecursivePseudocode = `def DFSVisit(node s):
    colour[s] = GREY
    seen[s] = time; time = time + 1

    for each v adjacent to s:
        if colour[v] = WHITE:
            pred[v] = s
            DFSVisit(v)
    
    colour[s] = BLACK
    done[s] = time; time = time + 1
`;

const DepthFirstSearch = () => {
  return (
    <ContentLayout>
      <Heading title="Depth-first Search" />
      <Heading subHeading title="Facts">
        <ul>
          <li>A specific implementation of the General Graph Traversal Algorithm.</li>
          <li>Grey vertex selection rule: The next grey vertex is the youngest remaining grey vertex.</li>
          <li>
            Utilises a <InlineLink href="/datastructures/stack">stack</InlineLink> implementation to decide next node to
            visit.
          </li>
        </ul>
      </Heading>
      <Heading title="Pseudocode" />
      <Heading subHeading title="DFS Pseudocode">
        <CodeBlock text={dfsPseudocode} />
      </Heading>
      <Heading subHeading title="DFSVisit Iterative Pseudocode">
        <CodeBlock text={dfsVisitIterativePseudocode} />
      </Heading>
      <Heading subHeading title="DFSVisit Recursive Pseudocode">
        <CodeBlock text={dfsVisitRecursivePseudocode} />
      </Heading>
      <Heading title="Complexity">
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
              <StyledCell>Θ(n + e) where e is the number of edges</StyledCell>
            </TableRow>
            <TableRow>
              <StyledCell>Adjacency Matrix</StyledCell>
              <StyledCell>Θ(n) per vertex for n vertices = Θ(n²)</StyledCell>
            </TableRow>
          </TableBody>
        </StyledTable>
      </Heading>
      <Heading title="Types of Arcs">
        <Typography>Let (v, w) be an arc in a digraph traversed by DFS.</Typography>
        <StyledTable>
          <TableHead>
            <TableRow>
              <StyledCell>Case</StyledCell>
              <StyledCell>Condition</StyledCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <StyledCell>Tree Arc</StyledCell>
              <StyledCell>
                seen[v] {'<'} seen[w] {'<'} done[w] {'<'} done[v]
              </StyledCell>
            </TableRow>
            <TableRow>
              <StyledCell>Forward Arc</StyledCell>
              <StyledCell>
                seen[v] {'<'} seen[w] {'<'} done[w] {'<'} done[v]
              </StyledCell>
            </TableRow>
            <TableRow>
              <StyledCell>Back Arc</StyledCell>
              <StyledCell>
                seen[w] {'<'} seen[v] {'<'} done[v] {'<'} done[w]
              </StyledCell>
            </TableRow>
            <TableRow>
              <StyledCell>Cross Arc</StyledCell>
              <StyledCell>
                seen[w] {'<'} done[w] {'<'} seen[v] {'<'} done[v]
              </StyledCell>
            </TableRow>
          </TableBody>
        </StyledTable>
      </Heading>
      <Heading title="Determining Ancestors Using DFS">
        <Typography>
          Let v and w be nodes in a search forest F obtained by performing DFS. Additionally suppose that seen[v] {'<'}{' '}
          seen[w].
        </Typography>
        <ul>
          <li>
            If v is an ancestor of w in F: seen[v] {'<'} seen[w] {'<'} done[w] {'<'} done[v].
          </li>
          <li>
            If v is not an ancestor of w in F: seen[v] {'<'} done[v] {'<'} seen[w] {'<'} done[w].
          </li>
        </ul>
      </Heading>
    </ContentLayout>
  );
};

export default DepthFirstSearch;
