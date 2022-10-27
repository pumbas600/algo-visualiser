import { Paper, styled, Table, TableCell, tableCellClasses, TableContainer } from '@mui/material';
import { grey } from '@mui/material/colors';
import { ReactNode } from 'react';

export const StyledCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: grey[300],
    fontWeight: 'bold',
  },
  fontSize: 15,
}));

const StyledTable = ({ children }: { children?: ReactNode }) => {
  return (
    <TableContainer component={Paper}>
      <Table>{children}</Table>
    </TableContainer>
  );
};

export default StyledTable;
