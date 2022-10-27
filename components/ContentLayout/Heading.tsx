import { Typography, Stack } from '@mui/material';
import { ReactNode } from 'react';

export interface HeadingProps {
  title: string;
  subHeading?: boolean;
  id?: string;
  children?: ReactNode;
}

const Heading = ({ title, subHeading, id, children }: HeadingProps) => {
  return (
    <Stack spacing={1}>
      <Typography id={id} variant={subHeading ? 'h5' : 'h4'} fontWeight={subHeading ? undefined : 'bold'} pt={1}>
        {title}
      </Typography>
      {children}
    </Stack>
  );
};

export default Heading;
