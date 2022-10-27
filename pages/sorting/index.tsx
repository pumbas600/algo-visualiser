import { TableBody, TableHead, TableRow } from '@mui/material';
import ContentLayout from '../../components/ContentLayout';
import Heading from '../../components/ContentLayout/Heading';
import StyledTable, { StyledCell } from '../../components/StyledTable';

const Sorting = () => {
  return (
    <ContentLayout>
      <Heading title="Sorting Algorithms" />
      <Heading subHeading title="Summary">
        <StyledTable>
          <TableHead>
            <TableRow>
              <StyledCell>Algorithm</StyledCell>
              <StyledCell>Best Runtime</StyledCell>
              <StyledCell>Average Runtime</StyledCell>
              <StyledCell>Worst Runtime</StyledCell>
              <StyledCell>In-place?</StyledCell>
              <StyledCell>Stable?</StyledCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <StyledCell>Selection Sort</StyledCell>
              <StyledCell>n²</StyledCell>
              <StyledCell>n²</StyledCell>
              <StyledCell>n²</StyledCell>
              <StyledCell>Yes</StyledCell>
              <StyledCell>No</StyledCell>
            </TableRow>
            <TableRow>
              <StyledCell>Insertion Sort</StyledCell>
              <StyledCell>n</StyledCell>
              <StyledCell>n²</StyledCell>
              <StyledCell>n²</StyledCell>
              <StyledCell>Yes</StyledCell>
              <StyledCell>Yes</StyledCell>
            </TableRow>
            <TableRow>
              <StyledCell>Merge Sort</StyledCell>
              <StyledCell>nlog(n)</StyledCell>
              <StyledCell>nlog(n)</StyledCell>
              <StyledCell>nlog(n)</StyledCell>
              <StyledCell>No</StyledCell>
              <StyledCell>Yes</StyledCell>
            </TableRow>
            <TableRow>
              <StyledCell>Quick Sort</StyledCell>
              <StyledCell>nlog(n)</StyledCell>
              <StyledCell>nlog(n)</StyledCell>
              <StyledCell>n²</StyledCell>
              <StyledCell>No</StyledCell>
              <StyledCell>No</StyledCell>
            </TableRow>
            <TableRow>
              <StyledCell>Heap Sort</StyledCell>
              <StyledCell>nlog(n)</StyledCell>
              <StyledCell>nlog(n)</StyledCell>
              <StyledCell>nlog(n)</StyledCell>
              <StyledCell>
                Recursive: No
                <br />
                Iterative: Yes
              </StyledCell>
              <StyledCell>No</StyledCell>
            </TableRow>
          </TableBody>
        </StyledTable>
      </Heading>
    </ContentLayout>
  );
};

export default Sorting;
