import { Typography } from '@mui/material';
import InlineLink from '../../components/A';
import CodeBlock from '../../components/CodeBlock';
import Code from '../../components/CodeBlock/Code';
import ContentLayout from '../../components/ContentLayout';
import Heading from '../../components/ContentLayout/Heading';

const pseudocode = `def floyd(weighted digraph (G, c)):
    array d[0..n-1, 0..n-1] # Initialise distance matrix
    d = c
    for x in V(G):
        for u in V(G):
            for v in V(G):
                # See if there is a shorter path via node x
                d[u, v] = min(d[u, v], d[u, x] + d[x, v])
    
    return d
`;

const Floyd = () => {
  return (
    <ContentLayout>
      <Heading title="Floyd's Algorithm" />
      <Heading subHeading title="Facts">
        <ul>
          <li>Non-greedy.</li>
          <li>Solves the all-pairs shortest path problem (APSP).</li>
          <li>Can support negative weights.</li>
          <li>Based on Warshall&apos;s algorithm (Returns whether there exists a path between two nodes).</li>
          <li>
            More efficient than <InlineLink href="/graphtraversal/bellmanford">Bellman-Ford</InlineLink>.
          </li>
          <li>Negative cycles can be detected by seeing if the distance from a node to itself is less than 0.</li>
        </ul>
      </Heading>
      <Heading title="Psuedocode">
        <CodeBlock text={pseudocode} />
        <Typography>
          This can be optimised by adding the checks: <Code>if x == u: continue</Code> and{' '}
          <Code>if x == v: continue</Code>.
        </Typography>
      </Heading>
      <Heading subHeading title="Complexity">
        <Typography>
          Runs in <b>O(n³)</b> time, where n is the number of nodes.
        </Typography>
      </Heading>
    </ContentLayout>
  );
};

export default Floyd;
