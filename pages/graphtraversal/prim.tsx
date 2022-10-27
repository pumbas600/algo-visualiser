import { Typography } from '@mui/material';
import Code from '../../components/Code';
import ContentLayout from '../../components/ContentLayout';
import Heading from '../../components/ContentLayout/Heading';

const simplePsuedocode = `def prim(weighted digraph (G, c), vertex s in V(G)):
    S = { s }
    E = {}
    
    while S != V(G):
        find a minimum weight edge e = {u, v} such that u in S, v not in S
        S.add(v)
        E.add(e)
    
    return E
`;

const priorityFirstPseudocode = `def prim(weighted digraph (G, c), node s in V(G)):
    Q = PriorityQueue()
    array colour[0..n-1], pred[0..n-1]

    for u in V(G):
        colour[u] = WHITE
        pred[u] = None

    colour[S] = GREY
    Q.insert(s, 0)
    while not Q.is_empty():
        u = Q.peek()

        for x in adjacent_nodes(u):
            t = c(u, x)
            if colour[x] == WHITE:
                colour[x] = GREY
                pred[x] = u
                Q.insert(x, t)
            elif colour[x] == GREY and Q.get_key(x) > t:
                # |E| decrease key operations
                Q.decrease_key(x, t)
                pred[x] = u
        
        # n delete operations
        Q.delete()
        colour[u] = BLACK

    return pred
`;

const Prim = () => {
  return (
    <ContentLayout>
      <Heading title="Prim's Algorithm" />
      <Heading subHeading title="Facts">
        <ul>
          <li>Greedy.</li>
          <li>Finds a minimum spanning tree (MST).</li>
          <li>
            Always selects the edges with the minimum weight so that a cycle isn&apos;t created and the resulting tree
            stays connected.
          </li>
          <li>Can support negative weights.</li>
        </ul>
      </Heading>
      <Heading title="Pseudocode" />
      <Heading subHeading title="Simple Version">
        <Code text={simplePsuedocode} />
      </Heading>
      <Heading subHeading title="Priority-First Search Version">
        <Code text={priorityFirstPseudocode} />
      </Heading>
      <Heading subHeading title="Running Time">
        <Typography>
          Runs in best case time <b>O(m + nlog n)</b>, where m is the number of edges and n is the number of nodes..
        </Typography>
      </Heading>
    </ContentLayout>
  );
};

export default Prim;
