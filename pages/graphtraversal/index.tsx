import { TableBody, TableHead, TableRow, Typography } from '@mui/material';
import InlineLink from '../../components/A';
import ContentLayout from '../../components/ContentLayout';
import Heading from '../../components/ContentLayout/Heading';
import StyledTable, { StyledCell } from '../../components/StyledTable';

const GraphTraversal = () => {
  return (
    <ContentLayout>
      <Heading title="Graph Traversal" />
      <Heading subHeading title="Summary">
        <StyledTable>
          <TableHead>
            <TableRow>
              <StyledCell />
              <StyledCell colSpan={2} sx={{ textAlign: 'center' }}>
                Weighted
              </StyledCell>
              <StyledCell colSpan={2} sx={{ textAlign: 'center' }}>
                Unweighted
              </StyledCell>
            </TableRow>
            <TableRow>
              <StyledCell>Algorithm</StyledCell>
              <StyledCell>SSSP</StyledCell>
              <StyledCell>APSP</StyledCell>
              <StyledCell>SSSP</StyledCell>
              <StyledCell>APSP</StyledCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <StyledCell>BFS</StyledCell>
              <StyledCell>No</StyledCell>
              <StyledCell>No</StyledCell>
              <StyledCell>Yes</StyledCell>
              <StyledCell>Yes</StyledCell>
            </TableRow>
            <TableRow>
              <StyledCell>Dijkstra</StyledCell>
              <StyledCell>Yes</StyledCell>
              <StyledCell>Yes*</StyledCell>
              <StyledCell>Yes</StyledCell>
              <StyledCell>Yes*</StyledCell>
            </TableRow>
            <TableRow>
              <StyledCell>Bellman-Ford</StyledCell>
              <StyledCell>Yes</StyledCell>
              <StyledCell>Yes*</StyledCell>
              <StyledCell>Yes</StyledCell>
              <StyledCell>Yes*</StyledCell>
            </TableRow>
          </TableBody>
          <TableRow>
            <StyledCell>Floyd</StyledCell>
            <StyledCell>Yes</StyledCell>
            <StyledCell>Yes</StyledCell>
            <StyledCell>Yes</StyledCell>
            <StyledCell>Yes</StyledCell>
          </TableRow>
        </StyledTable>
        <Typography>* With some modification to the algorithm.</Typography>
        <Typography>
          <InlineLink href="/graphtraversal/floyd">Floyd</InlineLink> and{' '}
          <InlineLink href="/graphtraversal/bellmanford">Bellman-Ford</InlineLink> can detect negative weight cycles.
        </Typography>
      </Heading>
    </ContentLayout>
  );
};

export default GraphTraversal;
