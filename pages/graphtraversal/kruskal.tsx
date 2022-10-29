import { Typography } from '@mui/material';
import CodeBlock from '../../components/CodeBlock';
import Code from '../../components/CodeBlock/Code';
import ContentLayout from '../../components/ContentLayout';
import Heading from '../../components/ContentLayout/Heading';

const simplePsuedocode = `def kruskal(weighted graph (G, c)):
    T = {}

    # Put all the edges in the queue
    insert E(G) into a priority queue
    for e = {u, v} in E(G) in increasing order of weight:
        # This prevents cycles
        if u and v are not in the same tree:
            T.add(e)
            merge the trees of u and v
    
    return T
`;

const disjointSetsPseudocode = `def kruskal(weighted digraph (G, c)):
    A = DisjointSets()
    initialise A with each vertex in its own set
    sort the edges in increasing order of weight

    for e = {u, v} in increasing cost weight:
        if not A.set(u) == A.set(v):
          # Add this edge
          A.union(A.set(u), A.set(v))
    
    return A
`;

const Kruskal = () => {
  return (
    <ContentLayout>
      <Heading title="Kruskal's Algorithm" />
      <Heading subHeading title="Facts">
        <ul>
          <li>Greedy.</li>
          <li>Finds a minimum spanning tree (MST).</li>
          <li>Selects edges in order of increasing weight as long as they reach at least one new node.</li>
          <li>Can support negative weights.</li>
        </ul>
      </Heading>
      <Heading title="Pseudocode" />
      <Heading subHeading title="Simple Version">
        <CodeBlock text={simplePsuedocode} />
      </Heading>
      <Heading subHeading title="Disjoint Sets Version">
        <Typography>
          The disjoint sets data structure has the operations <Code>find</Code> and <Code>union</Code>. It can be
          implemented efficiently so that the main time taken is due to the sorting.
        </Typography>
        <CodeBlock text={disjointSetsPseudocode} />
      </Heading>
      <Heading subHeading title="Complexity">
        <Typography>
          Can be implemented to run in <b>O(elog n)</b> time, where e is the number of edges and n is the number of
          nodes.
        </Typography>
      </Heading>
    </ContentLayout>
  );
};

export default Kruskal;
